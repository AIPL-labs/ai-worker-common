import { isUndefined } from "@mjtdev/engine";

const PARM_REGEX = /{+[\s]*([a-zA-Z0-9\$\-\.]+)[\s]*}+\[?([\-0-9]*)/gim;
export const renderCardText = (
  template: string | undefined,
  facts: Record<string, string | undefined>
) => {
  if (!template) {
    return "";
  }
  const caseInsensitiveFacts = Object.fromEntries(
    Object.entries(facts).map(([key, value]) => [
      key.toLocaleLowerCase(),
      value,
    ])
  );
  return template.replace(PARM_REGEX, (match, factKey, factIndexMaybe) => {
    const fact = caseInsensitiveFacts[(factKey as string)?.toLocaleLowerCase()];
    if (isUndefined(fact)) {
      return "";
    }
    if (typeof fact !== "string") {
      console.warn("nonstring fact", [factKey, fact]);
    }
    return String(fact);
  });
};
