import { Objects } from "@mjtdev/engine";
import { chatStateEntriesToDecoratedFacts } from "./chatStateEntriesToDecoratedFacts";
export const chatStateEntriesToFacts = (chatDatas) => {
    return Objects.fromEntries(Objects.entries(chatStateEntriesToDecoratedFacts(chatDatas)).map((e) => [
        e[0],
        e[1].value,
    ]));
};
//# sourceMappingURL=chatStateEntriesToFacts.js.map