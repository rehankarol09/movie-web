import { TrendingPage } from "../pages/Trending";
import { UpcomingPage } from "../pages/Upcoming";
import { NewMoviePage } from "../pages/New";
import { Login } from "../pages/Login";

const trending = "/";
const upcoming = "/upcoming";
const newmovie = "/new"
const login = "/login"

export interface RouteProps {
  path: string;
  name: string;
  Component: any;
  isPrivate: boolean;
}

export const routes: RouteProps[] = [
  {
    path: trending,
    name: "Trending",
    Component: TrendingPage,
    isPrivate: true,
  },
  {
    path: upcoming,
    name: "Upcoming",
    Component: UpcomingPage,
    isPrivate: true,
  },
  {
    path: newmovie,
    name: "New Movie",
    Component: NewMoviePage,
    isPrivate: false,
  },
  {
    path: login,
    name: "Login",
    Component: Login,
    isPrivate: false,
  },
];
