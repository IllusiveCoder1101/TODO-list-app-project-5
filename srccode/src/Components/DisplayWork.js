import React from 'react'
import DisplayCompWork from './DisplayCompWork';
import DisplayIncompWork from './DisplayIncompWork';
import { useGlobalContext } from '../flow'
function DisplayWork() {
    const {setCompWork,work,filter}=useGlobalContext();
    return (
        <div className='display-Work'>
            {Display(filter)}
            {<div className='footer'>
                <p className='status'>{`${work.length} ${(work.length>1)?"items":"item"} left`}</p>
                <button onClick={()=>setCompWork([])} className="clear">Clear Completed</button>
            </div>}
        </div>
    )
}
const Display=(value)=>{
    if(value==="All"){
        return (
            <>
                <DisplayIncompWork/>
                <DisplayCompWork/>
                
            </>
        )
    }
    else if(value==="Active"){
        return (
            <DisplayIncompWork/>
        )
    }
    else if(value==="Completed"){
        return (
           <DisplayCompWork/> 
        )
    }
}
export default DisplayWork