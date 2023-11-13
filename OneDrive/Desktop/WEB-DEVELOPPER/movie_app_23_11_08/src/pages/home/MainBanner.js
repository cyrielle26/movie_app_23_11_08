import styled from "styled-components";
import { nowPlaying } from "../../api";
import { useEffect, useState  } from "react";

const SMainBanner = styled.div`
height: 80vh;
background-image: url(${(props) => props.bannerImage});
  background-position: center;
  background-repeat: no-repeat;
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
background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 39%, rgba(255,255,255,0) 95%);`;

export const MainBanner = () => {

    /* nowPlaying(); 
    console.log ___output____error ==== you need a promise 
    => use useEffect*/

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
   
    
    return     <>
    {loading ? (
      "loading..."
    ) : (
      <div>
        {nowPlayingData && (
          <SMainBanner bannerImage={nowPlayingData[0].poster_path}>
            <BlackBg />
           <h3>{nowPlayingData[0].title}</h3>
            <p>
            {nowPlayingData[0].overview}
                            </p>
                           

          </SMainBanner> 
        )}
      </div>
    )}
  </>
}