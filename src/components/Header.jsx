import { Link } from "react-router-dom";

export default function Header() {
    const user = false;
    return (
        <>
        <div className='header'>
            <div className="headerTitles">
                <span className="headerTitlesSm">EASYLEARNING</span>
            </div>
        </div>

        <div className="top">
            <div className="topLeft">
            <i className="topIcon fab fa-facebook-square"></i>
            <i className="topIcon fab fa-twitter-square"></i>
            <i className="topIcon fab fa-instagram-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem"><i class="fas fa-home"></i>
                    <Link className= "link" to="/" >HOME</Link>
                    </li>
                    <li className="topListItem"><Link className= "link" to="/usuario" >USUARIO</Link></li>
                    <li className="topListItem"><Link className= "link" to="/estudiantes" >ESTUDIANTE</Link></li>
                    <li className="topListItem"><Link className= "link" to="/lideres" >LIDER</Link></li>
                    <li className="topListItem"><Link className= "link" to="/admon" >ADMINISTRADOR</Link></li>
                </ul>
            </div>
            <div className="topRight">
                { user ? (
                        <img 
                className = "topImg" alt="3"
                src="https://www.thelab.sg/wordpress/wp-content/uploads/illustration3-2000x1018-1.jpg"/>
                ):(
                    <ul className="topList">
                        <li className="topListItem">
                            <Link className="link" to="/login">LOGIN</Link>
                        </li>
                        <li className="topListItem">
                            <Link className="link" to="/register">REGISTER</Link>
                        </li>
                    </ul>
                )
                }
                    
                
                
                <ul className="topList">
                    <li className="topListItem">{
                        user && "SALIR"
                    }
                    </li>
                </ul>
                
            </div>
        </div>
        </>
    )
}
