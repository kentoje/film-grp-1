import React, { useState, useEffect } from 'react'
import Search from '../components/Search'
import MoviesList from '../components/MoviesList'
import data from '../helpers/filmDatas'
import { includes } from '../lib/filter'

const Home = () => {
  const [movies, setMovies] = useState(data)
  const [filter, setFilter] = useState('')
  const includesTitle = includes('title')(filter)

  useEffect(() => {
    setMovies(data.filter(includesTitle))
  }, [filter])

  return (
    <>
      <Search setter={setFilter} />
      <MoviesList items={movies} />
    </>
  )
}

export default Home
