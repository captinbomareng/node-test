  
import React, { useState } from "react";
import './styles.css';

function MenuButton({isNavOpenHandeler,isNavOpen}) {

    const [isOpen,setIsOpen] = useState(false);

    const clickHandler =()=>{
      setIsOpen(!isOpen);
      console.log(isOpen);
      isNavOpenHandeler(!isNavOpen);
    }

    return (
        <div className="menu-button-wrap" onClick= {clickHandler}>
        <button className="menu-button"  >
          <span className={isOpen ? 'open':'close'}/>
        </button>
      </div>
    )
}

export default MenuButton
