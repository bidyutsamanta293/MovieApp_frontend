import axios from 'axios';
import { backend_routes } from '../../routes/backend_routes';
import { bookingApiBodyType, bookingApiType } from './bookingApi.type';

export const createBookingApi = async (body: bookingApiBodyType) => {
  try {
    const { data: createBooking } = await axios.post<bookingApiType>(
      backend_routes.bookingSeat.create_Booking,
      body
    );

    return createBooking;
  } catch (error) {
    console.error(error);
    return [];
  }
};
