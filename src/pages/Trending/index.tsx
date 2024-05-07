import  { FC } from 'react'
import { MovieList } from '../../module/MovieList'
import { getTrendingMovies } from '../../slices/movieSlice';

interface IProps {}

/**
* @author
* @function @TrendingPage
**/

export const TrendingPage:FC<IProps> = () => {
  return (
    <>
     <MovieList
      title='Trending'
      fetchMovies={getTrendingMovies}
     />
    </>
   )
 }
