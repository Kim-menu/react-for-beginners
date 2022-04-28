import PropTypes from "prop-types";

function Movie({coverImg, id, title, genres}) {
    return (
        <div key={id}>
            <img src={coverImg} alt="error"/>
            <h2>{title}</h2>
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