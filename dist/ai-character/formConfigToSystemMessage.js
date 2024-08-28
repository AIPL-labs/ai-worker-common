import { isNotEmpty } from "@mjtdev/engine";
export const formConfigToSystemMessage = (typeName, formConfig) => {
    const typeDescriptions = {};
    const valueComments = {};
    for (const key in formConfig) {
        const value = formConfig[key];
        const { inputValueType, selector, values, description } = value;
        valueComments[`${key}`] = isNotEmpty(description)
            ? ` // ${description}`
            : "";
        if (inputValueType === "text") {
            typeDescriptions[`${key}`] = "string";
        }
        if (inputValueType === "single") {
            typeDescriptions[`${key}`] = values.map((v) => `"${v}"`).join(" | ");
        }
        if (inputValueType === "video") {
            typeDescriptions[`${key}`] = values.map((v) => `"${v}"`).join(" | ");
        }
        if (inputValueType === "multiple") {
            typeDescriptions[`${key}`] = `(${values
                .map((v) => `"${v}"`)
                .join(" | ")})[]`;
        }
    }
    const typeDefBuffer = ["export type " + typeName + " = {"];
    for (const key in typeDescriptions) {
        typeDefBuffer.push(`  ${key}: ${typeDescriptions[key]};${valueComments[key]}`);
    }
    typeDefBuffer.push("};");
    const exampleBuffer = [];
    for (const key in typeDescriptions) {
        const formConfigValue = formConfig[key];
        if (formConfigValue.inputValueType === "multiple" &&
            formConfigValue.values.length > 0) {
            exampleBuffer.push(`  ${key}: ["${formConfigValue.values[0]}"]`);
        }
        if (formConfigValue.inputValueType === "single" &&
            formConfigValue.values.length > 0) {
            exampleBuffer.push(`  ${key}: "${formConfigValue.values[0]}"`);
        }
        if (formConfigValue.inputValueType === "video" &&
            formConfigValue.values.length > 0) {
            exampleBuffer.push(`  ${key}: "${formConfigValue.values[0]}"`);
        }
    }
    const errorKey = Object.keys(typeDescriptions)[0] ?? "field";
    const errorValue = Object.keys(typeDescriptions)[0] ?? "zebra";
    return [
        `JSON ${typeName} object typescript description`,
        "",
        typeDefBuffer.join("\n"),
        "",
        `Example ${typeName} object:`,
        `{${exampleBuffer.join(",")}}`,
        "",
        `Example Error object:`,
        ` {error: "No such ${errorKey} '${errorValue}'"}`,
    ].join("\n");
};
//# sourceMappingURL=formConfigToSystemMessage.js.map