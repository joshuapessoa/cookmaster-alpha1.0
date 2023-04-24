
import './Header.css';


import {Link} from "react-router-dom";


function Header(){
  return(
    <header> 
      <nav class="nav-header">
        <h1><Link to="/" className="link">CookMaster</Link></h1>
      <h1> <Link to="/Search" className="link"> Search </Link></h1>

        <h1><Link to="/Ingredients" className="link"> Ingredients </Link></h1>
        <h1><Link to="/Rec" className="link" > Recommendations </Link></h1>
        <h1><Link to="/Mystery" className="link">  Mystery </Link></h1>
        
        <h1><Link to="/Login" className="link">  Login </Link></h1>

      </nav>
    </header>
  )

}

export default Header;