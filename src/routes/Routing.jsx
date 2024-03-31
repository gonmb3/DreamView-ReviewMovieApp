import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Featured from '../pages/Featured'
import Billboard from '../pages/Billboard'
import ReviewForm from '../components/ReviewForm'
import Tickets from '../pages/Tickets'

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<Featured />} />
        <Route path='/cartelera' element={<Billboard />} />
        <Route path='/reseñas' element={<ReviewForm />} />
        <Route path='/tickets' element={<Tickets />} />
    </Routes>
  )
}

export default Routing