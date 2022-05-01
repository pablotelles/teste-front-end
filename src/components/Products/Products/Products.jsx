import React, { useEffect, useState } from 'react'
import style from './style.module.scss'
import { SectionTitle } from '../../Titles/SectionsTitles/SectionTitles'
import { BsChevronLeft as LeftArrow, BsChevronRight as RigthArrow } from 'react-icons/bs'
import { MenuProducts } from '../MenuProducts/MenuProducts'
import { Product } from '../Product/Product'
import { getProducts } from '../../../api/getProducts'
import { SlideControl } from '../../SlideControl/SlideControl'

export const Products = () => {
  const [products, setProducts] = useState([])
  const [slide, setSlide] = useState(1)

  useEffect(() => {
    getProducts(setProducts)
  }, [])

  return (
        <main>
            <div className={style.product__container}>
                <div>
                    <SectionTitle title={'Meu cachorro...'} />
                </div>
                <div className={style.product__menu}>
                    <LeftArrow className={style.arrow} />
                    <MenuProducts />
                    <RigthArrow className={style.arrow} />
                </div>
            </div>
              <Product products={products} setSlide={setSlide} slide={slide} />
              <p className={style.product__showAll}>Ver todos</p>
              <SlideControl setSlide={setSlide} slide={slide} number={products.length / 3} />
        </main>
  )
}
