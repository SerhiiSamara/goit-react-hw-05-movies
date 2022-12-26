import { toast } from 'react-hot-toast';
import { useEffect, useState } from 'react';

import { fetchTodayTrendingMovies } from 'Api';
import { Link } from 'react-router-dom';
import { Item, Container } from './Home.styled';

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
	
console.log(movies)

  return (
    <Container>
      <h1>Trending today</h1>
      <ul>
        {movies.map(({ id, title }) => (
          <Item key={id}>
            <Link to={`/movies/${id}`}>{title}</Link>
          </Item>
        ))}
      </ul>
    </Container>
  );
};
