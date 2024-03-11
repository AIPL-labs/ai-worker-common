import { isDefined } from "@mjtdev/engine";
export const extendAiplContextName = (context, name) => {
    return {
        ...context,
        name: [context.name, name].filter(isDefined).join(":"),
    };
};
//# sourceMappingURL=extendAiplContextName.js.map