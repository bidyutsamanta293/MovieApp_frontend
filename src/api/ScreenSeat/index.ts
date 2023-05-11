import axios from 'axios';
import { backend_routes } from '../../routes/backend_routes';
import { screenSeatApiType } from './screenSeatApi.type';

export const screenSeatApi = async (screenId: number) => {
  try {
    const { data: ScreenSeat } = await axios.get<screenSeatApiType[]>(
      `${backend_routes.screenSeat.getSelected_Screen_Seat}/${screenId}`
    );

    return ScreenSeat;
  } catch (error) {
    console.error(error);
    return [];
  }
};
