import React, { useState, useEffect } from 'react'
import Search from '../components/Search'
import MoviesList from '../components/MoviesList'
import { includes } from '../lib/filter'
import { getMovies } from '../service/fetchMovies'

const Home = () => {
  // No store, store like behavior
  const [apiMovies, setApiMovies] = useState([])
  const [movies, setMovies] = useState([])
  const [filter, setFilter] = useState('')
  const [nextPage, setNextPage] = useState(1)
  const [maxPage, setMaxPage] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasReachedBottom, setHasReachedBottom] = useState(false)
  const includesTitle = includes('title')(filter)

  // Init, once after first render
  useEffect(() => {
    ;(async () => {
      try {
        setIsLoaded(true)

        const { results, nextPage: futurPage, totalPages } = await getMovies(nextPage)

        setApiMovies(results)
        setMovies(results)
        setNextPage(futurPage)
        setMaxPage(totalPages)
        setIsLoaded(false)
      } catch (err) {
        console.error(err)
      }
    })()
  }, [])

  // Every time filter changes
  useEffect(() => {
    setMovies(apiMovies.filter(includesTitle))
  }, [filter])

  return (
    <>
      <Search setter={setFilter} />
      <MoviesList items={movies} isLoaded={isLoaded} />
    </>
  )
}

export default Home
