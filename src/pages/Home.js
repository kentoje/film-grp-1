import React, { useState, useEffect } from 'react'
import Search from '../components/Search'
import MoviesList from '../components/MoviesList'
import { includes, pick, matchBy } from '../lib/filter'
import axios from 'axios'

const API_URL = 'http://www.omdbapi.com/?s=batman&page=1&apikey=beac1f02'

const Home = () => {
  const [apiMovies, setApiMovies] = useState([])
  const [movies, setMovies] = useState([])
  const [filter, setFilter] = useState('')
  const includesTitle = includes('Title')(filter)
  const matchByDate = matchBy(/\d+/)
  const pickYear = pick('Year')

  const sortByYear = (a, b) =>
    Number(matchByDate(pickYear(b))) - Number(matchByDate(pickYear(a)))

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        const sorted = pick('Search')(res.data).sort(sortByYear)

        setApiMovies(sorted)
        setMovies(sorted)
      })
      .catch((err) => {
        console.error(err)
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
