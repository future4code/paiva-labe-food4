import { useState } from "react";
import axios from "axios";

const useRequestData = (initialState, url) => {
  const [data, setData] = useState(initialState);
  const token = localStorage.getItem('token')

  const getData = () => {
    axios
      .get(url, {
        headers: {
          auth: token
        }
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        alert('Erro. Tente de novo')
      })
  }
  return [data, getData]
};

export default useRequestData;
