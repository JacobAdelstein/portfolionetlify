import React from 'react';

import './About.css';


function About (){
    return(
   <section className="About">

<h1 id = "abtitle">About Me</h1>

<div class = "row">

    
<div class="side">

 
<p id ="about1">Born and raised in Balitimore, MD. </p>
<p id ="about2">Outside of software engineering, my hobbies are fitness and spending time outdoors (camping, hiking, fishing, etc).
</p>
<p id ="about3">I am a student at Towson University, finishing up my bachelors degree in Computer Science </p>
<p id ="about4">I built my first PC at age 12 and have had an interest in technology ever since! </p>

</div>


<div class="side2">

 <img src="./icons/locationicon.png" alt="" class="locationicon"/>
<img src="./icons/tenticon.png" alt="" class="tenticon"/>
<img src="./icons/schoolicon.png" alt="" class="schoolicon"/> 
<img src="./icons/computericon.png" alt="" class="computericon"/>

</div>



</div>

<img src="./icons/me.png" alt="" class="me"/>


</section>
    )

}

export default About;

