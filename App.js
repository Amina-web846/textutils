import { useState } from 'react';
import './App.css';
//import About from './Component/About';
import Navbar from './Component/Navbar';
import Textform from './Component/Textform';
import Alert from './Component/Alert';
/*import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";*/
function App() {
  const [mode , setmode] = useState('light');
  const [alert , setalert] = useState('null');
  const showAlert = (Message, Type)=> {
    setalert({
      msg: Message,
      type: Type 
    })
  }
    setTimeout(()=> {
     setalert(null);  
    }, 2000 );


  function toggleMode() {
      if (mode === 'light') {
        setmode('dark');
        showAlert("Dark mode has been enabled", "success");
      }
      else {
        setmode('light');
        showAlert("Light mode has been enabled", "success");
      }
    }

  return (
    
    <>
    <Navbar title ="Textutils" aboutText ="About Us" mode = {mode} toggleMode = {toggleMode}/>
    <div className="container my-3"> 
    <Alert alert  ={alert}/>
    </div >
  <div className="container my-3"></div>
  <Textform showAlert ={showAlert}  heading ="Enter the texts to analyze" />
  </>
  );
}
export default App;
  //</div >
 /* {  <BrowserRouter> 
  <Routes>
            <Route exact path="/" element={<Textform showAlert ={showAlert}  heading ="Enter the texts to analyze" />} />
        <Route exact path="about/*" element={<About />} />
        </Routes>
        </div >
        </BrowserRouter>}*/
    