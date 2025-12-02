import React from 'react';
import { ObjectInputProps } from 'sanity';
export interface CsvRowData {
    _type: 'csvRow';
    _key: string;
    cells: string[];
}
type CsvTableInputProps = ObjectInputProps;
interface CsvTableViewProps {
    data: CsvRowData[];
    onCellChange?: (rowKey: string, cellIndex: number, newValue: string) => void;
}
export declare const CsvTableView: ({ data, onCellChange }: CsvTableViewProps) => React.JSX.Element;
export declare const CsvTableInput: (props: CsvTableInputProps) => React.JSX.Element;
export {};
