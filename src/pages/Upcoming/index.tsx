import  { FC } from 'react'
import { MovieList } from '../../module/MovieList'
import { getUpcomingMovie } from '../../slices/movieSlice'

interface IProps {}

export const UpcomingPage:FC<IProps> = () => {
  return (
    <div>
       <MovieList
         fetchMovies={getUpcomingMovie}
         title='Upcoming'
       />
    </div>
   )
 }
