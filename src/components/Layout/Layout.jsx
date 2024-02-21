import { Outlet } from "react-router-dom";

import { Suspense } from "react";
// import { HeaderBar } from "components/AppBar/AppBar";

export const Layout = () => {
  return (
    <Suspense fallback={"LOADING PAGE..."}>
      <Outlet />
    </Suspense>
  );
};
