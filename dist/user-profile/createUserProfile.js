import { uniqueId } from "../id/uniqueId";
import { upgradeServiceProviders } from "./upgradeUserProfile";
export const createUserProfile = (draft) => {
    const { id = uniqueId("user-profile"), name = "New User Profile", providers = upgradeServiceProviders(), asrConfig, userCharacterId, voiceId, } = draft;
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