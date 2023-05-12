import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SelectedShowReduxType {
  screenId: number;
  showId: number;
  showTimes: Array<string>;
  selectedTime: string;
  selectedSeats: Array<number>;
  showType: string;
  price: number;
  showDate: Date | null | string;
  movieName: string;
  selectedSeatsName: Array<string>;
  bookingId: number;
}

const initialState: SelectedShowReduxType = {
  screenId: 0,
  showId: 0,
  showTimes: [],
  selectedTime: '',
  selectedSeats: [],
  showType: '',
  price: 0,
  showDate: null,
  movieName: '',
  selectedSeatsName: [],
  bookingId: 0
};

const SelectedShow = createSlice({
  name: 'SelectedShow',
  initialState,
  reducers: {
    setSelectedShow: (
      state: SelectedShowReduxType,
      { payload }: PayloadAction<SelectedShowReduxType>
    ) => {
      console.log('redux data', payload);
      state.screenId = payload.screenId;
      state.showId = payload.showId;
      state.showTimes = payload.showTimes;
      state.selectedTime = payload.selectedTime;
      state.selectedSeats = [...payload.selectedSeats];
      state.showType = payload.showType;
      state.price = payload.price;
      state.showDate = payload.showDate;
      state.movieName = payload.movieName;
      state.selectedSeatsName = payload.selectedSeatsName;
      state.bookingId = payload.bookingId;
    }
  }
});

export default SelectedShow.reducer;
export const { setSelectedShow } = SelectedShow.actions;
