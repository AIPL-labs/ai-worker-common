import { isDefined, TypeBoxes } from "@mjtdev/engine";
export const toolConfigToSystemMessage = (toolConfig) => {
    const { typeDeclaration } = TypeBoxes.schemaToTypeInfo(toolConfig.schema);
    const typeName = toolConfig.schema.$id;
    const currentObject = toolConfig.current ?? {};
    return [
        `JSON ${typeName} object TypeScript description`,
        "",
        typeDeclaration,
        // typeDefBuffer.join("\n"),
        "",
        // `Example ${toolConfig.schema.$id} object:`,
        // `{${exampleBuffer.join(",")}}`,
        // "",
        `Example Error object:`,
        ` {error: "No such key in object: '${typeName}'"}`,
        "",
        Object.keys(currentObject).length > 0
            ? [
                `Current ${typeName} object:`,
                JSON.stringify(toolConfig.current, null, 2),
            ].join("\n")
            : undefined,
    ]
        .filter(isDefined)
        .join("\n");
};
//# sourceMappingURL=toolConfigToSystemMessage.js.map