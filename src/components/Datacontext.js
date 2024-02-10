import { createContext, useState } from "react";

export const Datacontext = createContext();

const DataState = (props)=>{
    const [mode,setmode]=useState("light");
    const htmlElement = document.querySelector("html");
    const [alert,setalert]=useState(null);
    const showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    });
    }
    setTimeout(() => {
        setalert(null);
    }, 2000);
    const togglemode=()=>{
        if (mode==="light"){
            setmode("dark");
            htmlElement.setAttribute("data-bs-theme","dark");
            showalert("Dark mode has been enabled","success");
        }
        else{
          setmode("light");
          htmlElement.setAttribute("data-bs-theme","light");
          showalert("Light mode has been enabled","success");
        }
  }
    return (
        <Datacontext.Provider value={{mode,setmode,alert,setalert,showalert,togglemode}}>
            {props.children}
        </Datacontext.Provider>
    )

}

export default DataState