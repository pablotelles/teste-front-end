import React from 'react'
import style from './style.module.scss'
import { SectionTitle } from '../Titles/SectionsTitles/SectionTitles'
import brand1 from '../../assets/brands/brand1.png'
import brand2 from '../../assets/brands/brand2.png'
import brand3 from '../../assets/brands/brand3.png'
import { BsChevronLeft as LeftArrow, BsChevronRight as RigthArrow } from 'react-icons/bs'

export const Brands = () => {
  return (
        <section className={style.brands__container}>
            <SectionTitle title={'Principais marcas'} />
            <div>
                <LeftArrow
                    className={style.left__arrow}
                    onClick={console.log('esquerda')}
                />
            </div>
            <div>
                <RigthArrow
                    className={style.rigth__arrow}
                    onClick={console.log('direita')}
                />
            </div>
            <ul className={style.brands__list}>
                <li>
                    <figure>
                        <img src={brand1} alt="" />
                    </figure>
                </li>
                <li>
                    <figure>
                            <img src={brand2} alt="" />
                    </figure>
                </li>
                <li>
                    <figure>
                        <img src={brand3} alt="" />
                    </figure>
                </li>
                <li>
                    <figure>
                            <img src={brand1} alt="" />
                    </figure>
                </li>
                <li>
                    <figure>
                            <img src={brand2} alt="" />
                    </figure>
                </li>
                <li>
                    <figure>
                            <img src={brand3} alt="" />
                    </figure>
                </li>
            </ul>
        </section>
  )
}
