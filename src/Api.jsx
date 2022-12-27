import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '66147eb2c028c13d2d92c2ee06cc386d';

export async function fetchTodayTrendingMovies() {
  const options = {
    params: {
      api_key: API_KEY,
    },
  };
  const response = await axios.get(`${BASE_URL}trending/all/day`, options);
  return response.data.results;
}

export async function fetchMovieDetails(movieId) {
  const options = {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  };
  const response = await axios.get(`${BASE_URL}movie/${movieId}`, options);
  return response.data;
}

export async function fetchReviews(movieId) {
  const options = {
    params: {
      api_key: API_KEY,
			language: 'en-US',
    },
  };
  const response = await axios.get(`${BASE_URL}movie/${movieId}/reviews`, options);
  return response.data.results;
}

export async function fetchCast(movieId) {
  const options = {
    params: {
      api_key: API_KEY,
			language: 'en-US',
    },
  };
	const response = await axios.get(`${BASE_URL}movie/${movieId}/credits`, options);
  return response.data.cast;
}

export async function fetchMovies(searchQuery) {
  const options = {
    params: {
      api_key: API_KEY,
			language: 'en-US',
			query: searchQuery,
    },
  };
	const response = await axios.get(`${BASE_URL}search/movie/`, options);
	console.log(response)
  return response.data.results;
}