import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import { Outlet } from 'react-router-dom'
import Topbar from '../common/Topbar'


const LayOut = () => {
    return (
        <>
            <Topbar />
            <Header />
            <main>

                <Outlet />
            </main>

            <Footer />
        </>
    )
}

export default LayOut