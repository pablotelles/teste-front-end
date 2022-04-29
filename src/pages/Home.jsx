import React from 'react'
import { Brands } from '../components/Brands/Brands'
import { Categories } from '../components/Categories/Categories'
import { Header } from '../components/Header/Header/Header'
import { MainBanner } from '../components/MainBanner/MainBanner'
import { Partners } from '../components/Partners/Partners'
import { Products } from '../components/Products/Products/Products'

export const Home = () => {
  return (
    <>
        <Header />
        <div>
            <MainBanner />
            <Categories />
            <Products />
            <Brands />
            <Partners />
        </div>
    </>
  )
}
