import { isDefined } from "@mjtdev/engine";
export const chatStateEntriesToFacts = (chatDatas) => {
    const currentState = {
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
    };
    const sorted = chatDatas.sort((a, b) => {
        return a.id.localeCompare(b.id);
    });
    for (const chatData of sorted) {
        const { namespace, key, value, node } = chatData;
        currentState[[namespace, key].filter(isDefined).join(".")] = value;
        // if (!namespace || !values || Objects.keys(values).length === 0) {
        //   continue;
        // }
        // Objects.entries(values).forEach((entry) => {
        //   const [key, value] = entry;
        //   currentState[`${name.replaceAll(" ", "")}.${key.replaceAll(" ", "")}`] =
        //     value;
        // });
    }
    return currentState;
};
//# sourceMappingURL=chatDatasToFacts.js.map