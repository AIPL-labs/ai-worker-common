import { isUndefined } from "@mjtdev/engine";
export const toolConfigCurrentToSystemMessage = ({ typeName = "", currentObject, }) => {
    if (isUndefined(currentObject)) {
        return undefined;
    }
    return [
        `Current ${typeName} object:`,
        JSON.stringify(currentObject, null, 2),
    ].join("\n");
};
//# sourceMappingURL=toolConfigCurrentToSystemMessage.js.map