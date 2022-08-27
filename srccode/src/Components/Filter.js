import React from 'react'
import { useGlobalContext } from '../flow'
function Filter() {
    const {filter,UpdateFilter}=useGlobalContext()
  return (
    <div className='filter-buttons'>
        <button className={(filter==="All")?'btn1 active':"btn1"} onClick={()=>UpdateFilter("All")}>All</button>
        <button className={(filter==="Active")?'btn2 active':"btn2"} onClick={()=>UpdateFilter("Active")}>Active</button>
        <button className={(filter==="Completed")?'btn3 active':"btn3"} onClick={()=>UpdateFilter("Completed")}>Completed</button>
    </div>
  )
}

export default Filter