/////////// nomb


export function validateEmail(input) {
    const validEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/

    if (validEmail.test(input) === false) {
        return false
    }
    return true
}
export function validatePassword(input) {
    const validPassword = /^.{4,12}$/ // 4 a 12 digitos.

    if (validPassword.test(input) === false) {
        return false
    }
    return true
}

