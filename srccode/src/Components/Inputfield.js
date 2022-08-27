
import React, { useState } from 'react'
import { useGlobalContext } from '../flow';
function Inputfield() {
    const {addWork}=useGlobalContext()
    
    const [task,setTask]=useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(task){
          addWork({"task":task})
          setTask("")
         
        }
          

    }
  return (
    <div className='input'>
        <form onSubmit={handleSubmit}>
            
            <input type="text" name="" id="" placeholder='Create a new todo...' className='inputfield' value={task} onChange={(e)=>setTask(e.target.value)} maxLength={30}  />
            

        </form>
    </div>
  )
}

export default Inputfield