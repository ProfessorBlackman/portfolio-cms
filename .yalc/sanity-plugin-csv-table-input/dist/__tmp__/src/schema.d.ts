/**
 * Defines the main custom type that editors will use in their schemas.
 * @public
 */
export declare const csvTableType: {
    type: "object";
    name: "csvTable";
} & Omit<import("sanity").ObjectDefinition, "preview"> & {
    preview?: import("sanity").PreviewConfig<{
        data: string;
    }, Record<"data", any>> | undefined;
};
/**
 * The plugin definition that bundles the types.
 * @public
 */
export declare const csvTablePlugin: import("sanity").Plugin<void>;
