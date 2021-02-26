import axios from 'axios'

const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/original'
const BASE_MOVIE_URL = 'https://api.themoviedb.org/3/search/movie'
const API_KEY = '026890b0945cbc402813edbeb90f0223'

const getMoviesByPage = async (page = 'null', query = 'null') => {
  try {
    const {
      data: { results, total_pages: totalPages, page: currentPage },
    } = await axios.get(
      `${BASE_MOVIE_URL}?api_key=${API_KEY}&query=${query}&page=${page}`,
    )

    return {
      results: results.map((movie) => ({
        ...movie,
        image: movie.poster_path
          ? `${BASE_IMAGE_URL}${movie.poster_path}`
          : 'https://media.comicbook.com/files/img/default-movie.png',
        isPopular: movie.popularity * 10 > 7,
      })),
      nextPage: currentPage + 1,
      totalPages,
    }
  } catch (err) {
    console.log(err)
  }
}

const getHomepageOfMovie = async (id) => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`,
    )

    return data.homepage || ''
  } catch (err) {
    console.log(err)
  }
}

export { getMoviesByPage, getHomepageOfMovie }
