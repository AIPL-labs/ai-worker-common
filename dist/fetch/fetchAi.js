import { lock } from "@mjtdev/engine";
import { getFetchState } from "./FetchState";
import { fetchWithJson } from "./fetchWithJson";
const AI_LOCK = "AI-LOCK";
export const fetchAi = async (path, data) => {
    const { homeBaseUrl } = getFetchState();
    const fullPath = `${homeBaseUrl}/${path}`;
    const result = await lock(() => fetchWithJson(fullPath, data), {
        name: AI_LOCK,
    });
    return result;
};
//# sourceMappingURL=fetchAi.js.map