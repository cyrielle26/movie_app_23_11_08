import styled from "styled-components";
import { nowPlaying } from "../../api";


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

    /* nowPlaying();  error ==== you need a promise*/
    
    return <div>
        <MainBanner>
            <BlackBg /> 
            <h3>Studio PN</h3>
            <p>first movie</p>
        </MainBanner>
    </div>
}