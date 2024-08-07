/**
 * Generates path name with params
 * @param path name
 * @param params to be replaced
 * @returns path name with params
 */
export const generatePathNameWithParams = (path: string, params: any) => {
  let pathName = path;
  for (const key in params) {
    pathName = pathName.replace(`:${key}`, params[key]);
  }
  return pathName;
};
