import { AiFunctions } from "../ai-function/AiFunctions";

export const DEFAULT_MES_EXAMPLE = `<START>
{{user}}: Hi {{char}}, I heard you like to spend time in the park.
{{char}}: *excitedly* Oh my goodness, yes! I just love spending time at the park! It's so much fun to talk to all the adventurers and hear about their exciting adventures! And you are? ${AiFunctions.AI_FUNCTION_PREFIX}addCharacterMemory(name:"{{user}}", memory:"Knows {{char}} likes to spend time at the park");
`;
