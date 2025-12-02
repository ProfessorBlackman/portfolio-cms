export default {
  name: "codeGroup",
  type: "object",
  title: "Code Group",
  fields: [
    {
      name: "files",
      type: "array",
      of: [
        {
          name: "codeFile",
          type: "object",
          fields: [
            { name: "filename", type: "string" },
            { name: "language", type: "string" },
            { name: "code", type: "text" },
          ],
        },
      ],
    },
  ],
};
