import { DataObject } from "../data/DataObject";

export type PhoneCall = DataObject & {
  phoneNumber?: string;
  callUuid?: string;
  uuid?: string;
  greeting?: string;
};
