import React from 'react'
import { Brands } from '../../components/Brands/Brands'
import { Categories } from '../../components/Categories/Categories'
import { Header } from '../../components/Header/Header/Header'
import { MainBanner } from '../../components/MainBanner/MainBanner'
import { Partners } from '../../components/Partners/Partners'
import { Products } from '../../components/Products/Products/Products'
import { Blog } from '../../components/Blog/Blog/Blog'
import { Instagram } from '../Instagram/Instagram'

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
            <Blog />
            <Instagram />
        </div>
    </>
  )
}
