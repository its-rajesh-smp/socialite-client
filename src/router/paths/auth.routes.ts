const authRoutes = {
  FEED: "/feed",
  COURSES: "/courses",
  COURSES_MODULE: "/courses-module/:moduleId",
  COURSES_CONTENT: "/courses-content/:contentId",
  PRACTICE: "/practice/:practiceTabSlug",
  PRACTICE_SET_TASKS:
    "/practice-set-tasks/:practiceSetId/:practiceSetTaskType/:practiceSetDescAccordionState",
  PRACTICE_SET_TASK_CONTENT: "/practice-set-task-content/:practiceSetTaskId",
  COMPILER: "/compiler",
  MY_CALENDAR: "/my-calendar",
};

export default authRoutes;
