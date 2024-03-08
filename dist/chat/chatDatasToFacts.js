import { Objects } from "@mjtdev/engine";
export const chatDatasToFacts = (chatDatas) => {
    const currentState = {
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
    };
    const sorted = chatDatas.sort((a, b) => {
        return a.id.localeCompare(b.id);
    });
    for (const chatData of sorted) {
        const { name, values } = chatData;
        if (!name || !values || Objects.keys(values).length === 0) {
            continue;
        }
        Objects.entries(values).forEach((entry) => {
            const [key, value] = entry;
            currentState[`${name.replaceAll(" ", "")}.${key.replaceAll(" ", "")}`] =
                value;
        });
    }
    return currentState;
};
//# sourceMappingURL=chatDatasToFacts.js.map