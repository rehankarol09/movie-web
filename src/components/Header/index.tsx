import  { FC } from "react";
import styles from "./style.module.scss";
import LiveTvRoundedIcon from "@mui/icons-material/LiveTvRounded";
interface IProps {}
export const Header: FC<IProps> = () => {
  return (
    <header className={styles.header_container}>
      <h1 className={styles.header_text}>
        <span className={styles.header_icon}>
          <LiveTvRoundedIcon
            sx={{
              fontSize: {
                xs: "22px",
                sm: "32px",
              },
            }}
          />
        </span>
        Movie Application{" "}
      </h1>
    </header>
  );
};
