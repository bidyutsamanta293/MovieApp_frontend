import React from 'react';
import { Box, Divider, Typography } from '@mui/material';
import { format } from 'date-fns';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import style from '../../../styles/confirmPayment.module.css';
import { moviesListingType } from '../../types/constants/movieListing.type';
import { SelectedShowReduxType } from '../../store/reducers/selected-show/SelectedShow.slice';

interface detailsPageProps {
  movieShowData: moviesListingType | undefined;
  selectedMovieShowData: SelectedShowReduxType;
  seatNameArray: Array<string>;
  handlebackpage: () => void;
}

const detailsPage: React.FC<detailsPageProps> = ({
  movieShowData,
  selectedMovieShowData,
  seatNameArray,
  handlebackpage
}) => {
  console.log({ selectedMovieShowData });
  return (
    <Box sx={{ width: { lg: '40%', xs: '100%' }, paddingTop: '50px' }}>
      <Box style={{ paddingBottom: '30px' }}>
        <Typography className={style.confirmText1} gutterBottom>
          confirm booking
        </Typography>
      </Box>

      <Box>
        <Typography className={style.confirmText2} gutterBottom>
          Detail Jadwal
        </Typography>
      </Box>

      <Box sx={{ paddingRight: { lg: '80px', xs: '10px' } }}>
        <Typography className={style.confirmText3} gutterBottom>
          Film name
        </Typography>

        <Typography className={style.confirmText3name} gutterBottom>
          {selectedMovieShowData.movieName}
        </Typography>
      </Box>

      <Divider style={{ width: '85%' }} />

      {/* div2 */}

      <Box style={{ paddingRight: '80px', paddingTop: '20px' }}>
        <Typography className={style.confirmText3} gutterBottom>
          date
        </Typography>

        {selectedMovieShowData?.showDate && (
          <Typography className={style.confirmText3name} gutterBottom>
            {format(selectedMovieShowData.showDate, 'EEEE')},
            {format(selectedMovieShowData.showDate, 'd LLLL')} -{' '}
            {format(selectedMovieShowData.showDate, 'y')}
          </Typography>
        )}
      </Box>
      <Divider style={{ width: '85%' }} />
      {/* div3 */}

      <Box
        style={{
          paddingRight: '80px',
          paddingTop: '20px',
          display: 'flex'
        }}>
        <Box>
          <Typography className={style.confirmText3} gutterBottom>
            Seat
          </Typography>

          {selectedMovieShowData?.showType && (
            <Typography className={style.confirmText3name} gutterBottom>
              {selectedMovieShowData?.showType}
            </Typography>
          )}
        </Box>
        <Box style={{ paddingLeft: '80px' }}>
          <Typography className={style.confirmText3} gutterBottom>
            Time
          </Typography>
          {selectedMovieShowData?.selectedTime && (
            <Typography className={style.confirmText3name} gutterBottom>
              {selectedMovieShowData?.selectedTime.split(':')[0]}:
              {selectedMovieShowData?.selectedTime.split(':')[1]}
            </Typography>
          )}
        </Box>
      </Box>
      <Divider style={{ width: '85%' }} />
      {/* div4 */}

      <Box style={{ paddingRight: '80px', paddingTop: '20px' }}>
        <Typography className={style.confirmText3} gutterBottom>
          Ticket ({selectedMovieShowData?.selectedSeats.length})
        </Typography>

        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
          <Typography className={style.confirmText3name} gutterBottom>
            {selectedMovieShowData?.selectedSeatsName.toString()}
          </Typography>
        </Box>
      </Box>
      <Divider style={{ width: '85%' }} />

      <Box
        style={{
          paddingRight: '80px',
          paddingTop: '50px',
          display: 'flex'
        }}>
        <ArrowBackIcon onClick={handlebackpage} className={style.arrowbackbtn} />
        <Typography className={style.confirmText4} gutterBottom>
          return
        </Typography>
      </Box>
    </Box>
  );
};

export default detailsPage;
