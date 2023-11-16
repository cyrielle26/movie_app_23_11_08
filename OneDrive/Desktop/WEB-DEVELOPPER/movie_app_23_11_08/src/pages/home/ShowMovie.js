import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { IMG_URL } from "../../constants";
import 'swiper/css';
import { Link } from "react-router-dom";



const Container = styled.section`
margin-bottom: 80px;
a{
    color:white;
}
`;


const Title = styled.h3`
font-size:50px;
font-weight: 700;
margin-bottom: 50px;
@media screen and (max-width: 450px) {
    font-size:30px;
    margin-bottom: 30px;
}
`;

const CoverBg = styled.div`
height: 300px;
background: url(${IMG_URL}/w500/${(props)=> props.$bgUrl}) no-repeat center / cover;
border-radius: 15px;
margin-bottom: 20px;
@media screen and (max-width: 450px) {
    height: 150px;
    margin-bottom: 15px;
}
`;
const MovieTitle = styled.h4`
font-size: 18px;
@media screen and (max-width: 450px) {
    font-size:16px;
    line-height: 22px;
}`;

const params = {
    slidesPerView: 5.5,
    spaceBetween : 20,
    breakpoints: {
        // when window width is >=  1024px
        1024: {
            slidesPerView: 5.5,
            spaceBetween: 20
        },
         // when window width is >= 640px
         640: {
            slidesPerView: 4.3,
            spaceBetween: 15
        },
        // when window width is >= 320px
        320: {
            slidesPerView: 3.2,
            spaceBetween: 10
          },
       
    }
}

export const ShowMovie = ({ movieData, titleName }) => {
    return (
            <Container>
                <Title>{titleName}</Title>
                <Swiper  {...params} >
                    {movieData.map((data) => (
                        <SwiperSlide>
                            <Link to={`/detail/${data.id}`}>
                                <CoverBg $bgUrl={data.poster_path} />
                                <MovieTitle>{data.title}</MovieTitle>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>             
        </Container>
    )
};