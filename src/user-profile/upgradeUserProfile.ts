import { ServiceProviders } from "../type/user/AppUser";

export const upgradeServiceProviders = (
  providers: Partial<ServiceProviders> = {}
): ServiceProviders => {
  const upgradedProviders = {
    imagegen: {
      apiShape: "CustomImagegen",
      ...(providers?.imagegen ?? {}),
    },
    textgen: {
      apiShape: "CustomOpenAi",
      ...(providers?.textgen ?? {}),
    },
    crawl: {
      apiShape: "CustomWc",
      ...(providers?.crawl ?? {}),
    },
    proxy: {
      apiShape: "Cloudflare",
      ...(providers?.proxy ?? {}),
    },
    tts: {
      apiShape: "CustomTts",
      ...(providers?.tts ?? {}),
    },
    asr: {
      apiShape: "CustomAsr",
      ...(providers?.asr ?? {}),
    },
  } as ServiceProviders;
  return upgradedProviders;
};
