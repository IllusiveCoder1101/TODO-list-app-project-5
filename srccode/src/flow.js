import React,{useState} from 'react'

const AppContext=React.createContext();

function AppProvider({children}) {
    const [work,setWork]=useState([]);
    const [CompWork,setCompWork]=useState([])
    const [filter,setFilter]=useState("All")
    const addWork=(value)=>{
      setWork([...work,value])
      localStorage.setItem("Active",[localStorage.getItem("Active"),value])
      console.log(localStorage.getItem("Active"))
    }
    const removeWork=(value,type)=>{
       if(type==="check"){
        setWork(work.filter((tsk)=>tsk.task!==value))
        localStorage.setItem("Active",work.filter((tsk)=>tsk.task!==value))
        console.log(localStorage.getItem("Active"))
       }
       else{
        setCompWork(CompWork.filter((tsk)=>tsk.task!==value))
        localStorage.setItem("Complete",CompWork.filter((tsk)=>tsk.task!==value))
        console.log(localStorage.getItem("Complete"))
      }
    }
    const UpdateWork=(value,type)=>{
      if(type==="check"){
        setWork(work.filter((tsk)=>tsk.task!==value.task))
        localStorage.setItem("Active",work.filter((tsk)=>tsk.task!==value.task))
        setCompWork([...CompWork,value])
        localStorage.setItem("Complete",[localStorage.getItem("Complete"),value])
      }
      else{
        setCompWork(CompWork.filter((tsk)=>tsk.task!==value.task))
        localStorage.setItem("Complete",CompWork.filter((tsk)=>tsk.task!==value.task))
        setWork([...work,value])
        localStorage.setItem("Active",[localStorage.getItem("Active"),value])
      }
    }
    const UpdateFilter=(value)=>{
      setFilter(value)
    }
    return(
      <AppContext.Provider value={{work,addWork,removeWork,UpdateWork,CompWork,setCompWork,filter,UpdateFilter}}>
          {children}
      </AppContext.Provider>
    )
}
export const useGlobalContext=()=>{
    return React.useContext(AppContext)
}

export {AppContext,AppProvider}