import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../layouts/Layout";
import {
  HomePage,
  FavoritesPage,
  DetailMoviePage,
  MoreMoviePage,
  SearchPage,
  MisCompras
} from "../pages";


const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/more" element={<MoreMoviePage />} />
          <Route path="/detail/:id" element={<DetailMoviePage />} />
          <Route path="/search/:query" element={<SearchPage />} />
          <Route path="/miscompras" element={<MisCompras />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
