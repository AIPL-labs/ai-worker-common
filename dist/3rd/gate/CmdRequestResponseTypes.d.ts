export type CmdRequestBody = {
    command: string;
    args?: string[];
    options?: {
        cwd?: string;
        env?: {
            [key: string]: string;
        };
        timeout?: number;
    };
};
export type CmdResponseChunk = {
    out?: string;
    err?: string;
    exitCode?: number | null;
    timedOut?: boolean;
};
//# sourceMappingURL=CmdRequestResponseTypes.d.ts.map