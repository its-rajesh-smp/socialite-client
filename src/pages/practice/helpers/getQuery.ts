import { practiceTabs } from "../../../constants/practice.const";
import {
  GET_ALL_PRACTICE_SETS,
  GET_MY_FORKED_PRACTICE_SETS,
  GET_MY_PRACTICE_SETS,
} from "../../../graphql/practice/practiceSet.graphql";

/**
 * Function to get the query based on the current practice tab slug
 * @param {string} currentPracticeTab - The slug of the current practice tab
 * @returns {DocumentNode} - The GraphQL query for the current tab
 */
export const getQueryByPracticeTab = (currentPracticeTab: {
  id: number;
  name: string;
  slug: string;
}) => {
  return getQueryBySlug(currentPracticeTab.slug);
};

/**
 * Function to get the query based on the current practice tab slug
 * @param {string} slug - The slug of the current practice tab
 * @returns {DocumentNode} - The GraphQL query for the current tab
 */
export const getQueryBySlug = (slug: string | undefined) => {
  switch (slug) {
    case practiceTabs.createdByMe.slug:
      return GET_MY_PRACTICE_SETS;
    case practiceTabs.assignedToMe.slug:
      return GET_MY_FORKED_PRACTICE_SETS;
    default:
      return GET_ALL_PRACTICE_SETS;
  }
};
