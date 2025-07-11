import { Link } from "react-router-dom";

const MovieCard = ({image,slug}) => {
    return (
        <>
            <Link to={`/moviedetailes/${slug}`}>
                <img className="w-48 rounded-xl" src={image} alt="movie-card" />
            </Link>
        </>
    )
}

export default MovieCard;