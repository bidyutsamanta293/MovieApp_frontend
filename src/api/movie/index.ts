import axios from 'axios';
import { movieApiType } from './movieApi.type';
import { backend_routes } from '../../routes/backend_routes';

export const getMovieApi = async () => {
  try {
    console.log('try in');
    const { data: movieData } = await axios.get<movieApiType[]>(
      backend_routes.movie.getAllMovieApi
    );

    return movieData;
  } catch (error) {
    console.error(error);
    return [];
  }
};
