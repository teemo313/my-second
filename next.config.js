/** @type {import('next').NextConfig} */
const API_KEY = "fe70023ec53e73de5f4f566c124b89bd";
const nextConfig = {
  reactStrictMode: true,
  async rewrites () {
    return [
      {
        source : "/api/movies/upcoming", 
        destination : `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`,
      },
      {
        source : "/api/movies/popular", 
        destination : `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        source : "/api/movies/now_playing", 
        destination : `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`,
      },
      {
        source : "/api/movies/top_rated", 
        destination : `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`,
      },
    ]
  },
  
}

module.exports = nextConfig
