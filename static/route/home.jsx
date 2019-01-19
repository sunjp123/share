// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import ShareIcon from "@material-ui/icons/Collections"
import Games from "@material-ui/icons/Games"
// core components/views

import SharePage from "../f_share/index.jsx";

const dashboardRoutes = [
  {
    path: "/share/view/public",
    sidebarName: "公共分享",
    navbarName: "公共分享",
    icon: Dashboard,
    loginIsRequired:false,
    component: SharePage
  },
  {
    path: "/share/view/collection",
    sidebarName: "我的收藏",
    navbarName: "我的收藏",
    icon: ShareIcon,
    loginIsRequired:true,
    component: SharePage
  }
];

export default dashboardRoutes.filter(route=> (!route.loginIsRequired || (route.loginIsRequired&&window.__USER_INFO__._id)));
