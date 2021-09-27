import { StyledModalContent, StyledModalDimmer, StyledModalTitle } from "./modalStyles"

export default function Modal( props ) {

    return (
        <>
            <StyledModalContent>
                <StyledModalTitle>Modal</StyledModalTitle>
            </StyledModalContent>
            <StyledModalDimmer></StyledModalDimmer>
        </>
    );

}
