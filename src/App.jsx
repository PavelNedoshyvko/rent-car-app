import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { lazy } from "react";
import ErrorPage from "./pages/ErrorPage";

const HomePage = lazy(() => import("./pages/HomePage"));
const RentPage = lazy(() => import("./pages/RentPage"));
const FavoritePage = lazy(() => import("./pages/FavoritePage"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/rent" element={<RentPage />} />
        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

export default App;
