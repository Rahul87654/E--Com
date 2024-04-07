import React from 'react'
import Hero from '../Component/Hero/Hero'
import Popular from '../Component/Popular/Popular'
import Offers from '../Component/Offers/Offers'
import NewCollections from '../Component/New Collections/NewCollections'
import NewsLetter from '../Component/NewsLetter/NewsLetter'

const Shop = () => {
  return (
    <div>
   <Offers/>
   <Popular/>
   <Hero/>
   <NewCollections/>
   <NewsLetter/>
    </div>
  )
}

export default Shop
