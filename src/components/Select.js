import React from 'react'
import { useState } from 'react'

function Select(props) {

  const handleOnSelect=(elem)=>{
    console.log(elem)
  }  

const [names , setNames] = useState("")


const [array1 , setArray1] = useState(props.array)
const [array2 , setArray2] = useState(props.array)
const [names1 , setNames1] = useState("")
const [indexing , setindexing] = useState()
const [change , setchange] = useState(false)


const handleOnChange=(i)=>{

  let temp = []
  temp=array1
 
  let temp2=[]
  setArray2([])
  for(let j=0;j<temp.length;j++)
  {
       if(temp[j]!==i) 
       {
          temp2.push(temp[j])
       }
  }
  console.log(temp2)
  setArray2(temp2)
    // setArray2(array2.splice(i, 1))
}


  return (
    <div>
        <div className='row'>
  <div className='col-5'>
    {console.log(change)}
<select  value = {names} onChange={(e) => {setNames(e.target.value);setindexing(array1.indexOf(e.target.value));setchange(true);handleOnChange(e.target.value)}} >
{array1.map((elements) => {

return <option value={elements}>{elements}</option>})}
       
      </select>
      </div>

        <div className='col-5'>
      <select  value = {names1} onChange={(e) => setNames1(e.target.value)} >
{array2.map((elements) => {

return <option value={elements}>{elements}</option>})}
       
      </select>
      </div>

</div>
    </div>
  )
}

export default Select
