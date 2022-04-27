import React from 'react'
import { Categories } from '../components/Categories/Categories'
import { Header } from '../components/Header/Header/Header'
import { MainBanner } from '../components/MainBanner/MainBanner'
import { Products } from '../components/Products/Products/Products'

export const Home = () => {
  return (
    <>
        <Header />
        <div>
            <MainBanner />
            <Categories />
            <Products />
        </div>
    </>
  )
}
