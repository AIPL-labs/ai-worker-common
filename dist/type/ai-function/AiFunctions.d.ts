import { Chats } from "../../chat/Chats";
import { Chat } from "../chat/Chat";
export type AiFunctionCtx = {
    arg?: string;
    env: {
        chats: typeof Chats;
        chat: Chat;
        userId: string;
    } & Record<string, unknown>;
};
export declare const useAiFunctionState: import("@mjtdev/engine").State<{
    functions: Record<string, AiFunctionInterface>;
}>, updateAiFunctionState: import("@mjtdev/engine").StateUpdater<{
    functions: Record<string, AiFunctionInterface>;
}>, getAiFunctionState: import("@mjtdev/engine").StateGetter<{
    functions: Record<string, AiFunctionInterface>;
}>;
export type AiFunction = (ctx: AiFunctionCtx) => void;
export type AiFunctionParam = {
    name: string;
    description: string;
    type?: string;
};
export type AiFunctionDescription = {
    name: string;
    usage: string;
    params?: AiFunctionParam | AiFunctionParam[];
};
export type AiFunctionInterface = AiFunctionDescription & {
    func?: AiFunction;
};
//# sourceMappingURL=AiFunctions.d.ts.map