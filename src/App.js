import './App.css';
import Home from './Pages/Home'      
import { RiReactjsFill } from "react-icons/ri";                       // import statements      ./    <-- same folder   ../    <---- Getting of the same folder 


function App() {
  
  return (
  //      Wraping Element in one empty tag 
   <>          
   <div className='react-logo'>     
        
    < RiReactjsFill className='r-logo'/><h5>React.Js</h5>
    </div>
    <Home/>                                                               
    </>
  );
}

export default App;
