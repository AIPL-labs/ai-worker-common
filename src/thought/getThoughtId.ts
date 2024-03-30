export const getThoughtId = ({
  contextId,
  index,
}: {
  contextId: string;
  index: number;
}) => {
  // need to fake id form including fake UUID
  const uuid = "98d7c622-b17d-4031-b61b-72fc3f640a4a";
  return `thought-${index}-${uuid}`;
};
