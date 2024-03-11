import { isDefined } from "@mjtdev/engine";
export const chatStateEntriesToDecoratedFacts = (chatDatas) => {
    const currentState = {
        date: { value: new Date().toLocaleDateString() },
        time: { value: new Date().toLocaleTimeString() },
    };
    const sorted = chatDatas.sort((a, b) => {
        return a.id.localeCompare(b.id);
    });
    for (const chatData of sorted) {
        const { namespace, key, value, node, contextName } = chatData;
        currentState[[namespace, key].filter(isDefined).join(".")] = {
            node,
            value,
            contextName,
        };
    }
    return currentState;
};
//# sourceMappingURL=chatStateEntriesToDecoratedFacts.js.map