import { useEffect, useState } from 'react'
import axios from 'axios'

const useRequestData = (initialData, url) => {
  const [data, setData] = useState(initialData)

  useEffect(() => {
    axios.get(url , {
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
  }, [url])

  return (data)
}

export default useRequestData