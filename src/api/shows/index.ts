import axios from 'axios';
import { backend_routes } from '../../routes/backend_routes';
import { showsApiType } from './showsApi.type';

export const getShowsApi = async (slug: string | string | string[] | undefined | undefined) => {
  try {
    const { data: showsData } = await axios.get<showsApiType[]>(
      `${backend_routes.shows.getAllSelectedShows}/${slug}`
    );

    return showsData;
  } catch (error) {
    console.error(error);
    return [];
  }
};
