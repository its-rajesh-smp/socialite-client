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
  },
  Videos: {
    id: 3,
    name: "Videos",
    iconImage: "https://cdn-icons-png.flaticon.com/512/12946/12946085.png",
    status: "archived",
  },
  Blogs: {
    id: 4,
    name: "Blogs",
    iconImage: "https://cdn-icons-png.flaticon.com/512/2593/2593542.png",
    status: "archived",
  },
  Market: {
    id: 5,
    name: "Market",
    iconImage: "https://cdn-icons-png.flaticon.com/512/862/862856.png",
    status: "archived",
  },
  Event: {
    id: 6,
    name: "Event",
    iconImage: "https://cdn-icons-png.flaticon.com/512/780/780677.png",
    status: "archived",
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
};

export default sidebarItemsData;
