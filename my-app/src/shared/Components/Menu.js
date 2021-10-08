import React from "react";
import { Link } from "react-router-dom";
const Menu=({categories})=>{

  return(
    <div className="row">
  <div className="col-lg-12 col-md-12 col-sm-12">
    <nav>
      <div id="menu" className="collapse navbar-collapse">
  
        <ul>
        {categories.map((category)=>{
          return (
            <li className="menu-item"><Link to={`/category-${category._id}`}> {category.name}</Link></li>

          )
        })}
          
        </ul>
      </div>
    </nav>
  </div>
</div>

  )
}
export default Menu;