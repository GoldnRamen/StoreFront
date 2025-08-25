import { useRouter } from "next/router";
import { createContext, useState } from "react";

export const HostContext = createContext()
export const HostProvider =({children})=>{
    // const [loggedCustomer, setLoggedCustomer] = useState("")
    // const loggedCustomer = JSON.parse(localStorage.getItem("loggedCustomer")).id
    const router = useRouter()
    const currentRoute = router.pathname
return(
    <HostContext.Provider value={{currentRoute}}>
        {children}
    </HostContext.Provider>
)
}