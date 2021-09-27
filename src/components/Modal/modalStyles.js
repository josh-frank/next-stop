import styled from "styled-components";

export const StyledModalDimmer = styled.div`
    z-index: 999;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba( 0, 0, 0, 0.5 );
`;

export const StyledModalTitle = styled.div`
    width: 100%;
    font-size: 18pt;
    font-style: italic;
    font-weight: bold;
`;

export const StyledModalContent = styled.div`
    z-index: 1000;
    width: 50vw;
    height: 40vh;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate( -50%, -50% );
    background-color: white;
    padding: 1%;
    box-shadow: 0.5rem 0.5rem 1rem black;
`;
