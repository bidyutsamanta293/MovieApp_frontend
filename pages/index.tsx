import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import MaxWidthWrapper from '../src/components/common/MaxWidthWrapper';
import SwiperImage from '../src/components/homePage/SwiperImage';
import SwiperAds from '../src/components/homePage/SwiperAds';
import MoviesText from '../src/components/homePage/MoviesText';
import SeconderyMoviesList from '../src/components/homePage/SeconderyMoviesList';
import Footer from '../src/components/common/Footer';
import Header from '../src/components/common/Header';
import Loader from '../src/components/common/Loader';
import { GetServerSideProps } from 'next';
import { getMovieApi } from '../src/api/movie';
import { json } from 'stream/consumers';
import { movieApiType } from '../src/api/movie/movieApi.type';

interface ActiveChatsProps {
  movie: movieApiType[]
}
const Homepage: React.FC<ActiveChatsProps> = ({movie}) => {
  const [page, setPage] = React.useState(true);

  useEffect(() => {
    // console.log("process", process.env.NEXT_APP_BASE_URL);
    if (localStorage.getItem('isLogin')) {
      setPage(false);
    }
    // console.log("get movie",movie);
  }, []);

  return (
    <>
      {page ? (
        <Loader />
      ) : (
        <MaxWidthWrapper>
          <Header />
          <SwiperImage movie={movie} />
          <Box sx={{ padding: { xs: '80px 0px 0px 0px', lg: '60px 0px 0px 0px' } }}>
            <SwiperAds />
          </Box>
          <MoviesText />
          <SeconderyMoviesList />
          <Footer />
        </MaxWidthWrapper>
      )}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  
  const selectedMovieData = await getMovieApi()

 
  return {
    props: {  movie: selectedMovieData}
  };
};

export default Homepage;
