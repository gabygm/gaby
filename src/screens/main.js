import React from 'react'
import { BrowserRouter } from "react-router-dom"
import Routes from '../router'

export default () => {
    return (
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    )
}