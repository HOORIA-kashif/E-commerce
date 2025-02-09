import React from 'react'
import Banner from '../components/Banner'
import Highlights from '../components/Highlights'
import ExclusiveProducts from '../components/ExclusiveProducts'
import Map from '../pages/Map'
import Sale from '../pages/Sale'

const Homepage = () => {
  return (
    <div>
      <Banner />
      <Highlights />
      <ExclusiveProducts/>
      <Sale />
      <Map />
    </div>
  )
}

export default Homepage