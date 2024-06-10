import type { Watchdog } from "./Watchdog";

export const orWatchdogBarks = <T>(
  watchdog: Watchdog,
  producer: () => T | Promise<T>
) => {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise<T>(async (resolve, reject) => {
    console.log("orWatchdogBarks setup");
    try {
      watchdog.addListener(() => {
        console.log("BARK BARK BARK!!!!");
        reject(new Error("Watchdog barked"));
      });
      const result = await producer();
      console.log("orWatchdogBarks producer produced result");
      resolve(result);
    } catch (error) {
      reject(error);
    } finally {
      watchdog.stop();
    }
  });
};
