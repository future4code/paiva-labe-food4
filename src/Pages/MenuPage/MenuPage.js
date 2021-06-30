import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'

const MenuPage = () => {
    useProtectedPage()

    return (
        <div>MenuPage</div>
    )
}

export default MenuPage
