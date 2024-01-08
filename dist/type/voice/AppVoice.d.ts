import { DataObject } from "../data/DataObject";
import { ApiShape } from "../user/AppUser";
export type BrowserVoiceConfig = {
    pitch: number;
    rate: number;
    delay: number;
    voiceName: string;
};
export type AppVoice = DataObject & {
    name: string;
    apiShape: ApiShape;
    browserVoiceConfig: Partial<BrowserVoiceConfig>;
};
//# sourceMappingURL=AppVoice.d.ts.map