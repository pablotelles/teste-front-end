import React, { useState } from 'react'
import style from './style.module.scss'
import { SectionTitle } from '../Titles/SectionsTitles/SectionTitles'
import categoryToys from '../../assets/categories/category-toys.png'
import categorySnacks from '../../assets/categories/category-snacks.png'
import categoryGuide from '../../assets/categories/category-guide.png'
import categoryHygiene from '../../assets/categories/category-hygiene.png'
import { BsChevronLeft as LeftArrow, BsChevronRight as RigthArrow } from 'react-icons/bs'

export const Categories = () => {
  const [scrolX, setScrollX] = useState(0)

  const handleRigthArrow = () => {
    let x = scrolX - 277
    const w = (277 * 4) + (20 * 4)
    if (window.innerWidth - w > x) {
      x = window.innerWidth - w - 120
    }
    setScrollX(x)
  }
  const handleLeftArrow = () => {
    let x = scrolX + 277
    if (x > 0) {
      x = 0
    }
    setScrollX(x)
  }

  return (
        <section className={style.categories__container}>
            <SectionTitle title={'Categorias'} />
            <div>
                <LeftArrow
                    className={style.left__arrow}
                    onClick={handleLeftArrow}
                />
            </div>
            <div>
                <RigthArrow
                    className={style.rigth__arrow}
                    onClick={handleRigthArrow}
                />
            </div>
            <div
                className={style.categories__list}
                style={{
                  marginLeft: scrolX
                }}
            >
                <article className={style.categories__item}>
                    <img src={categoryToys} alt="gategoria brinquedos" />
                    <p>Brinquedos</p>
                </article>
                <article className={style.categories__item}>
                    <img src={categorySnacks} alt="categoria petiscos" />
                    <p>Petiscos</p>
                </article>
                 <article className={style.categories__item}>
                    <img src={categoryGuide} alt="categoria guias" />
                    <p>Guias</p>
                </article >
                <article className={style.categories__item}>
                    <img src={categoryHygiene} alt="categoria higiene" />
                    <p>Higiene</p>
                </article>
            </div>
        </section>
  )
}
