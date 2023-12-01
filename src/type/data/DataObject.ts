export type DataObject = {
  id: string;
};

export const isDataObject = (maybe: unknown): maybe is DataObject => {
  const straw = maybe as DataObject;
  return typeof straw === "object" && typeof straw.id === "string";
};
