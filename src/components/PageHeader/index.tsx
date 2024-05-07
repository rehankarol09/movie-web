import  { FC } from 'react'
import styles from "./style.module.scss"
interface IProps {
    title:string
}



export const PageHeader:FC<IProps> = ({title}) => {
  return (
    <div className={styles.page_header}>
         <h1 className={styles.page_title}>{title}</h1>
    </div>
   )
 }
