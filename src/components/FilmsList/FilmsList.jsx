import { useLocation, Link } from "react-router-dom";
import { ListFilms, ItemFilms } from './FilmsList.module';
import PropTypes from 'prop-types';

const FilmsList = ({movies}) => {
const location = useLocation();
return (
  <ListFilms>
    {movies.map(({id,original_title}) => (
        <ItemFilms key={id}>
            <Link state ={{from: location}} to ={`/movies/${id}`}>
                {original_title}
            </Link>
        </ItemFilms>
    ))};
  </ListFilms>  
);

};
FilmsList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string.isRequired
    })
  ).isRequired
};

export default FilmsList;