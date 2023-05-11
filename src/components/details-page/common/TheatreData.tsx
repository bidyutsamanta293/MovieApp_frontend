import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import React from 'react';
import style from '../../../../styles/selectedMovie.module.css';
import starico from '../../../../public/images/homepageImage/homePage/Star.png';
import notFoundLogo from '../../../../public/images/homepageImage/nodatafound.png';
import { isPast } from 'date-fns';
import { theatreListingType } from '../../../types/constants/theatreListing.type';
import { moviesListingType } from '../../../types/constants/movieListing.type';
import { timePriceType } from '../../../types/constants/timePrice.type';

interface TheatreDataProps {
  theatreListingData: any;
  selectedDate: Date;
  selectShowHandle: (
    screen: any,
    screenId: number,
    showId: number,
    // showTimes: string[],
    selectedTime: string,
    screenType: string,
    price: number,
    theaterName: string,
    movieName: string
  ) => void;
}

const TheatreData: React.FC<TheatreDataProps> = ({
  theatreListingData,
  selectedDate,
  selectShowHandle
}) => {
  console.log({ theatreListingData });
  return (
    <Box>
      {theatreListingData.length > 0 ? (
        theatreListingData.map((item: any) => {
          return (
            <>
              <Box
                sx={{
                  paddingTop: '40px',
                  paddingRight: { lg: '110px', xs: '0px' }
                }}>
                <Box
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                  }}>
                  <Box style={{ display: 'flex', alignItems: 'center' }}>
                    <Image src={starico} className={style.starlogo} alt="starlogo" />
                    <Typography
                      variant="h5"
                      className="moviesh5text"
                      sx={{
                        color: '#333333',
                        fontFamily: 'system-ui',
                        fontStyle: 'normal',
                        fontWeight: '500',
                        fontSize: { lg: '28px', xs: '20px' },
                        lineHeight: '32px',
                        paddingLeft: '12px'
                      }}>
                      {item.theatreName}
                    </Typography>
                  </Box>

                  <Box
                    style={{
                      backgroundColor: '#F2C46F',
                      borderRadius: '4px',
                      width: 'max-content',
                      margin: '12px',
                      marginTop: '12px'
                    }}>
                    <Typography
                      variant="h5"
                      sx={{
                        fontFamily: 'system-ui',
                        fontStyle: 'normal',
                        fontWeight: '700',
                        fontSize: { lg: '12px', xs: '10px' },
                        textAlign: 'center',
                        lineHeight: '24px',
                        color: '#FFFFFF',
                        padding: '0px 5px 0px 5px'
                      }}>
                      {item.shortForm}
                    </Typography>
                  </Box>
                </Box>

                <Typography
                  variant="h5"
                  className="moviesh5text"
                  style={{
                    color: '#5A637A',
                    fontFamily: 'system-ui',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '16px',
                    lineHeight: '24px',
                    paddingTop: '13px'
                  }}>
                  {item.address}
                </Typography>

                <Box
                  className={style.divregular}
                  style={{ display: 'flex', flexDirection: 'column' }}>
                  {item.screenNames.map((type: any) => {
                    return (
                      <>
                        <Box
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between'
                          }}>
                          <Typography
                            variant="h5"
                            className="moviesh5text"
                            sx={{
                              color: '#5A637A',
                              fontFamily: 'system-ui',
                              fontStyle: 'normal',
                              fontWeight: '500',
                              fontSize: { lg: '24px', xs: '10px' },
                              lineHeight: '32px',
                              paddingTop: '23px'
                            }}>
                            {type}
                          </Typography>

                          <Typography
                            variant="h5"
                            className="moviesh5text"
                            sx={{
                              color: '#5A637A',
                              fontFamily: 'system-ui',
                              fontStyle: 'normal',
                              fontWeight: '400',
                              fontSize: { lg: '18px', xs: '12px' },
                              lineHeight: '28px',
                              paddingTop: '23px'
                            }}>
                            {/* Rs.{type.time[0].price} */}
                            100
                          </Typography>
                        </Box>

                        <Box className={style.griditemdiv}>
                          {item.screen.map((data: any) => {
                            if (type === data.screenname)
                              return (
                                <>
                                  <Box
                                    style={{
                                      padding: '20px',
                                      paddingLeft: '0px'
                                    }}>
                                    <Button
                                      sx={{
                                        border:
                                          isPast(data.time) && isPast(selectedDate)
                                            ? '0px'
                                            : '1px solid #5A637A',
                                        borderRadius: '5px',
                                        color: '#1a2c50',
                                        fontSize: '17px',
                                        backgroundColor:
                                          isPast(data.time) && isPast(selectedDate)
                                            ? '#DADFE8'
                                            : '#fff',
                                        '&:hover': {
                                          color: '#fff',
                                          backgroundColor: '#1a2c50',
                                          fontSize: '18px'
                                        },
                                        '&:focus': {
                                          color: '#fff',
                                          backgroundColor: '#1a2c50',
                                          fontSize: '18px'
                                        }
                                      }}
                                      id="card"
                                      disabled={
                                        isPast(data.time) && isPast(selectedDate) ? true : false
                                      }
                                      onClick={() =>
                                        selectShowHandle(
                                          item.screen,
                                          data.screenId,
                                          data.showId,
                                          data.time,
                                          data.screenname,
                                          data.price,
                                          item.theatreName,
                                          data.movieNAme
                                        )
                                      }>
                                      {data.time.split(':')[0]}:{data.time.split(':')[1]}
                                    </Button>
                                  </Box>
                                </>
                              );
                          })}
                        </Box>
                      </>
                    );
                  })}
                </Box>
              </Box>
            </>
          );
        })
      ) : (
        <>
          <Box sx={{ margin: '30px' }}>
            <Typography variant="h6">No Theatre Found</Typography>
            <Image
              src={notFoundLogo}
              className={style.imageNoFound}
              alt="no found data"
              width={400}
              height={400}
            />
          </Box>
        </>
      )}
    </Box>
  );
};

export default TheatreData;
