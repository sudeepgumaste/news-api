import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HomePage from '../components/pages/home'
import SearchPage from '../components/pages/search'

import Container from '../components/layouts/container'

const Pages:React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Container />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Pages