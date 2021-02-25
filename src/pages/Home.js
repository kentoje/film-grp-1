import React, { useState, useEffect, useContext } from 'react'
import Search from '../components/Search'
import MoviesList from '../components/MoviesList'
import Loader from '../components/Loader'
import { includes } from '../lib/filter'
import { getMoviesByPage } from '../service/fetchMovies'
import moviesContext from '../context/MoviesContext'

const Home = () => {
  // No store, apiMovies is behaving like how a store would do.
  const [apiMovies, setApiMovies] = useContext(moviesContext)
  const [movies, setMovies] = useState([])
  const [filter, setFilter] = useState('')
  const [nextPage, setNextPage] = useState(1)
  const [maxPage, setMaxPage] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [hasReachedBottom, setHasReachedBottom] = useState(false)
  const includesTitle = includes('title')(filter)

  // Init, once after first render.
  useEffect(() => {
    ;(async () => {
      try {
        setIsLoading(true)

        const { results, nextPage: futurPage, totalPages } = await getMoviesByPage(
          nextPage,
        )

        setApiMovies(results)
        setMovies(results)
        setNextPage(futurPage)
        setMaxPage(totalPages)
        setIsLoading(false)
      } catch (err) {
        console.error(err)
      }
    })()
  }, [])

  // Fetch next page when user reaches the end of the list.
  useEffect(() => {
    if (!(nextPage >= maxPage) && hasReachedBottom && !filter) {
      ;(async () => {
        try {
          setIsLoading(true)

          const { results, nextPage: futurPage, totalPages } = await getMoviesByPage(
            nextPage,
          )
          const allMovies = [...movies, ...results]

          /**
           * Sometimes the API is sending dupplicates.
           * This is a side effect to remove duplicates.
           */
          const dupplicateMovies = [...allMovies]
            .sort((a, b) => b.id - a.id)
            .filter(({ id }, index, arr) => id === arr[index + 1]?.id)

          if (dupplicateMovies.length > 0) {
            const arrOfIndex = dupplicateMovies.map(({ id: duppId }) =>
              allMovies.findIndex((movie) => movie.id === duppId),
            )

            arrOfIndex.forEach((index) => {
              allMovies.splice(index, 1)
            })
          }

          setApiMovies(allMovies)
          setMovies(allMovies)
          setNextPage(futurPage)
          setMaxPage(totalPages)
          setIsLoading(false)
        } catch (err) {
          console.error(err)
        }
      })()
    }

    setHasReachedBottom(false)
  }, [hasReachedBottom])

  // Triggers every time filter changes.
  useEffect(() => {
    setMovies(apiMovies.filter(includesTitle))
  }, [filter])

  return (
    <>
      <Search setter={setFilter} />
      <MoviesList items={movies} setter={setHasReachedBottom} />
      {isLoading && <Loader />}
    </>
  )
}

export default Home
