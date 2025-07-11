import { useParams } from "react-router-dom";
import movieData from "../utiles/mockData";
import ReactPlayer from "react-player";

const Detailes = () => {

    const { slug } = useParams();
    
    const movie = movieData.filter((movie)=> movie.slug == slug);

    return (
        <>
           <div className="relative w-full h-[80vh]">
                <ReactPlayer width="100vw" playing controls height="80vh" url={movie.youtube_trailer} />
           </div> 
        </>
    )
}

export default Detailes;