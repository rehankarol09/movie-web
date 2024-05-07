import { Route, Routes } from "react-router-dom";
import { RouteProps, routes } from "./constants";
import { DefaultLayout, ProtectedLayout } from "./layout";

export const RouterConfig = () => {
  return (
    <Routes>
      {routes.map((rte: RouteProps, key: number) => {
        const { Component, isPrivate } = rte;

        if (isPrivate) {
          return (
            <Route key={key}  element={<ProtectedLayout />}>
              <Route key={key} path={rte.path} element={<Component name={rte.name} />} />
            </Route>
          );
        } else {
          return (
            <Route key={key}  element={<DefaultLayout />}>
              <Route key={key} path={rte.path} element={<Component name={rte.name} />} />
            </Route>
          );
        }
      })}
    </Routes>
  );
};
