import styled from "styled-components";

export const StyledMenuContainer = styled.div`
    position: absolute;
    top: 0;
    left: ${ ( { showMenu } ) => showMenu ? "0" : "-10vw" };
    height: 100%;
    background-color: #ccc;
    display: flex;
    flex-direction: row;
    transition: left 0.25s ease;
`;

export const StyledHideMenuButton = styled.button`
    background: none;
    border: none;
    transform: rotate( ${ ( { showMenu } ) => showMenu ? "180" : "0" }deg );
    transition: transform 0.25s ease;
`;

export const StyledMenu = styled.div`
    width: 10vw;
    display: flex;
    flex-direction: column;
`;

export const StyledMenuPanel = styled.div`
    & h3 {
        width: 100%;
        color: white;
        background-color: black;
    }
`;
