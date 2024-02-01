import { isUndefined } from "@mjtdev/engine";
const PARM_REGEX = /{+[\s]*([a-zA-Z0-9\$\-\.]+)[\s]*}+\[?([\-0-9]*)/gim;
export const renderCardText = (template, facts) => {
    if (!template) {
        return "";
    }
    return template.replace(PARM_REGEX, (match, factKey, factIndexMaybe) => {
        const fact = facts[factKey];
        if (typeof fact !== "string") {
            console.warn("nonstring fact", [factKey, fact]);
        }
        if (isUndefined(fact)) {
            return "";
        }
        return String(fact);
    });
};
//# sourceMappingURL=renderCardText.js.map