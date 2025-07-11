import { useParams } from "react-router-dom";
import movieData from "../utiles/mockData";
import ReactPlayer from "react-player";

const Detailes = () => {

    const { slug } = useParams();
    
    const movie = movieData.find((movie)=> movie.slug == slug);

    return (
        <>
           <div className="relative w-full h-[80vh] overflow-hidden">
                {/* <ReactPlayer width="100vw" playing controls height="80vh" url={movie.youtube_trailer} /> */}
                <ReactPlayer width="100vw" className="scale-[1.50]" loop='true' playing="true" height="80vh" url={movie.youtube_trailer} />
                {/* <p className="text-white">{movie.title}</p> */}
           </div> 
        </>
    )
}

export default Detailes;