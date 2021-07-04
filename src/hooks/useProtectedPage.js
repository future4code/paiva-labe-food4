import { useHistory } from 'react-router-dom'
import { useEffect } from 'react'

const useProtectedPage = () => {
    const history = useHistory()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) {
            history.push('/login')
        }
    })
}

export default useProtectedPage