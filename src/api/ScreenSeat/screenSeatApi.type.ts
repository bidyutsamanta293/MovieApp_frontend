export interface screenSeatApiType {
  id: number;
  seat: string;
  screen: {
    id: number;
    screenname: string;
    theater: {
      id: number;
      shortform: string;
      name: string;
      address: string;
      location: string;
    };
  };
}
