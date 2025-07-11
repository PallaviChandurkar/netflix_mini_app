import movieData from "../utiles/mockData";
import MovieCard from "../components/MovieCard";

const Home = () => {
    return (
        <>
            <div className="w-[1200px] mx-auto flex flex-wrap gap-5 justify-center my-16">
                {
                    movieData.map((movie)=> <MovieCard key={movie.id} image={movie.img} slug={movie.slug} />)
                }
            </div>
        </>
    )
}

export default Home;