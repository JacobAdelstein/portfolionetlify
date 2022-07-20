import React, { Component } from 'react'
import axios from 'axios';
import './Posts.css';

export class Posts extends Component {
   state = {
       posts: [],
       isLoaded: false
   }
 componentDidMount () {
   axios.get('http://localhost:8888/wordpress/wp-json/wp/v2/posts')
       .then(res => this.setState({
           posts: res.data,
           isLoaded: true
       }))
       .catch(err => console.log(err))
     
   }
   render() {
      console.log(this.state);
      
      const {posts, isLoaded} = this.state;
      
       return (
           <div class = "parent">
        <h1 id = "blogtitle"> Blog Updates</h1>
           <div class = "Poststitle">
             
              {
             
              posts.slice(0,5).map(posts =>

               <div class = "container">
                  
               <h4> <u> <div class = "contained">{posts.title.rendered}  </div> </u> <div class = "containedcontent"> {posts.content.rendered} </div>  <div class ="readmore" >Read More</div></h4> 
                   
               </div>)}
               
               </div>
        </div>
       )
   }
}
export default Posts