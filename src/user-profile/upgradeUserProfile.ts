import { AppUserProfile, ServiceProviders } from "../type/user/AppUser";

export const upgradeUserProfile = (draft: Partial<AppUserProfile>) => {
  const upgradedProviders = {
    imagegen: {
      apiShape: "CustomOpenAi",
      ...(draft.providers?.imagegen ?? {}),
    },
    textgen: {
      apiShape: "CustomOpenAi",
      contextSize: 4096,
      ...(draft.providers?.textgen ?? {}),
    },
    crawl: {
      apiShape: "CustomWc",
      ...(draft.providers?.crawl ?? {}),
    },
    proxy: {
      apiShape: "Cloudflare",
      ...(draft.providers?.proxy ?? {}),
    },
    tts: {
      apiShape: "CustomTts",
      ...(draft.providers?.tts ?? {}),
    },
  } as ServiceProviders;
  return { ...draft, providers: upgradedProviders };
};
