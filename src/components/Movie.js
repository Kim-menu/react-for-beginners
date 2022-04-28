import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function Movie({coverImg, id, title, genres}) {
    return (
        <div key={id}>
            <img src={coverImg} alt="error"/>
            <h2>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <ul>
                {genres.map((genre) => <li key={genre}>{genre}</li>)}
            </ul>
        </div>
    );
}

Movie.propTypes = {
    coverImg: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;