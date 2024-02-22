import { uniqueId } from "../id/uniqueId";
import { AppUserProfile } from "../type/user/AppUser";
import { upgradeServiceProviders } from "./upgradeUserProfile";

export const createUserProfile = (
  draft: Partial<AppUserProfile>
): AppUserProfile => {
  const {
    id = uniqueId("user-profile"),
    name = "New User Profile",
    providers = upgradeServiceProviders(),
    asrConfig,
    userCharacterId,
    voiceId,
  } = draft;

  return {
    id,
    name,
    providers,
    asrConfig,
    userCharacterId,
    voiceId,
  };
};
