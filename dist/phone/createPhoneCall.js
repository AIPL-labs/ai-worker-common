import { uniqueId } from "../id/uniqueId";
export const createPhoneCall = (draft) => {
    const { id = uniqueId("phone-call"), callUuid, phoneNumber, uuid } = draft;
    return { id, callUuid, phoneNumber, uuid };
};
//# sourceMappingURL=createPhoneCall.js.map