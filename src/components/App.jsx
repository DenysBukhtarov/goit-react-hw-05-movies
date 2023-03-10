import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import SharedLayout from "./SharedLayout";

const Home = lazy(() => import('../pages/Home'));
const MovieSearch = lazy(() => import('../pages/MovieSearch/MovieSearch'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const CreditMovie = lazy(() => import('../pages/CreditMovie/CreditMovie'));
const ReviewsMovie = lazy(() => import('../pages/ReviewsMovie/ReviewsMovie'));
const PageNotFound = lazy(() => import('../pages/PageNotFound/PageNotFound'));


export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          
          <Route path="movies" element={<MovieSearch />} />
          
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="credit" element={<CreditMovie />} />
            <Route path="reviews" element={ <ReviewsMovie />}/>
          </Route>

          <Route path="*" element={<PageNotFound />}/>
          </Route>
    </Routes>
    </>
  );
};
