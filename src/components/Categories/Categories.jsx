import React from 'react'
import style from './style.module.scss'
import { SectionTitle } from '../Titles/SectionsTitles/SectionTitles'
import categoryToys from '../../assets/categories/category-toys.png'
import categorySnacks from '../../assets/categories/category-snacks.png'
import categoryGuide from '../../assets/categories/category-guide.png'
import categoryHygiene from '../../assets/categories/category-hygiene.png'
import { BsChevronLeft as LeftArrow, BsChevronRight as RigthArrow } from 'react-icons/bs'

export const Categories = () => {
  return (
        <section className={style.categories__container}>
            <SectionTitle title={'Categorias'} />
            <div className={style.categories__list}>
              <LeftArrow className={style.left__arrow} />
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
              <RigthArrow className={style.rigth__arrow} />
            </div>
        </section>
  )
}
