import { AccessUser } from "../access/AccessUser";
import { ServiceProviders } from "../app-service/AppService";

export type AsrConfig = {
  pauseToListenMs: number;
};

export type AppUserProfile = {
  id: string;
  name: string;
  userCharacterId?: string;
  aiCharacterId?: string;
  /** @deprecated now a data-link */
  providers: ServiceProviders;
  voiceId?: string;
  asrConfig?: AsrConfig;
};

export type AppUser = AccessUser & {
  userName: string;
};
