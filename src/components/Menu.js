import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setShowMenu } from "../redux/displaySlice";

export default function Menu() {

    const dispatch = useDispatch();
    
    const { showMenu } = useSelector( state => state.display );

    return (
        <StyledMenuContainer showMenu={ showMenu }>
            <StyledMenu>Menu</StyledMenu>
            <button onClick={ () => dispatch( setShowMenu( !showMenu ) ) }>▶</button>
        </StyledMenuContainer>
    );

}

const StyledMenuContainer = styled.div`
    position: absolute;
    top: 0;
    left: ${ ( { showMenu } ) => showMenu ? "0" : "-10vw" };
    height: 100%;
    display: flex;
    flex-direction: row;
    transition: left 0.25s ease;

    & button {
        background: none;
        border: none;
        transform: rotate( ${ ( { showMenu } ) => showMenu ? "180" : "0" }deg );
        transition: transform 0.25s ease;
    }
`;

const StyledMenu = styled.div`
    width: 10vw;
    display: flex;
    flex-direction: column;
`;