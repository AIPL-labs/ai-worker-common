import { createState } from "@mjtdev/engine";

export const [useWaitState, updateWaitState, getWaitState] = createState({
  actives: [] as string[],
  // logger: ((m, n) => console.log(m, [n])) as (
  //   message: string,
  //   name: string
  // ) => void,
  logger: (() => {}) as (message: string, name: string) => void,
});

export const waitFor = async <T extends object | string | void | boolean>(
  functionOrValue: T | (() => Promise<T> | T),
  options: Partial<{
    name: string;
    message: string;
  }> = {}
): Promise<T> => {
  const { message = crypto.randomUUID(), name = crypto.randomUUID() } = options;
  const { logger } = getWaitState();
  try {
    updateWaitState((state) => {
      state.actives.push(name);
    });

    logger(`waiting for: ${message}...`, name);
    const value =
      typeof functionOrValue === "function"
        ? await (functionOrValue as () => Promise<T> | T)()
        : await functionOrValue;
    logger(`finished waiting for: ${message}`, name);
    return value;
  } catch (err) {
    console.error(err);
    throw err;
  } finally {
    updateWaitState((state) => {
      state.actives = state.actives.filter((a) => a !== name);
    });
  }
};
