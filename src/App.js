
import { Navi, } from './components/common'
import { Header, } from './components/common'
import { About, } from './components/common'
import { Skills, } from './components/common'
import { Footer, } from './components/common'
import { Posts, } from './components/common'
import { Singleblog, } from './components/common'
import {HashRouter, Routes, Route, BrowserRouter} from 'react-router-dom'
import Blog from './pages/Blog';


import './App.css';
function App() {
  return(
  
  <BrowserRouter basename = {process.env.PUBLIC_URL}>
  
  <Navi />
  <Routes>
    <Route path="/"  element= {
  <div className="App">
    
    

 
    <Header /> 
    <About />
    <Skills />
    <Posts />
    </div>
}/>

<Route path="blog"  element= {
  <div className="App">
    
    

    <Blog />
 

    </div>
}/>


<Route path="blog/:blogID"  element= {

    

 <Singleblog/>

   
}/>



  </Routes>
  
  
  <Footer/>
  </BrowserRouter>

    
    


  );
}




export default App;
