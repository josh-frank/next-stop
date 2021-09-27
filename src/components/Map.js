import { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

export default function Map() {

    const { height, width, mouseCoordinates, mouseDown } = useSelector( state => state.client );

    useEffect( () => {}, [] );

    return (
        <StyledMap
            width={ width }
            height={ height }
            viewbox={ `0 0 ${ height } ${ width }` }
        >
            { mouseDown && <circle cx={ mouseCoordinates.x } cy={ mouseCoordinates.y } r="5"></circle> }
        </StyledMap>
    );

}

const StyledMap = styled.svg`
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
`;