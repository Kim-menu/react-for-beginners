import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

function Detail() {
    const [loading, setLoading] = useState(true);
    const {id} = useParams();
    const [movie, setMovie] = useState(null);
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(json.data.movie);
        setLoading(false);
    };
    useEffect(() => {
        getMovie();
    });
    return (
        <div>
            {loading ? <div>Loading...</div> :
                <div>
                    <img src={movie.large_cover_image} alt="loading failed..."/>
                    <h3>{movie.title}({movie.year}) {movie.rating}🌠</h3>
                    <h4>Running times: {movie.runtime} minutes</h4>
                </div>

            }
        </div>
    );
}
export default Detail;