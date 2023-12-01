import { AiAgents } from "../agent/AiAgents";
import { AppObjectType } from "../type/app/AppObject";
import { AppObjectCreator } from "./createAppObject";


export const APP_OBJECT_CREATORS: Partial<{
  [K in AppObjectType]: AppObjectCreator<K>;
}> = {
  "ai-agent": AiAgents.createAiAgent,
};
