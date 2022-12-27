import { toast } from 'react-hot-toast';
import { useEffect, useState } from 'react';

import { fetchTodayTrendingMovies } from 'Api';
import {  Container } from './Home.styled';
import { MoviesList } from 'components/MoviesList/MoviesList';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getTodayTrandingMovies() {
      try {
        const getMovies = await fetchTodayTrendingMovies();
        setMovies(
          getMovies.map(({title, name, id}) => ({
            title: title || name,
            id: id,
          }))
        );
      } catch {
        toast.error('Щось пішло не так, спробуйте ще раз!');
      }
    }
    getTodayTrandingMovies();
	}, []);
	
  return (
    <Container>
      <h1>Trending today</h1>
      <MoviesList sortedMovies={movies} />
    </Container>
  );
};
