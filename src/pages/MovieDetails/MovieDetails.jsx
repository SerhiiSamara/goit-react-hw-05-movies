import toast from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { Outlet, useNavigate, useParams, Link } from 'react-router-dom';

import { fetchMovieDetails } from 'Api';
import {
  Wrap,
  Image,
  Container,
  Button,
  ListLink,
  ItemLink,
} from './MovieDetals.styled';

  const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';


export const MovieDetails = () => {
	const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
	const navigate = useNavigate();

  useEffect(() => {
    async function getMovieDetails() {
      try {
        const getMovieDetails = await fetchMovieDetails(movieId);
        setMovieDetails(getMovieDetails);
      } catch {
        toast.error('Щось пішло не так, спробуйте ще раз!');
      }
    }
    getMovieDetails();
	}, [movieId]);
	
	

  const handleClick = () => {
    navigate('/');
  };

  const {
    poster_path,
    original_title,
    overview,
    genres = [],
    vote_average,
  } = movieDetails;
	const stringGenres = genres.map(genre => genre.name).join(',  ');
	
	// if (Object.keys(movieDetails).length === 0) {
  //   return <Navigate to="/" replace/>;
  // }
	// console.log(Object.keys(movieDetails).length);
	

  return (
    <Container>
      <Button onClick={handleClick} to="/">
        Go back
      </Button>
      <Wrap>
        <Image src={BASE_IMG_URL + poster_path} alt={original_title} />
        <div>
          <h2>{original_title}</h2>
          <p>User score {Math.trunc(vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h4>Genres</h4>
          <p>{stringGenres}</p>
        </div>
      </Wrap>
      <p>Additional information</p>
      <ListLink>
        <ItemLink>
          <Link to="cast">Cast</Link>
        </ItemLink>
        <ItemLink>
          <Link to="reviews">Reviews</Link>
        </ItemLink>
      </ListLink>
      <Outlet />
    </Container>
  );
};
