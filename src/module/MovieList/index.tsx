import { FC, useEffect, useState } from "react";
import { useAppSelector } from "../../hooks/react-redux";
import { MovieCard } from "../../components/Card";
import { PageHeader } from "../../components/PageHeader";
import { Pagination } from "../../components/Pagination";
import styles from "./style.module.scss";
import { useDispatch } from "react-redux";
import { imagePath } from "../../config";
import { Movie } from "../../interfaces";

interface MovieListPageProps {
  title: string;
  fetchMovies: (page: number) => any;
}

export const MovieList: FC<MovieListPageProps> = ({ title, fetchMovies }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const movies = useAppSelector((state) => state.movie.movies);
  const { total_pages } = useAppSelector((state) => state.movie.metadata);
  const dispatch = useDispatch();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    dispatch(fetchMovies(currentPage));
  }, [currentPage, fetchMovies]);

  const handleNextButton = () => {
    setCurrentPage((prev) => prev + 1);
    setTimeout(() => {
      scrollToTop();
    }, 1000);
  };

  const handlePreviousButton = () => {
    setCurrentPage((prev) => prev - 1);
    setTimeout(() => {
      scrollToTop();
    }, 1000);
  };

  return (
    <div>
      <PageHeader title={title} />
      <div className={styles.card_container}>
        {movies &&
          movies.length > 0 &&
          movies.map((movie: Movie) => {
            const image = imagePath + movie.poster_path;
            return (
              <MovieCard
                key={movie.id}
                title={movie.title}
                img={image}
                vote_average={movie.vote_average}
                releaseDate={movie.release_date}
              />
            );
          })}
      </div>
      {movies && movies.length > 0 && (
        <Pagination
          handleNextButton={handleNextButton}
          handlePrevButtonClick={handlePreviousButton}
          currentPage={currentPage}
          totalPages={total_pages}
        />
      )}
    </div>
  );
};
