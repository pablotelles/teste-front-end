import React, { useEffect, useState } from 'react'
import style from './style.module.scss'
import { SectionTitle } from '../../Titles/SectionsTitles/SectionTitles'
import { BsChevronLeft as LeftArrow, BsChevronRight as RigthArrow } from 'react-icons/bs'
import { MenuProducts } from '../MenuProducts/MenuProducts'
import { Product } from '../Product/Product'
import { getProducts } from '../../../api/getProducts'

export const Products = () => {
  const [products, setProducts] = useState([])

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
              <Product products={products}/>
        </main>
  )
}
