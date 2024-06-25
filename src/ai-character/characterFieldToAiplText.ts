import { isDefined } from "@mjtdev/engine";


export const characterFieldToAiplText = ({
  fieldName, text,
}: {
  fieldName?: string;
  text?: string;
}) => {
  return [fieldName ? `# ${fieldName}:` : undefined, text]
    .filter(isDefined)
    .join("\n");
};
