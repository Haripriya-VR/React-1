import { createContext,useContext, useState } from "react";

const CountContext= createContext()
export const useCounter = useContext(CountContext)

export const CounterProvider = ({children})=>{
    const [count,setCount] = useState(0)

   const increment =()=>{
    setCount(count+1)
   }

   return (
    <CountContext.Provider >
        {children}
    </CountContext.Provider>
   )
}

