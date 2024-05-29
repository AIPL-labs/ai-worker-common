
export type CmdRequestBody = {
  command: string; // The command to be executed
  args?: string[]; // Optional array of arguments for the command
  options?: {
    cwd?: string; // Optional current working directory
    env?: { [key: string]: string; }; // Optional environment variables
    timeout?: number; // Optional timeout for the command
  };
};

export type CmdResponseChunk = {
  out?: string;
  err?: string;
  exitCode?: number | null;
  timedOut?: boolean;
};
