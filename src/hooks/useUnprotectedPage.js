import { useHistory } from 'react-router-dom'
import { useEffect } from 'react'

const useUnprotectedPage = () => {
    const history = useHistory()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            history.push('/feed')
        }
    })
}

export default useUnprotectedPage