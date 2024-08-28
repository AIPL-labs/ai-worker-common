export const parseId = (id) => {
    const regex = /^(.+)-(\d+)-([a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12})$/;
    // const str = "chat-message-1710874010462-dfd8af80-9f27-4f8c-891e-fef03af47393";
    const match = id.match(regex);
    if (match) {
        const [, type, timestamp, uuid] = match;
        return { type, timestamp, uuid };
    }
    else {
        return undefined;
    }
};
//# sourceMappingURL=parseId.js.map