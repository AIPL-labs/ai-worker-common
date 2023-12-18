import { AppObjectType } from "../../type/app/AppObject";

export const getUserDataIndexId = (
  objectType: AppObjectType,
  userId: string
) => {
  // const { id } = getUserState();
  return `${objectType}-${userId}`;
};
