export const BASE_URL = "https://us-central1-missao-newton.cloudfunctions.net/rappi4B"

export const axiosConfig = {
    headers: {
        auth: localStorage.getItem('token')
    }
}