import React, { FC } from "react";
import styles from "./style.module.scss";
import { NavLink } from "react-router-dom";
import { FooterLink } from "./util";

interface IProps {}
export const Footer: FC<IProps> = (props) => {
  return (
    <footer className={styles.footer_container}>
      {FooterLink.map((val) => {
        const IconComponet = val.icon;
        return (
          <NavLink
            to={`${val.link}`}
            key={val.id}
            className={({ isActive }) =>
               isActive ? styles.isActive : ""
            }
          >
            <button className={styles.footer_button}>
              <span>
                <IconComponet />
              </span>
              <h5>{val.name}</h5>
            </button>
          </NavLink>
        );
      })}
    </footer>
  );
};
