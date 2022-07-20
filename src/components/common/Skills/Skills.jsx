import React from 'react';
import './Skills.css';

function Skills(){
    return(
        <section className="Skills">
        <h1 id = "skilltitle">Some Tech I Use</h1>

        <img src="./skillpic/java.png" alt="" class="java"/>
        <img src="./skillpic/python.png" alt="" class="python"/>
        <img src="./skillpic/javascript.png" alt="" class="javascript"/>
        <img src="./skillpic/git.png" alt="" class="git"/>
        <img src="./skillpic/react.png" alt="" class="react"/>
        <img src="./skillpic/django.png" alt="" class="django"/>
        </section>
    )
}

export default Skills;
