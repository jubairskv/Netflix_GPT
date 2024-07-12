import MovieList from "./MovieList"
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies)
  //console.log(movies)

  return movies.upCommingMovies && (
    <div className=" bg-black">
      <div className="-mt-52  pl-12 relative z-20">
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Popular"} movies={movies.popularMovies}/>
      <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
      <MovieList title={"Upcomming Movies"} movies={movies.upCommingMovies}/>
      <MovieList title={"Horror"} movies={movies.nowPlayingMovies}/>
     
      </div>
    </div>
  )
}

export default SecondaryContainer