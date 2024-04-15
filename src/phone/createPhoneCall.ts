import { uniqueId } from "../id/uniqueId";
import type { PhoneCall } from "../type/phone/PhoneCall";

export const createPhoneCall = (draft: Partial<PhoneCall>): PhoneCall => {
  const {
    id = uniqueId("phone-call"),
    callUuid,
    phoneNumber,
    uuid,
    greeting,
  } = draft;

  return { id, callUuid, phoneNumber, uuid, greeting };
};
