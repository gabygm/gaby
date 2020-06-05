import React from 'react'
import { BrowserRouter } from "react-router-dom"
import MenuSide from '../components/home/MenuSide'
import Router from '../router'

export default () => {
    return (
        <div>
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </div>
    )

}