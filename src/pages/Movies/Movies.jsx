import { fetchMovies } from 'Api';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {toast} from 'react-hot-toast';

import { SearchBox } from 'components/SearchBox/SearchBox';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Container } from './Movies.styled';

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName= searchParams.get('query');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
		const getMovies = async () => {
			console.log('movieName: ', movieName);
      try {
        if (!movieName) {
          return;
        }
        const getMovies = await fetchMovies(movieName);
        setMovies(getMovies);
      } catch {
        toast.error('Щось пішло не так, спробуйте ще раз!');
      }
    };
    getMovies();
  }, [movieName, setMovies]);

  const updateSearchQuery = name => {
    setSearchParams({ query: name });
  };
  return (
    <Container>
      <SearchBox handleSubmit={updateSearchQuery} />
      <MoviesList sortedMovies={movies} />
    </Container>
  );
};
