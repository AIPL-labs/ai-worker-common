import { isUndefined } from "@mjtdev/engine";

// const PARM_REGEX = /{+[\s]*([a-zA-Z0-9\$\-\.]+)[\s]*}+\[?([\-0-9]*)/gim;
const PARM_REGEX = /{+[\s]*([a-zA-Z0-9$\-.]+)[\s]*}+\[?([-0-9]*)/gim;
export const renderTemplateText = (
  template: string | undefined,
  facts: Record<string, string | undefined>,
  options: Partial<{
    skipNotFound: boolean;
  }> = {}
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
  const { skipNotFound = false } = options;
  return template.replace(PARM_REGEX, (match, factKey, factIndexMaybe) => {
    const fact = caseInsensitiveFacts[(factKey as string)?.toLocaleLowerCase()];
    if (isUndefined(fact)) {
      return skipNotFound ? `{${factKey}}` : "";
    }
    if (typeof fact !== "string") {
      console.warn("nonstring fact", [factKey, fact]);
    }
    return String(fact);
  });
};
