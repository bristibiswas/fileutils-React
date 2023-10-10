import React, { useState } from 'react'
import Form from './Form';

export default function Toggle() {

  const[Take , setTake] = useState
   ({backgroundColor : 'light' ,
    color : 'dark'});


const fullRed = ()=>
{
     if(Take.backgroundColor === 'light'){
        setTake({
            backgroundColor : 'primary',
            color : 'danger'

        })
     }
     else{
        setTake({
            backgroundColor : 'light' ,
            color : 'dark'
        })
     }
}

  return (
    <div>
      <button onClick={fullRed}>Textbox Change</button>
      <Form vip={Take} fullRed={fullRed}/>
    </div>
  )
}
