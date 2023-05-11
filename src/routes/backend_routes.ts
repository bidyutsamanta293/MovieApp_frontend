export const backend_routes = {
  movie: {
    getAllMovieApi: 'http://localhost:8082/movie'
  },
  shows: {
    getAllSelectedShows: `${process.env.NEXT_APP_API_URL}/getshow`
  }
};
