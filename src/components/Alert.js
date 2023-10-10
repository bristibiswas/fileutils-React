import React from 'react'

function Alert(props) {
console.log(props)
const capitalize = (word)=>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase()+lower.slice(1);
}
  return (
    props.alert && <div className={`alert alert-${props.alert.msg} alert-dismissible fade show`} role="alert">
   <strong>{capitalize(props.alert.msg)}</strong> : {props.alert.type}
  </div>
  )
}
export default Alert