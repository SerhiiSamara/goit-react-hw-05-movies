import PropTypes from 'prop-types';

import { Link, useLocation } from 'react-router-dom';

import { Item } from './MoviesList.styled';

export const MoviesList = ({ sortedMovies }) => {
  const location = useLocation();

  return (
    <ul>
      {sortedMovies.map(({ id, title }) => (
        <Item key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </Link>
        </Item>
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  sortedMovies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
