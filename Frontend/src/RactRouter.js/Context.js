import { createContext, useContext, useState } from "react";

const UseGlobal = createContext(null)
// export const useGlobal = useContext(UseGlobal)

export const useGlobal = () => useContext(UseGlobal);


export function Context(props) {
    const [isLoggedIn,setIsLoggedIn] = useState(false)

    console.log(props);
  return (
<UseGlobal.Provider value={
    {setIsLoggedIn,
    isLoggedIn}

}>
{props.children}
</UseGlobal.Provider>
  )
}
