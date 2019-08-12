import * as PATH_URL from "./path";
import Landing from "../pages/Landing";
import Home from "../pages/Home";
import Account from "../pages/Account";
import Admin from "../pages/Admin";
import PasswordForget from "../pages/PasswordForget";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const routes = [
  {
    path: PATH_URL.LANDING,
    component: Landing
  },
  {
    path: PATH_URL.HOME,
    component: Home
  },
  {
    path: PATH_URL.ACCOUNT,
    component: Account
  },
  {
    path: PATH_URL.ADMIN,
    component: Admin
  },
  {
    path: PATH_URL.PASSWORD_FORGET,
    component: PasswordForget
  },
  {
    path: PATH_URL.SIGN_IN,
    component: SignIn
  },
  {
    path: PATH_URL.SIGN_UP,
    component: SignUp
  }
];

export default routes;
