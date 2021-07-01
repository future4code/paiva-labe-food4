import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../constants/urls'

const useRequestData = (initialData, BASE_URL) => {
  const [data, setData] = useState(initialData)

  useEffect(() => {
    axios.get(`${BASE_URL}/restaurants` , {
      headers: {
        auth: window.localStorage.getItem('token')
      }
    })
      .then((response) => {
        console.log(response.data.message)
        setData(response.data)
      })
      .catch((error) => {
        console.log(error.response.data)
        alert('Ocorreu um erro, tente novamente')
      })
  }, [BASE_URL])

  return (data)
}

export default useRequestData