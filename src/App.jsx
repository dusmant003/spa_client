import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import LayOut from './components/layOut/layOut'

const App = () => {
  return (
    <>
      <Routes>
        {/* Main User Layout */}
        <Route path="/" element={<LayOut />}>
          <Route index element={<Home />} />

        </Route>

        {/* Admin Panel Routes under AdminLayout */}
        {/* <Route path="/adminportal" element={<AdminLayout />}>
          <Route index element={<DashBoard />} />

       </Route> */}
      </Routes>
    </>
  )
}

export default App