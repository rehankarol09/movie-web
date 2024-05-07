import { Outlet, useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks/react-redux";

export const ProtectedLayout = () => {
  const  authenthicated = useAppSelector(state=> state.auth.authenthicated)
  if (!authenthicated) {
    return <Navigate replace to={"/login"} />;
  }
  return (
    <>
      <Outlet />
    </>
  );
};

export const DefaultLayout = () => {
  const  authenthicated = useAppSelector(state=> state.auth.authenthicated)
  const location = useLocation();
  const loginPath = "/login"; 

  const isLogin = location.pathname === loginPath;

  if (authenthicated && isLogin) {
    return <Navigate replace to={"/"} />;
  }

  return (
    <>
      <Outlet />
    </>
  );
};
