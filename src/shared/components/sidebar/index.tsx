import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MdClose, MdOutlineWatchLater } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { FaListCheck, FaPeopleGroup, FaPowerOff } from "react-icons/fa6";
import { TfiGallery } from "react-icons/tfi";
import * as C from './styles';
import { SideBarContext } from '../../contexts/SideBarContext';
import { AuthContext } from '../../contexts/AuthContext';
const Sidebar: React.FC = () => {

  const { wrapperSideBar, isOpen } = useContext(SideBarContext)
  const { logout } = useContext(AuthContext)


  return (
    <C.Container active={isOpen.toString()}>
        <div className='sidebar'>
            
            <header className='header'>
                <h2 className='header__title'>BAGAGGIO</h2>
                <button className='header__button' onClick={wrapperSideBar}>
                    <MdClose size={30} color='white' />
                </button>
            </header>

            <aside className='aside'>
            <Link className='aside__link' to="/" onClick={wrapperSideBar}>
                <FaHome color='white' /> Home
            </Link>
            
            <Link className='aside__link' to="/todo" onClick={wrapperSideBar}>
                <FaListCheck /> ToDo
            </Link>

            <Link className='aside__link' to="/gallery" onClick={wrapperSideBar}>
                <TfiGallery />  <span>Gallery</span>
            </Link>

            <Link className='aside__link' to="/moveit" onClick={wrapperSideBar}>
                <MdOutlineWatchLater />  <span>MoveIt</span>
            </Link>

            <Link className='aside__link' to="/users" onClick={wrapperSideBar}>
                <FaPeopleGroup />  <span>Users</span>
            </Link>

            </aside>

            <footer className='footer'>
              <button className='footer__button' onClick={logout}><FaPowerOff color='white' size={30} /></button>
            </footer>

        </div>
        
        <div className='shadow' onClick={wrapperSideBar}></div>
    </C.Container>
  );
}

export default Sidebar;