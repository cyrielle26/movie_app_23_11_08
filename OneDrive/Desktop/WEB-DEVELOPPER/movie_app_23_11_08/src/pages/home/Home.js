import styled from "styled-components";
import { nowPlaying } from "../../api";
import { useEffect } from "react";


const MainBanner = styled.div`
height: 80vh;
background-color:lightgray;
position: relative;
padding: 400px 5%;
h3{
position:relative;
font-size: 80px;
font-weight:700;
margin-bottom:30px;
letter-spacing: -3px;
line-height: 100px;
}
p{
position:relative;
font-weight:400;
margin-bottom:26px;
opacity: 0.8;
}
`;

const BlackBg = styled.div`
width:100%;
height: 100%;
position: absolute;
top:0;
left: 0;
background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 39%, rgba(255,255,255,0) 95%);
`;
export const Home = () => {

    /* nowPlaying();  error ==== you need a promise ---useEffect*/

    //1. mount ___ api request
    //2. asynchronized connection // need to use in const form== ----'  wait ----async // await ---- awaiting element '
    //3. handle expection case

   /*  useEffect(() => {
        const getMovie = async () => {
            const testing = await nowPlaying();
        }; getMovie
    }, []);   
    
    OR*/

    useEffect(() => {
        (async () => {
            
            try {
                const data =  await nowPlaying();
            } catch (error){
                console.log("error" + error);
            }
          
        })();
    }, []);

    return <div>
        <MainBanner>
            <BlackBg /> 
            <h3>Studio PN</h3>
            <p>first movie</p>
        </MainBanner>
    </div>
}