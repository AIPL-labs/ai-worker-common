export const setChatMessage = ({ chat, message, builder, }) => {
    return builder.update((c, ms) => {
        ms[message.id] = message;
    });
    // return DataIndexesStates.setDataIndexStateRecord(chat.messageIdxId, message);
};
//# sourceMappingURL=setChatMessage.js.map