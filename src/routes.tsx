import { useContext } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { AppContext } from "./components/AppContext"
import Conta from "./pages/Conta"
import ContaInfo from "./pages/ContaInfo"
import Home from "./pages/Home"

const MainRoutes = () => {
    const { isLoggedIn, user } = useContext(AppContext)

    return (
        <Routes>
            {
                !isLoggedIn ?
                    <Route path='/' element={<Home />} />
                    :
                    <Route path="/" element={<Navigate to={`/conta/${user?.id}`} />} />
            }

            <Route path='/conta/:id' element={isLoggedIn ? <Conta /> : <Home />} />

            {
                isLoggedIn ?
                    <Route path='/infoconta' element={<ContaInfo />} />
                    :
                    <Route path="/infoconta" element={<Navigate to={`/`} />} />
            }
        </Routes>
    )
}

export default MainRoutes
