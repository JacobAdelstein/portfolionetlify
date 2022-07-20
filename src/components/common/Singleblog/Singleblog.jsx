import React from 'react';

import './Singleblog.css';

import {Link, useParams} from 'react-router-dom'



function Singleblog (){

return(

  
    <section className="singleblog">
 
  
       <h1> Single Blog </h1>
       <Link to="/" class = "back">back to home</Link>
        
    </section>
  
)

}

export default Singleblog;