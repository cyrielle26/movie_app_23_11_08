import { useState } from "react";
import styled from "styled-components";

const Box = styled.div`
width:400px;
height:400px;
background-color:${(props) => props.$bg} `;

export const ChangeColor = () => {

    const [bgColor, setBgColor] = useState("teal");
    const [num, setNum] = useState(0);

    const onClickBox = () => {
        if (num === 0) {
            setBgColor("gold");
            setNum(num + 1);
        } else if(num === 1){
            setBgColor("teal");
            setNum(num - 1);
        }
    }

    return <div>
        <Box $bg={bgColor} onClick={onClickBox}></Box>
    </div>
}