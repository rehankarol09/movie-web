import React, { FC, useEffect } from 'react'
import { MovieList } from '../../module/MovieList'
import { getUpcomingMovie } from '../../slices/movieSlice'

interface IProps {}

export const UpcomingPage:FC<IProps> = (props) => {
  return (
    <div>
       <MovieList
         fetchMovies={getUpcomingMovie}
         title='Upcoming'
       />
    </div>
   )
 }
