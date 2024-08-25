/**
 * Function to normalize the data returned by the GraphQL query
 * @param data - The data returned by the GraphQL query
 * @returns
 */
export const normalizeData = (data: any) => {
  if (data?.getAllPracticeSets) {
    return data.getAllPracticeSets;
  }
  if (data?.getMyPracticeSets) {
    return data.getMyPracticeSets;
  }
  if (data?.getAssignedToMePracticeSets) {
    return data.getAssignedToMePracticeSets;
  }
  return [];
};
