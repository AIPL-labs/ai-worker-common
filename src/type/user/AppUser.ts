import type { AccessUser } from "../access/AccessUser";
import type { ServiceProviders } from "../app-service/AppService";
import type { DataObject } from "../data/DataObject";

export type AsrConfig = {
  pauseToListenMs: number;
};

export type AppUserProfile = DataObject & {
  name: string;
  userCharacterId?: string;
  aiCharacterId?: string;
  /** @deprecated now a data-link */
  providers: ServiceProviders;
  voiceId?: string;
  asrConfig?: AsrConfig;
};

export type AppUser = AccessUser &
  PublicUser & {
    userName: string;
  };

export type PublicUser = {
  publicName?: string;
  publicAvatar?: string;
};
