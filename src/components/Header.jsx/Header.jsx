import { Link ,Container } from './Header.styled';
export const Header = () => {
  return (
    <Container>
      <Link to="/home">Home</Link>
      <Link to="/movies">Movies</Link>
    </Container>
  );
};
