import { FC } from "react";
import styles from "./style.module.scss";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
interface IProps {
  img: string;
  title: string;
  vote_average: number;
  releaseDate: string;
}

export const MovieCard: FC<IProps> = ({
  img,
  title,
  vote_average,
  releaseDate,
}) => {
  return (
    <div className={styles.card_wrap}>
    <div className={styles.card}>
      <div className={styles.image_container}>
        <img src={img} alt="Movie Poster" className={styles.moviePoster} />
      </div>
      <div className={styles.movie_info}>
        <div className={styles.movie_title}>
          <span>{title}</span>
        </div>
        <div className={styles.metaInfo}>
          <div className={styles.release_date}>
            <span>{releaseDate}</span>
          </div>
          {vote_average != 0 && (
            <div className={styles.movie_ratings}>
              <span>
                <StarRateRoundedIcon sx={{ color: "yellow" }} />
              </span>
              {vote_average.toFixed(2)} / 10
            </div>
          )}
        </div>
      </div>
    </div>
    </div>
  );
};
