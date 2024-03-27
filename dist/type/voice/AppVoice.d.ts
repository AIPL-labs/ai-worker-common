import { ApiShape } from "../app-service/AppService";
import { DataObject } from "../data/DataObject";
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