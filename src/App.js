
import './App.css';
import Navbar from './components/Navbar';
 import Form from './components/Form';
 import About from './components/About';
// import Abc from './components/Abc';
import React ,{useState} from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Select from './components/Select';







function App() {

  const [mode, setMode] = useState("light");
   const [red, setRed] = useState("danger");
  // const [blue, setBlue] = useState("primary");
  // const [green, setGreen] = useState("Success");
  const [Text , setText] = useState("Enable Dark Mode");
  const [TextR , setTextR] = useState("Enable Red Mode");
  const [alert , setAlert] = useState(null);



  const showAlert= (message , type)=>
  {
      setAlert({
        msg : message ,
        type : type
      })
     setTimeout(() => {
      setAlert(null)
     }, 1500);
  }
  

  const clickedMode =() =>{
    if(mode ==="light"){
    setMode ("dark")
    setText("Enable Light mode")
    document.body.style.backgroundColor = "#4d4c51f2"
    showAlert("success" , "dark Mode has been enabled")

  }
  else {
    setMode ("light")
    setText("Enable Dark mode")
     document.body.style.backgroundColor = "white"
     showAlert("success" , "Light Mode has been enabled")
   
  }
}
const clickedRed =() =>{
  if(mode !=="danger"){
  setMode ("danger")
  setTextR("Enable Red mode")
  document.body.style.backgroundColor = "#e22424"
  showAlert("success" , "Red Mode has been enabled")

}
else {
  setMode ("light")
  setTextR("Enable Dark mode")
   document.body.style.backgroundColor = "white"
   showAlert("success" , "Light Mode has been enabled")
 
}
}
const arr=["select","abc","xyz","pwq","nht","lkj","dfg"]

  return (
  <>
 <Router>

 
<Navbar title = "Fileutils" mode={mode} clickedMode={clickedMode} red ={red} clickedRed = {clickedRed} 
aboutText = "About" Text = {Text} TextR = {TextR}/>
<Alert  alert = {alert} />
 <div className="container my-3">
<Switch>
{/* s */}
<Route exact path = "/">
<Form showAlert = {showAlert} heading = "Enter your Text" mode={mode} clickedMode={clickedMode} />
</Route>
{/* </div>  */}



 <Route exact path = "/About"><About/>
 </Route>
 <Route exact path = "/Select"><Select array={arr}/>
 </Route>


</Switch>
</div>
{/* <Abc/> */}
{/* <Toggle/> */}


</Router>
  </>
  );
}

export default App;
