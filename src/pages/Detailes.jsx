import { useParams } from "react-router-dom";
import movieData from "../utiles/mockData";
import ReactPlayer from "react-player";
import { BsVolumeUpFill } from "react-icons/bs";
import { BsVolumeMuteFill } from "react-icons/bs";
import { useState } from "react";
import MovieCard from "../components/MovieCard";

const Detailes = () => {

    const [playVideo,setplayVideo] = useState(true);

    const { slug } = useParams();

    function handleClick(){
        setplayVideo((prev)=>!prev);
    }
    
    const movie = movieData.find((movie)=> movie.slug == slug);

    const newCards = movieData.filter((card) => (card.genre == movie.genre) && card.imdb_rating >= 8.0);

    return (
        <>
           <div className="relative w-full h-[80vh] overflow-hidden mb-10">
                <ReactPlayer width="100vw" className="scale-[1.50]" loop muted={playVideo} playing={true} height="80vh" src={movie.youtube_trailer} />
                <div className="absolute left-24 bottom-36 w-[500px] text-white">
                    <p className="text-5xl font-black my-2">{movie.title}</p>
                    <p className="text-xl my-2">{movie.description}</p>
                    <p className="bg-orange-600 inline-block px-4 rounded-lg py-1">{movie.imdb_rating} rating</p>
                </div>
                <div className="absolute bottom-36 right-28 text-white text-4xl">
                    <button onClick={handleClick} className="border border-white rounded-full p-2 cursor-pointer">{ playVideo ? <BsVolumeMuteFill /> : <BsVolumeUpFill />}</button>
                </div>
           </div>
           <div className="w-[1200px] mx-auto justify-center my-14 flex gap-4 flex-wrap">
                {   
                    newCards.map((moviecard) => <MovieCard key={moviecard.id} image={moviecard.img}/>)
                }
           </div>
        </>
    )
}

export default Detailes;