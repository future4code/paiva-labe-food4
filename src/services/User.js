import axios from "axios"
import { BASE_URL } from "../constants/urls"
import { goToFeed, goToSignUpAdd } from '../Routes/coordinator'

export const login = (body, clear, history, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}/login`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            setIsLoading(false)
            goToFeed(history)
        })
        .catch((err) => {
            setIsLoading(false)
            alert(err.response.data.message)
        })
}

export const signup = (body, clear, history) => {
    axios.post(`${BASE_URL}/signup`, body)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        clear()
        goToSignUpAdd(history)
    })
    .catch((err) => {
        alert(err.response.data.message)
    })
}