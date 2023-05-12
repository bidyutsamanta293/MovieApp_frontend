import axios from 'axios';
import { backend_routes } from '../../routes/backend_routes';
import { confirmSeatApiType, confirmseatApibodyType } from './confirmSeatApi.type';

export const confirmSeatApi = async (body: confirmseatApibodyType) => {
  try {
    const { data: confirmSeat } = await axios.post<confirmSeatApiType>(
      backend_routes.confirmSeat.create_confirm_booking,
      body
    );

    return confirmSeat;
  } catch (error) {
    console.error(error);
    return {};
  }
};
