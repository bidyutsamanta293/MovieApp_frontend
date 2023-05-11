import React, { useEffect } from 'react';
import Image from 'next/image';
import { Box, Button, Card, CardContent, Grid, Typography } from '@mui/material';
import style from '../../../../../styles/selectedMovie.module.css';
import { moviesListingType } from '../../../../types/constants/movieListing.type';
import { SelectedShowReduxType } from '../../../../store/reducers/selected-show/SelectedShow.slice';
import { useRouter } from 'next/router';
import { format } from 'date-fns';
import { theatreListing } from '../../../../data/mainData';
import { showsApiType } from '../../../../api/shows/showsApi.type';

interface SelectedMovieShowProps {
  selectedMovieData: showsApiType[];
  MovieShowData: SelectedShowReduxType;
  theaterName: string | undefined;
}

const SelectedMovieShow: React.FC<SelectedMovieShowProps> = ({
  selectedMovieData,
  MovieShowData,
  theaterName
}) => {
  const router = useRouter();
  useEffect(() => {
    console.log('MovieShowData2222', MovieShowData, selectedMovieData);
  }, []);

  console.log({ selectedMovieData });

  const handleClickContinue = () => {
    router.push({ pathname: '/seatbook' });
  };

  return (
    <>
      <Grid item xs={12} lg={5}>
        <Box
          sx={{
            display: 'flex',
            paddingLeft: { lg: '80px', xs: '0px' },
            paddingTop: { lg: '190px', xs: '100px' },
            flexDirection: 'column'
          }}>
          <Box
            sx={{
              height: '50vh',
              overflow: 'hidden'
            }}>
            <Image
              src={selectedMovieData[0]?.movie?.url || ''}
              alt="data"
              width={400}
              height={550}
            />
          </Box>

          <Box>
            <Typography variant="h4" className={style.nameMovie}>
              {selectedMovieData[0]?.movie?.title}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                width: { lg: '70%', xs: '100%', md: '50%' },
                justifyContent: 'space-between',
                paddingTop: '20px'
              }}>
              <Typography variant="h4" className={style.category2}>
                Genre
              </Typography>
              <Typography variant="h4" className={style.category2}>
                {selectedMovieData[0]?.movie?.genre}
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                width: { lg: '70%', xs: '100%', md: '50%' },
                justifyContent: 'space-between',
                paddingTop: '20px'
              }}>
              <Typography variant="h4" className={style.category2}>
                Durasi
              </Typography>
              <Typography variant="h4" className={style.category2}>
                {selectedMovieData[0]?.movie?.duration}
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                width: { lg: '70%', xs: '100%', md: '50%' },
                justifyContent: 'space-between',
                paddingTop: '20px'
              }}>
              <Typography variant="h4" className={style.category2}>
                Sutradara
              </Typography>
              <Typography variant="h4" className={style.category2}>
                {selectedMovieData[0]?.movie?.director}
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                width: { lg: '70%', xs: '100%', md: '50%' },
                justifyContent: 'space-between',
                paddingTop: '20px'
              }}>
              <Typography variant="h4" className={style.category2}>
                Rating Usia
              </Typography>
              <Typography variant="h4" className={style.category2}>
                {selectedMovieData[0]?.movie?.rating}
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: { lg: '90%', xs: '100%', md: '50%' },
              paddingTop: '50px'
            }}>
            <Card
              sx={{
                border: '1px solid #5A637A',
                borderRadius: '8px'
              }}
              id="card"
              className={style.cardbooking}>
              <CardContent style={{ paddingTop: '25px', paddingLeft: '18px' }}>
                <Typography
                  className={style.selectThatre}
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom>
                  {/* {data.name} */}
                  {theaterName}
                </Typography>

                {MovieShowData.showDate && (
                  <Typography
                    className={style.selectThatre2}
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom>
                    {format(MovieShowData.showDate, 'E')} ,
                    {format(MovieShowData?.showDate, 'd LLL')} -{' '}
                    {format(MovieShowData?.showDate, 'y')}
                    {/* {MovieShowData?.showDate} */}
                    {/* {format(new Date(MovieShowData?.showDate), 'LLLL')} */}
                  </Typography>
                )}
                <Box
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                  }}>
                  <Typography
                    className={style.selectThatre3}
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom>
                    {MovieShowData?.showType}
                  </Typography>

                  {MovieShowData.selectedTime && (
                    <Typography
                      className={style.selectThatre3}
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom>
                      {MovieShowData.selectedTime.split(':')[0]}:
                      {MovieShowData.selectedTime.split(':')[1]}
                    </Typography>
                  )}
                </Box>
                <Typography
                  className={style.selectThatre4}
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom>
                  * Pemilihan kursi dapat dilakukan setelah ini
                </Typography>
                <Button
                  variant="contained"
                  className={style.buttonset}
                  onClick={handleClickContinue}>
                  Continue...
                </Button>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Grid>
    </>
  );
};

export default SelectedMovieShow;
