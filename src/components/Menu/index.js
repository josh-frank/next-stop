import { useDispatch, useSelector } from "react-redux";
import { setShowMenu } from "../../redux/displaySlice";
import {
    StyledMenuContainer,
    StyledMenu,
    StyledHideMenuButton,
} from "./menuStyles";
import StationsPanel from "./StationsPanel";

export default function Menu() {

    const dispatch = useDispatch();
    
    const { showMenu } = useSelector( state => state.display );

    return (
        <StyledMenuContainer showMenu={ showMenu }>

            <StyledMenu>
                <StationsPanel />
            </StyledMenu>

            <StyledHideMenuButton showMenu={ showMenu } onClick={ () => dispatch( setShowMenu( !showMenu ) ) }>▶</StyledHideMenuButton>

        </StyledMenuContainer>
    );

}
