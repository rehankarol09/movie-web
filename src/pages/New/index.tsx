import  { FC } from "react";
import { MovieList } from "../../module/MovieList";
import { getTNewMovies } from "../../slices/movieSlice";

interface IProps {}

/**
 * @author
 * @function @TrendingPage
 **/

export const NewMoviePage: FC<IProps> = () => {
  return (
    <>
      <MovieList title="In Theatres" fetchMovies={getTNewMovies} />
    </>
  );
};
