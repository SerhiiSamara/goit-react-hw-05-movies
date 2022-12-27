import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';

import { fetchReviews } from 'Api';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function getReviews() {
      try {
        const getReviews = await fetchReviews(movieId);

        setReviews(
          getReviews.map(({ author, content, id }) => ({
            author: author,
            content: content,
            id: id,
          }))
        );
      } catch {
        toast.error('Щось пішло не так, спробуйте ще раз!');
      }
    }
    getReviews();
  }, [movieId]);

  if (Object.keys(reviews).length === 0) {
    return <p>We don't have any reviews for this movie.</p>;
  }

  return (
    <ul>
      {reviews.map(({ author, content, id }) => (
        <li key={id}>
          <h3>Author: {author}</h3>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};
