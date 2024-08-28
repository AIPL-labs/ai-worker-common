import { isDefined } from "@mjtdev/engine";
export const characterFieldToAiplText = ({ fieldName, text, }) => {
    return [fieldName ? `# ${fieldName}:` : undefined, text]
        .filter(isDefined)
        .join("\n");
};
//# sourceMappingURL=characterFieldToAiplText.js.map