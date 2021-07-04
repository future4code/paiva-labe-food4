import axios from "axios"
import { BASE_URL } from "../constants/urls"

export const getRestaurants = (setRestaurants) => {
    axios.get(`${BASE_URL}/restaurants`, {
        headers: {
            auth: localStorage.getItem('token')
        }
    })
        .then((response) => {
            setRestaurants(response.data.restaurants)
        })
        .catch((error) => {
            alert('Ocorreu um erro, tente novamente')
        })
}

export const getRestaurantsDetails = (setRestaurantDetail, id) => {
    axios.get(`${BASE_URL}/restaurants/${id}`, {
        headers: {
            auth: localStorage.getItem('token')
        }
    })
        .then((response) => {
            setRestaurantDetail(response.data.restaurant)
        })
        .catch((error) => {
            alert(error.message)
        })
}