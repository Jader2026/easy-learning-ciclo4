import { FaBars } from "react-icons/fa";
import * as AiIcons from "react-icons/ai"
import { Link } from "react-router-dom";
import React, {useState} from "react";
import { SidebarData } from "./SidebarData";
import {IconContext} from "react-icons";


const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar =() => setSidebar(!sidebar);

    return(
        <IconContext.Provider value={{color: "red"}}>
            <nav className="navbar" >
                <ul>
                    <li>
                        <Link to="#" className="menu-bar"> 
                        <FaBars onClick={showSidebar} />
                        </Link>
                    </li>
                    <li style={{float:"right"}}><a class="active" href="#contacto">CONTACTO</a></li>
                    <li style={{float:"right"}}><a class="active" href="#acercade">ACERCA DE</a></li>
                </ul>
            </nav>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar} >
                    <li className='navbar-toggle'>
                        <Link to="#" className='menu-bars'>
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return(
                            <li key={index} className={item.cName}>
                                <Link to={item.path} >
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </IconContext.Provider>
    )
}

export default Navbar;