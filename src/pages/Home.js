import React, { useState, useEffect } from 'react'
import Search from '../components/Search'
import MoviesList from '../components/MoviesList'
import { includes } from '../lib/filter'
import axios from 'axios'

const Home = () => {
  const [apiMovies, setApiMovies] = useState([])
  const [movies, setMovies] = useState([])
  const [filter, setFilter] = useState('')
  const includesTitle = includes('Title')(filter)

  useEffect(() => {
    axios.get('http://www.omdbapi.com/?s=batman&page=1&apikey=beac1f02').then((res) => {
      const sorted = res.data['Search'].sort(
        (a, b) =>
          Number(String(b.Year).match(/\d+/)) - Number(String(a.Year).match(/\d+/)),
      )

      setApiMovies(sorted)
      setMovies(sorted)
    })
  }, [])

  useEffect(() => {
    setMovies(apiMovies.filter(includesTitle))
  }, [filter])

  return (
    <>
      <Search setter={setFilter} />
      <MoviesList items={movies} />
    </>
  )
}

export default Home
