import { login } from "./login"

describe('login', () => {

    const mockEmail = 'alex@dio.bank'
    const mockSenha = '123456'
    it('Deve exibir um alert com boas vindas caso o email e senha sejam válidos', async() => {
        const response = await login(mockEmail, mockSenha);
        expect(response).toBeTruthy()
    })

    it('Deve exibir um erro caso o email seja inválido', async() => {
        const response = await login('email@invalido.com','senhaInvalida')
        expect(response).toBeFalsy()
    })
    it('Deve exibir um erro caso o email seja válido e senha incorreta', async() => {
        const response = await login(mockEmail,'senhaInvalida')
        expect(response).toBeFalsy()
    })
    it('Deve exibir um erro caso o email seja inválido e senha incorreta', async() => {
        const response = await login('email@invalido.com',mockSenha)
        expect(response).toBeFalsy()
    })
})