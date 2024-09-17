import { practiceTabs } from "../../constants/practice.const";
import authRoutes from "../../router/paths/auth.routes";

const sidebarItems = {
  practice: {
    id: 8,
    name: "Practice",
    path: authRoutes.PRACTICE,
    params: { practiceTabSlug: practiceTabs.all.slug },
    iconImage: "https://cdn-icons-png.flaticon.com/512/6747/6747027.png",
    status: "live",
  },
};

export default sidebarItems;
