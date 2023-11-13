import styled from "styled-components";
import { nowPlaying } from "../../api";
import { useEffect } from "react";
import { useState } from "react";


const MainBanner = styled.section`
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


     const [nowPlayingData, setNowPlayingData] = useState();
     const [loading, setLoading] = useState(true);
   

     useEffect(() => {
        (async () => {
          try {
            const { results } = await nowPlaying();
            setNowPlayingData(results);
            setLoading(false);
          } catch (error) {
            console.log("에러:" + error);
          }
        })();
      }, []);
    
      console.log(loading);
      console.log(nowPlayingData);
    
      return (
        <>
          {loading ? (
            "loading..."
          ) : (
            <div>
              {nowPlayingData && (
                <MainBanner>
                  <BlackBg />
                  <h3>{nowPlayingData[0].title}</h3>
                  <p>
                    80년대에 아이들이 실종되고 폐업한지 오래된 프레디의 피자가게
                    그곳의 야간 경비 알바를 하게 된 ‘마이크'는 캄캄한 어둠만이
                    존재하는 줄 알았던 피자가게에서 살아 움직이는 피자가게...
                  </p>
                </MainBanner>
              )}
            </div>
          )}
        </>
      );

};