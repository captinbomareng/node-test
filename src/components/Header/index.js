import React from 'react'
import MenuButton from './menuButton';
import  menuButton  from './menuButton';
import Navigation from './navigation';
import './styles.css';

function Header({isNavOpenHandeler, isNavOpen}) {
    return (
        <div className="header-wrap">
        <MenuButton isNavOpenHandeler ={isNavOpenHandeler} isNavOpen={isNavOpen}/>
        {isNavOpen&&<Navigation />}
      </div>
    )
}

export default Header
