export const getThoughtId = ({
  contextId,
  index,
}: {
  contextId: string;
  index: number;
}) => {
  return `thought-${contextId}-${index}`;
};
