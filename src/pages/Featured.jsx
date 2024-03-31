import React from 'react'
import Slider from '../components/Slider'
import Billboard from './Billboard'
import ReviewForm from '../components/ReviewForm'

const Featured = () => {
  return (
    <div className=" h-full">
      <Slider />
      <Billboard />
      <ReviewForm />
    </div>
  )
}

export default Featured