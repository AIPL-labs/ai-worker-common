import { AppUserProfile, ServiceProviders } from "../type/user/AppUser";
export declare const upgradeUserProfile: (draft: Partial<AppUserProfile>) => {
    providers: ServiceProviders;
    id?: string | undefined;
    name?: string | undefined;
    userCharacterId?: string | undefined;
    aiCharacterId?: string | undefined;
    voiceId?: string | undefined;
    asrConfig?: import("../type/user/AppUser").AsrConfig | undefined;
};
//# sourceMappingURL=upgradeUserProfile.d.ts.map