export const requestAuthentication = properties => {
    return {
        type: "REQUEST_AUTH",
        payload: { properties }
    }
}
