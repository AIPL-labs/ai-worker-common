import { uniqueId } from "../id/uniqueId";
import { upgradeUserProfile } from "./upgradeUserProfile";
export const createUserProfile = (draft) => {
    const { id = uniqueId("user-profile"), name = "New User Profile", providers, asrConfig, userCharacterId, voiceId, } = upgradeUserProfile(draft);
    return {
        id,
        name,
        providers,
        asrConfig,
        userCharacterId,
        voiceId,
    };
};
//# sourceMappingURL=createUserProfile.js.map