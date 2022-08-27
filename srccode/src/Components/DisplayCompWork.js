import React from 'react'
import { useGlobalContext } from '../flow';
function DisplayCompWork() {
    const {removeWork,UpdateWork,CompWork}=useGlobalContext();
  return (
    <>
        {(CompWork)?CompWork.map((tsk)=>{
                const {task}=tsk;
                return(
                    <div className='Work'>
                        <div onClick={()=>UpdateWork({"task":task},"uncheck")} className="unCheck"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="12"><path fill="none" stroke="#FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6"/></svg></div>
                        <p className='comptask'>{task}</p>
                        <div onClick={()=>removeWork(task,"uncheck")} className='delete'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>
                        </div>

                    </div>
                )
            }):<></>}
    </>
  )
}

export default DisplayCompWork