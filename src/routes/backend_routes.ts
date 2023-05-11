export const backend_routes = {
  movie: {
    getAllMovieApi: 'http://localhost:8082/movie'
  },
  shows: {
    getAllSelectedShows: `${process.env.NEXT_APP_API_URL}/getshow`
  },
  screenSeat: {
    getSelected_Screen_Seat: `http://localhost:8082/get_single_screen_seats`
  },
  bookingSeat: {
    create_Booking: `http://localhost:8082/booking`
  }
};
