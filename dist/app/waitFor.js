import { createState } from "@mjtdev/engine";
export const [useWaitState, updateWaitState, getWaitState] = createState({
    actives: [],
    // logger: ((m, n) => console.log(m, [n])) as (
    //   message: string,
    //   name: string
    // ) => void,
    logger: (() => { }),
});
export const waitFor = async (functionOrValue, options = {}) => {
    const { message = crypto.randomUUID(), name = crypto.randomUUID() } = options;
    const { logger } = getWaitState();
    try {
        updateWaitState((state) => {
            state.actives.push(name);
        });
        logger(`waiting for: ${message}...`, name);
        const value = typeof functionOrValue === "function"
            ? await functionOrValue()
            : await functionOrValue;
        logger(`finished waiting for: ${message}`, name);
        return value;
    }
    catch (err) {
        console.error(err);
        throw err;
    }
    finally {
        updateWaitState((state) => {
            state.actives = state.actives.filter((a) => a !== name);
        });
    }
};
//# sourceMappingURL=waitFor.js.map