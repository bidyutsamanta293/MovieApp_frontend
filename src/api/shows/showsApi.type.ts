export interface showsApiType {
  id: number;
  time: string;
  price: number;
  startDate: any;
  endDate: any;
  movie: {
    id: number;
    slug: string;
    title: string;
    url: string;
    genre: string;
    rating: string;
    director: string;
    duration: string;
    flag: string;
  };
  screen: {
    theater: any;
    id: number;
    screenname: string;
  };
}
