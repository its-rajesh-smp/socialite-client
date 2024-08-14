import authRoutes from "../../router/paths/auth.routes";

const sidebarItemsData = {
  Feed: {
    id: 1,
    name: "Feed",
    iconImage: "https://cdn-icons-png.flaticon.com/512/2163/2163350.png",
    status: "live",
    path: authRoutes.FEED,
  },
  Messages: {
    id: 2,
    name: "Messages",
    iconImage: "https://cdn-icons-png.flaticon.com/512/1041/1041916.png",
    status: "archived",
    path: authRoutes.FEED,
  },
  Videos: {
    id: 3,
    name: "Videos",
    iconImage: "https://cdn-icons-png.flaticon.com/512/12946/12946085.png",
    status: "archived",
    path: authRoutes.FEED,
  },
  Blogs: {
    id: 4,
    name: "Blogs",
    iconImage: "https://cdn-icons-png.flaticon.com/512/2593/2593542.png",
    status: "archived",
    path: authRoutes.FEED,
  },
  Market: {
    id: 5,
    name: "Market",
    iconImage: "https://cdn-icons-png.flaticon.com/512/862/862856.png",
    status: "archived",
    path: authRoutes.FEED,
  },
  Event: {
    id: 6,
    name: "Event",
    iconImage: "https://cdn-icons-png.flaticon.com/512/780/780677.png",
    status: "archived",
    path: authRoutes.FEED,
  },
  Courses: {
    id: 7,
    name: "Courses",
    path: authRoutes.COURSES,
    iconImage: "https://cdn-icons-png.flaticon.com/512/3352/3352681.png",
    status: "live",
  },
  Practice: {
    id: 8,
    name: "Practice",
    path: authRoutes.PRACTICE,
    iconImage: "https://cdn-icons-png.flaticon.com/512/6747/6747027.png",
    status: "live",
  },
  Compiler: {
    id: 9,
    name: "Compiler",
    path: authRoutes.COMPILER,
    iconImage: "https://cdn-icons-png.flaticon.com/512/3573/3573187.png",
    status: "live",
  },
};

export default sidebarItemsData;
