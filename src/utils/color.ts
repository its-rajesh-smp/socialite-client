import { commonTagColors } from "../constants/task.const";

/**
 * Get task color from tags
 * @param tags
 * @returns
 */
export const getTaskColorFromTags = (tags: any) => {
  let color = "default";

  tags?.forEach((tag: any) => {
    let template = tag.name.trim().toLowerCase();
    Object.entries(commonTagColors).forEach(([key, value]) => {
      if (key === template) {
        color = value;
      }
    });
  });

  return color;
};

/**
 * Get tag color using tag name
 * @param tagName
 * @returns
 */
export const getTagColorUsingTagName = (tagName: string) => {
  let color = null;
  let template = tagName.trim().toLowerCase();
  Object.entries(commonTagColors).forEach(([key, value]) => {
    if (key === template) {
      color = value;
    }
  });

  return color;
};
