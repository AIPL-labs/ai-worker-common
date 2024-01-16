import { uniqueId } from "../id/uniqueId";
import { AppUserProfile } from "../type/user/AppUser";
import { upgradeUserProfile } from "./upgradeUserProfile";

export const createUserProfile = (
  draft: Partial<AppUserProfile>
): AppUserProfile => {
  const {
    id = uniqueId("user-profile"),

    name = "New User Profile",
    providers,
    asrConfig,
    userCharacterId,
    voiceId,
  } = upgradeUserProfile(draft);

  return {
    id,
    name,
    providers,
    asrConfig,
    userCharacterId,
    voiceId,
  };
};
