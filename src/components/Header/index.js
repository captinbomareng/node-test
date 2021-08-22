import React from 'react'
import  Menu  from '../menu';
import './styles.css';

function Header() {
    return (
        <div className="header-wrap">
        <p className="brand-description">my protfolio website design</p>
        <Menu />
      </div>
    )
}

export default Header
