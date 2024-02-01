export const setChatMessage = ({ message, builder, }) => {
    return builder.update((c, ms) => {
        ms[message.id] = message;
    });
};
//# sourceMappingURL=setChatMessage.js.map