import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';

import { fetchCast } from 'Api';
import { Name, Image, Item, Character } from './Cast.styled';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function getCast() {
      try {
        const getReviews = await fetchCast(movieId);

        setCast(
          getReviews.map(({ name, character, profile_path, id }) => ({
            image: profile_path,
            name: name,
            character: character,
            id: id,
          }))
        );
      } catch {
        toast.error('Щось пішло не так, спробуйте ще раз!');
      }
    }
    getCast();
  }, [movieId]);

  if (Object.keys(cast).length === 0) {
    return <p>We don't have any reviews for this movie.</p>;
  }

  return (
    <ul>
      {cast.map(({ name, character, image, id }) => (
        <Item key={id}>
          <Image src={BASE_IMG_URL + image} alt={'Foto ' + name} />
          <Name>{name}</Name>
          <Character>Character: {character}</Character>
        </Item>
      ))}
    </ul>
  );
};
