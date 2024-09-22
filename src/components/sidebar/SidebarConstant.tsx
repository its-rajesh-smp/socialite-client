import { practiceTabs } from "../../constants/practice.const";
import authRoutes from "../../router/paths/auth.routes";

const sidebarItems = {
  practice: {
    id: 8,
    name: "Practice",
    path: authRoutes.PRACTICE,
    params: { practiceTabSlug: practiceTabs.all.slug },
    iconImage: "https://cdn-icons-png.flaticon.com/512/2211/2211504.png",
    status: "live",
  },
};

export default sidebarItems;
