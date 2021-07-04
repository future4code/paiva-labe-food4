import { useState } from 'react'

const useForm = (initialState) => {
    const [form, setForm] = useState(initialState)

    const onChange = (event) => {
        const { value, name } = event.target
        setForm({ ...form, [name]: value })
    }
    const clear = () => {
        setForm('')
    }
    return [form, setForm, onChange, clear]
}
export default useForm;