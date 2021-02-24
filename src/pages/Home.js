import React, { useState, useEffect } from 'react'
import Search from '../components/Search'
import MoviesList from '../components/MoviesList'
import { includes } from '../lib/filter'
import { getMovies } from '../service/fetchMovies'
import { ActivityIndicator } from 'react-native'

const Home = () => {
  // No store, store like behavior
  const [apiMovies, setApiMovies] = useState([])
  const [movies, setMovies] = useState([])
  const [filter, setFilter] = useState('')
  const [nextPage, setNextPage] = useState(1)
  const [maxPage, setMaxPage] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [hasReachedBottom, setHasReachedBottom] = useState(false)
  const includesTitle = includes('title')(filter)

  // Init, once after first render
  useEffect(() => {
    ;(async () => {
      try {
        setIsLoading(true)

        const { results, nextPage: futurPage, totalPages } = await getMovies(nextPage)

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

  // Every time filter changes
  useEffect(() => {
    setMovies(apiMovies.filter(includesTitle))
  }, [filter])

  return (
    <>
      <Search setter={setFilter} />
      {isLoading && <ActivityIndicator size="large" color="#f44802" />}
      <MoviesList items={movies} />
    </>
  )
}

export default Home
