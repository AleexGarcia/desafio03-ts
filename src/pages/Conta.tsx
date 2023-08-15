import { Center, SimpleGrid, Spinner } from "@chakra-ui/react"
import { useParams, useNavigate, Link } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { api } from "../api"
import CardInfo from "../components/CardInfo"
import { AppContext } from "../components/AppContext"
import { changeLocalStorage } from "../services/storage"

interface UserData {
    email: string
    password: string
    name: string
    balance: number
    id: string
}

const Conta = () => {
    const [ userData, setUserData ] = useState<null | UserData>()
    const navigate = useNavigate()
    
    const { isLoggedIn , setUser } = useContext(AppContext)
    const { id } = useParams();

    useEffect(() => {
        !isLoggedIn && navigate('/');
    })
    

    useEffect(() => {
        const getData = async () => {
            const data: any | UserData = await api
            setUserData(data);
            setUser(data);
            changeLocalStorage({ login: true, user: JSON.stringify(data)})
        }

        getData()
    }, [])

    const actualData = new Date()

    if(userData && id !== userData.id) {
        navigate('/')
    }
   
    return (
        <Center>
            <SimpleGrid columns={2} spacing={8} paddingTop={16}>
                {
                    userData === undefined || userData === null ?
                    (  
                        <Center>
                            <Spinner size='xl' color='white'/>
                        </Center>
                    ) : 
                    (
                        <>
                            <CardInfo mainContent={`Bem vinda ${userData?.name}`} content={`${actualData.getDay()} / ${actualData.getMonth()} / ${actualData.getFullYear()} ${actualData.getHours()}:${actualData.getMinutes()}`} />
                            <CardInfo mainContent='Saldo' content={`R$ ${userData.balance}`}/>
                            <Link to={'/infoconta'}>Mais info</Link>
                        </>
                    )
                }
            </SimpleGrid>    
        </Center>
    )
}

export default Conta
