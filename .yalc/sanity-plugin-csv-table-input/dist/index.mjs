import { set, PatchEvent, unset, defineType, defineField, defineArrayMember, definePlugin } from "sanity";
import { jsx, jsxs } from "react/jsx-runtime";
import { UploadIcon, TrashIcon } from "@sanity/icons";
import { useToast, Card, Stack, Text, Label, Flex, Button, Badge, TextArea, Box, TextInput } from "@sanity/ui";
import Papa from "papaparse";
import { useId, useState, useCallback } from "react";
const generateKey = () => Math.random().toString(36).substring(2, 9), CsvTableView = ({ data, onCellChange }) => /* @__PURE__ */ jsx(Box, { overflow: "auto", padding: 1, children: /* @__PURE__ */ jsx("table", { style: { width: "100%", borderCollapse: "collapse" }, children: /* @__PURE__ */ jsx("tbody", { children: data.map((row) => /* @__PURE__ */ jsx("tr", { children: row.cells.map((cell, cellIndex) => /* @__PURE__ */ jsx("td", { style: { padding: "4px", minWidth: "150px" }, children: /* @__PURE__ */ jsx(
  TextInput,
  {
    value: cell,
    onChange: onCellChange ? (e) => onCellChange(row._key, cellIndex, e.currentTarget.value) : void 0,
    readOnly: !onCellChange,
    fontSize: 1,
    padding: 2
  }
) }, cellIndex)) }, row._key)) }) }) }), CsvTableInput = (props) => {
  const { onChange, value: rawValue, elementProps } = props, value = rawValue, toast = useToast(), inputId = useId(), [rawInput, setRawInput] = useState(""), [parsing, setParsing] = useState(!1), updateSanityValue = useCallback(
    (parsedRows) => {
      const newTableData = parsedRows.map((row) => ({
        _type: "csvRow",
        _key: generateKey(),
        cells: row.map((cell) => cell.trim())
      })), newData = newTableData.length > 0 ? newTableData : void 0, patch = set(newData, ["data"]);
      onChange(PatchEvent.from([patch])), setRawInput("");
    },
    [onChange]
  ), handleParse = useCallback(() => {
    if (!rawInput) {
      toast.push({
        status: "warning",
        title: "Input Empty",
        description: "Please upload a file or paste CSV text."
      });
      return;
    }
    setParsing(!0), Papa.parse(rawInput, {
      header: !1,
      // Assume no header for simple row parsing
      skipEmptyLines: !0,
      complete: (results) => {
        if (setParsing(!1), results.data.length === 0) {
          toast.push({
            status: "error",
            title: "Parsing Failed",
            description: "Could not extract any data. Check the format."
          });
          return;
        }
        updateSanityValue(results.data), toast.push({
          status: "success",
          title: "Data Imported",
          description: `Successfully imported ${results.data.length} rows.`
        });
      },
      error: (error) => {
        setParsing(!1), toast.push({
          status: "error",
          title: "CSV Error",
          description: error.message
        });
      }
    });
  }, [rawInput, updateSanityValue, toast]), handleFileChange = useCallback(
    (event) => {
      const file = event.target.files?.[0];
      if (!file || !file.name.endsWith(".csv")) {
        toast.push({
          status: "error",
          title: "Invalid File",
          description: "Please select a CSV file."
        });
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        const csvText = e.target?.result;
        setRawInput(csvText), toast.push({
          status: "info",
          title: "File Loaded",
          description: 'CSV content loaded into text area. Click "Parse and Load" to process.'
        });
      }, reader.onerror = () => {
        toast.push({
          status: "error",
          title: "File Read Error",
          description: "Could not read the file."
        });
      }, reader.readAsText(file);
    },
    [toast]
  ), handleClear = useCallback(() => {
    onChange(PatchEvent.from([unset(["data"])])), setRawInput(""), toast.push({
      status: "info",
      title: "Data Cleared",
      description: "The table data has been removed from the document."
    });
  }, [onChange, toast]), handleCellChange = useCallback(
    (rowKey, cellIndex, newValue) => {
      onChange(PatchEvent.from([set(newValue, ["data", { _key: rowKey }, "cells", cellIndex])]));
    },
    [onChange]
  ), rows = value?.data?.length ?? 0;
  return /* @__PURE__ */ jsx(Card, { padding: 4, border: !0, radius: 3, tone: "default", ...elementProps, children: /* @__PURE__ */ jsxs(Stack, { space: 4, children: [
    /* @__PURE__ */ jsx(Text, { weight: "semibold", children: "CSV Data Importer" }),
    /* @__PURE__ */ jsxs(Card, { border: !0, radius: 2, padding: 3, children: [
      /* @__PURE__ */ jsx(Label, { htmlFor: `${inputId}-file`, children: "1. Upload a CSV File" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          id: `${inputId}-file`,
          type: "file",
          accept: ".csv",
          onChange: handleFileChange,
          style: { display: "none" }
        }
      ),
      /* @__PURE__ */ jsxs(Flex, { align: "center", gap: 3, marginTop: 2, children: [
        /* @__PURE__ */ jsx(
          Button,
          {
            text: "Choose CSV File",
            icon: UploadIcon,
            onClick: useCallback(
              () => document.getElementById(`${inputId}-file`)?.click(),
              [inputId]
            ),
            mode: "bleed",
            tone: "primary",
            disabled: parsing
          }
        ),
        rawInput && /* @__PURE__ */ jsx(Badge, { tone: "primary", padding: 2, radius: 3, children: "Content Ready" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Card, { border: !0, radius: 2, padding: 3, children: [
      /* @__PURE__ */ jsx(Label, { htmlFor: `${inputId}-text`, children: "2. Or Paste Raw CSV Text" }),
      /* @__PURE__ */ jsx(
        TextArea,
        {
          id: `${inputId}-text`,
          rows: 5,
          value: rawInput,
          onChange: useCallback(
            (event) => setRawInput(event.currentTarget.value),
            []
          ),
          placeholder: "Paste your comma-separated values (CSV) here...",
          disabled: parsing
        }
      )
    ] }),
    /* @__PURE__ */ jsxs(Flex, { gap: 2, justify: "flex-start", wrap: "wrap", children: [
      /* @__PURE__ */ jsx(
        Button,
        {
          text: parsing ? "Parsing..." : "Parse and Load Data",
          icon: UploadIcon,
          tone: "positive",
          onClick: handleParse,
          disabled: !rawInput || parsing,
          padding: 3
        }
      ),
      /* @__PURE__ */ jsx(
        Button,
        {
          text: "Clear All",
          icon: TrashIcon,
          tone: "critical",
          onClick: handleClear,
          disabled: rows === 0 && !rawInput,
          mode: "ghost",
          padding: 3
        }
      )
    ] }),
    rows > 0 && /* @__PURE__ */ jsxs(Stack, { space: 3, children: [
      /* @__PURE__ */ jsxs(Card, { tone: "caution", padding: 3, radius: 2, children: [
        /* @__PURE__ */ jsxs(Text, { size: 1, weight: "semibold", children: [
          "\u2705 Data Loaded: ",
          rows,
          " Rows"
        ] }),
        /* @__PURE__ */ jsx(Text, { size: 1, muted: !0, children: "You can edit the values directly in the table below." })
      ] }),
      /* @__PURE__ */ jsx(CsvTableView, { data: value?.data || [], onCellChange: handleCellChange })
    ] })
  ] }) });
};
function CsvTablePreview(props) {
  const tableData = props;
  return !tableData.data || tableData.data.length === 0 ? /* @__PURE__ */ jsx(Card, { padding: 3, tone: "transparent", children: /* @__PURE__ */ jsx(Text, { muted: !0, children: "No CSV data" }) }) : /* @__PURE__ */ jsx(Card, { padding: 3, border: !0, children: /* @__PURE__ */ jsxs(Box, { children: [
    /* @__PURE__ */ jsxs(Text, { size: 1, weight: "semibold", style: { marginBottom: "0.5rem" }, children: [
      "CSV Table Preview (",
      tableData.data.length,
      " rows)"
    ] }),
    /* @__PURE__ */ jsx(CsvTableView, { data: tableData.data })
  ] }) });
}
const CsvRow = defineType({
  name: "csvRow",
  title: "Row",
  type: "object",
  fields: [
    defineField({
      name: "cells",
      title: "Cells",
      type: "array",
      of: [{ type: "string" }],
      // Hide the input for cells in the regular form view, as it's managed by the custom input.
      readOnly: !0
    })
  ],
  preview: {
    select: {
      cells: "cells"
    },
    prepare(selection) {
      const { cells } = selection, previewText = cells?.slice(0, 5).join(", ") ?? "Empty Row";
      return {
        title: previewText.length > 50 ? `${previewText.substring(0, 47)}...` : previewText,
        subtitle: `Total Cells: ${cells?.length ?? 0}`
      };
    }
  }
}), csvTableType = defineType({
  name: "csvTable",
  title: "CSV Data Table",
  type: "object",
  fields: [
    defineField({
      name: "data",
      title: "Table Data (Rows)",
      type: "array",
      of: [defineArrayMember(CsvRow)]
      // Array of our custom row objects
    })
  ],
  // 💡 CRITICAL: Link the custom React component to this field type
  components: {
    input: CsvTableInput,
    preview: CsvTablePreview
  },
  preview: {
    select: {
      data: "data"
    }
  }
}), csvTablePlugin = definePlugin({
  name: "sanity-plugin-csv-table-input",
  schema: {
    types: [csvTableType, CsvRow]
  }
});
export {
  csvTablePlugin
};
//# sourceMappingURL=index.mjs.map
