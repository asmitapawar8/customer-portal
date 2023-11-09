import React from "react";
import '../cards.css';

function Card1(props){  
    return(
    <div id="card" >  
   
        *
<img src={props.image} alt={props.title} id="img"/>   
{/* the object-fit property is typically applied to the img element itself, not an element with an id. */}
        <div className="card-content">
         <h3>{props.title}</h3>
        <p>{props.description}</p>
     
        </div>
    </div>
    
    );
    }
    export default Card1;
