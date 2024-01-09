import { uniqueId } from "../id/uniqueId";
import { PhoneCall } from "../type/phone/PhoneCall";

export const createPhoneCall = (draft: Partial<PhoneCall>): PhoneCall => {
  const { id = uniqueId("phone-call"), callUuid, phoneNumber, uuid } = draft;

  return { id, callUuid, phoneNumber, uuid };
};
