import React , {useState} from 'react'
import About from "./About"






function Abc() {

const [click , setClick]=useState("");



   const clickbtn = ()=>{
    setClick("clicked");
   }



  return (
    <div>
      <button onClick={clickbtn}>Button</button>
      <About xyz={click}/>
    </div>
  )
}

export default Abc
