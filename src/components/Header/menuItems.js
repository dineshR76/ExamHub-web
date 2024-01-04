import allRoutes from "router/routes";
import ChangePassword from "assets/ChangePassword.png";
import Logout from 'assets/Logout.png'
import Profile from 'assets/Profile.png'


import T from "T";

import {
  canViewDashboard,

} from "utils/permissions";

const {
  DASHBOARD,
  PROFILE,
  CHANGE_PWD,
  LOGOUT,
} = T;

const { app } = allRoutes;
const {
  dashboard,
  profile,
  changePwd,
  test,
} = app;

export const getAllMenuItems = () => {
  return [
    {
      title: DASHBOARD,
      route: dashboard,
      icon: dashboard,
      permission: true,
      childList: [dashboard],
    },

    {
      title: CHANGE_PWD,
      route: changePwd,
      icon: ChangePassword,
      permission: true,
      childList: [changePwd],
    },
    {
      title: LOGOUT,
      icon: Logout,
      permission: true,
    },
    {
      title: "Test",
      route: test,
      permission: true,
    },
  ];
};
