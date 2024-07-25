import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("../components/pages/home"));
const SearchPage = lazy(() => import("../components/pages/search"));
const CategoryPage = lazy(() => import("../components/pages/category"));

import Container from "../components/layouts/container";

const Pages: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<Container />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/category/:category" element={<CategoryPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Pages;
