interface IDIoBank {
    login: boolean,
    user: string | null
}

const dioBank = {
    login: false,
    user: null
}

export const getAllLocalStorage = (): string | null  => {
    return localStorage.getItem('diobank')
}

export const createLocalStorage = (): void => {
    localStorage.setItem('diobank', JSON.stringify(dioBank))
}

export const changeLocalStorage = (dioBank: IDIoBank): void => {
    localStorage.setItem('diobank', JSON.stringify(dioBank))
}
