import authRoutes from "../../router/paths/auth.routes";

const sidebarItems = {
  feed: {
    id: 1,
    name: "Feed",
    iconImage: "https://cdn-icons-png.flaticon.com/512/2163/2163350.png",
    status: "live",
    path: authRoutes.FEED,
  },
  message: {
    id: 2,
    name: "Messages",
    iconImage: "https://cdn-icons-png.flaticon.com/512/1041/1041916.png",
    status: "archived",
    path: authRoutes.FEED,
  },
  videos: {
    id: 3,
    name: "Videos",
    iconImage: "https://cdn-icons-png.flaticon.com/512/12946/12946085.png",
    status: "archived",
    path: authRoutes.FEED,
  },
  blogs: {
    id: 4,
    name: "Blogs",
    iconImage: "https://cdn-icons-png.flaticon.com/512/2593/2593542.png",
    status: "archived",
    path: authRoutes.FEED,
  },
  market: {
    id: 5,
    name: "Market",
    iconImage: "https://cdn-icons-png.flaticon.com/512/862/862856.png",
    status: "archived",
    path: authRoutes.FEED,
  },
  event: {
    id: 6,
    name: "Event",
    iconImage: "https://cdn-icons-png.flaticon.com/512/780/780677.png",
    status: "archived",
    path: authRoutes.FEED,
  },
  course: {
    id: 7,
    name: "Courses",
    path: authRoutes.COURSES,
    iconImage: "https://cdn-icons-png.flaticon.com/512/3352/3352681.png",
    status: "live",
  },
  practice: {
    id: 8,
    name: "Practice",
    path: authRoutes.PRACTICE,
    iconImage: "https://cdn-icons-png.flaticon.com/512/6747/6747027.png",
    status: "live",
  },
  compiler: {
    id: 9,
    name: "Compiler",
    path: authRoutes.COMPILER,
    iconImage: "https://cdn-icons-png.flaticon.com/512/3573/3573187.png",
    status: "live",
  },
  myCalendar: {
    id: 10,
    name: "My Calendar",
    path: authRoutes.MY_CALENDAR,
    iconImage: "https://cdn-icons-png.flaticon.com/512/10692/10692035.png",
    status: "archived",
  },
};

export default sidebarItems;
