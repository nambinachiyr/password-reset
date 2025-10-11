import { createContext, useContext, useState } from "react";

export const GlobelContext = createContext()

export const GlobelProvider = ({children})=>{
    const [email,setEmail] = useState('')

    return(
        <GlobelContext.Provider value={{setEmail,email}}>
            {children}
        </GlobelContext.Provider>
    )
}

export const Globel = ()=>useContext(GlobelContext)