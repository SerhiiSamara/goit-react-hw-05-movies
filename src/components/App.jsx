import { Toaster } from 'react-hot-toast';
import { GlobalStyle } from './GlobalStyle';
import { Routes, Route } from 'react-router-dom';

import { Home } from 'pages/Home/Home';
import { MovieDetails } from '../pages/MovieDetails/MovieDetails';
import { Layout } from './Layout/Layout';
import { NotFound } from './NotFound/NotFound';
import { Reviews } from './Reviews/Reviews';
import { Cast } from './Cast/Cast';
import { Movies } from 'pages/Movies/Movies';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies/>} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
						<Route path="reviews" element={<Reviews />} />
						<Route path="*" element={<NotFound />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Toaster
        toastOptions={{
          duration: 5000,
          style: {
            background: '#363636',
            color: '#fff',
          },
        }}
      />
      <GlobalStyle />
    </>
  );
};
