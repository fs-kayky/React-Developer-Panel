import { useContext } from 'react';
import * as C from './styles';
import { SideBarContext } from '../../contexts/SideBarContext';
import { MdNavigateNext } from "react-icons/md";


const Header = () => {
    const { wrapperSideBar } = useContext(SideBarContext)


    return (
        <C.Container>
            <div><button className={'sideBar__button'} onClick={wrapperSideBar}><MdNavigateNext color='white' size={30} /></button></div>
        </C.Container>
    );
}

export default Header;