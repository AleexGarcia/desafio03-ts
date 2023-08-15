import { Text, Box } from "@chakra-ui/react"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { AppContext } from "../components/AppContext"

const ContaInfo = () => {
    const { user } = useContext(AppContext);
   
    return (
        <Box
            backgroundColor="white"
            minHeight="120px"
            padding={8}
            borderRadius="25px">
            <Text fontSize='3xl' fontWeight='bold'>
                Informações da conta
            </Text>
            <Text>
                {`Email: ${user?.email}`}
            </Text>
            <Text>
                {`Nome: ${user?.name}`}
            </Text>
            <Text>
                {`Saldo: ${user?.balance}`}
            </Text>
            <Link to={'/conta/:id'}>Voltar para pagina da conta</Link>
        </Box>
    )
}

export default ContaInfo
