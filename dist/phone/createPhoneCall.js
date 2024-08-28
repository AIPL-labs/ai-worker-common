import { uniqueId } from "../id/uniqueId";
export const createPhoneCall = (draft) => {
    const { id = uniqueId("phone-call"), callUuid, phoneNumber, uuid, greeting, } = draft;
    return { id, callUuid, phoneNumber, uuid, greeting };
};
//# sourceMappingURL=createPhoneCall.js.map