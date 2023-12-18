export const sortByName = <T extends { name: string | undefined }>(
  a: T,
  b: T
) => {
  const aName = a?.name ?? "";
  const bName = b?.name ?? "";
  return aName.localeCompare(bName);
};
