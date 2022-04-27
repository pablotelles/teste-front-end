import React, { useState } from 'react'
import style from './style.module.scss'
import { SectionTitle } from '../../Titles/SectionsTitles/SectionTitles'
import { BsChevronLeft as LeftArrow, BsChevronRight as RigthArrow } from 'react-icons/bs'
import { MenuProducts } from '../MenuProducts/MenuProducts'
import { Product } from '../Product/Product'
import { getProducts } from '../../../api/getProducts'

export const Products = () => {
  const [products, setProducts] = useState([])
  getProducts(setProducts)
  return (
        <main>
            <div className={style.product__container}>
                <div>
                    <SectionTitle title={'Meu cachorro...'} />
                </div>
                <div className={style.product__menu}>
                    <LeftArrow />
                    <MenuProducts />
                    <RigthArrow />
                </div>
            </div>
            <Product products={products}/>
        </main>
  )
}
