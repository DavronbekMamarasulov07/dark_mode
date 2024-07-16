import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SinglePage from './singke_page/SinglePage'
import Home from './home/Home'

const RouterController = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/single_page:id" element={<SinglePage />} />
      </Routes>
    </div>
  )
}

export default RouterController
