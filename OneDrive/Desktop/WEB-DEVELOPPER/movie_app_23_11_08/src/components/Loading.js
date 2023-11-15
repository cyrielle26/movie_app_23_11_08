import { PropagateLoader } from "react-spinners";
import styled from "styled-components";

const Wrap = styled.div`
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
`;


const SLoading = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 100px;
width: 100%;
margin: 0 auto;
`;


export const Loading = () => {
    return (
    <Wrap>
    <SLoading>
        <PropagateLoader color="#f0f9f7" />
    </SLoading>
    </Wrap>)
}