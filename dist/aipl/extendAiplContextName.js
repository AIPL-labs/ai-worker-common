import { isDefined } from "@mjtdev/engine";
export const extendAiplContextName = (context, name) => {
    const result = {
        ...context,
        name: [context.name, name].filter(isDefined).join(":"),
    };
    context.logger("extendAiplContextName", {
        old: context.name,
        new: result.name,
        name,
    });
    return result;
};
//# sourceMappingURL=extendAiplContextName.js.map