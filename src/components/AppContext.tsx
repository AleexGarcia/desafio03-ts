import { createContext, useEffect, useState } from "react"
import { getAllLocalStorage } from "../services/storage"

interface IAppContext {
    user: null | UserData,
    setUser: (user: UserData | null) => void,
    isLoggedIn: boolean,
    setIsLoggedIn: (isLoggedIn: boolean) => void
}

interface UserData {
  email: string
  password: string
  name: string
  balance: number
  id: string
}

export const AppContext = createContext({} as IAppContext)
  
export const AppContextProvider = ({ children }: any) => {
    const [ isLoggedIn, setIsLoggedIn ] = useState<boolean>(false)
    const [ user, setUser ] = useState <null | UserData>(null)

    const storage = getAllLocalStorage()

    useEffect(() => {
      if(storage){
        const {login, user} = JSON.parse(storage);

        setIsLoggedIn(login)
        setUser(JSON.parse(user));
      }
    }, [])

    return (
      <AppContext.Provider value={{ user, isLoggedIn, setIsLoggedIn, setUser }}>
        { children }
      </AppContext.Provider>
    )
}
