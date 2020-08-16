import Cookies from 'js-cookie'

const TOKEN = 'ACCESS_TOKEN';
const REFRESHTOKEN = 'REFRESHTOKEN';
const EXPIREDIN = "EXPIREDIN";

export const refreshToken = (newToken, refreshToken, expireIn) => {
    Cookies.set(TOKEN, newToken, { expires: expireIn / 86400 })
    Cookies.set(REFRESHTOKEN, refreshToken, { expires: expireIn / 86400 })
    Cookies.set(EXPIREDIN, expireIn, { expires: expireIn / 86400 })
    window.location.reload();
}

export const getToken = () => {
    return Cookies.get(TOKEN)
}
export const getRefreshToken = (newToken) => {
    Cookies.remove(TOKEN)
    return Cookies.get(REFRESHTOKEN)
}

export const isLoggedIn = () => {
    return !!getToken()
}
export const removeToken = () => {
    Cookies.remove(TOKEN)
}
export const logout = () => {
    Cookies.remove(TOKEN)
    Cookies.remove(REFRESHTOKEN)
    window.location.replace('/login')
}
