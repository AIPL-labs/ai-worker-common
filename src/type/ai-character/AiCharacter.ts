import { AiFunction } from "../ai-function/AiFunctions";
import { TavernCardV2 } from "./TavernCardv2";

export type AiCharacter = {
  id: string;
  card: TavernCardV2<
    Partial<{
      genInfo: {
        imagePrompt: string;
      };
    }>
  >;
  image?: Blob;
  capabilities?: AiCapability[];
};

export type AiCapability = keyof CapabilityToFunctionMapping;

export type CapabilityToFunctionMapping = {
  "update-character-image": {
    updateCharacterImage: AiFunction;
  };
};
