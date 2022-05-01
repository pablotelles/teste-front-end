import React from 'react'
import { PartnersBoxLeft } from './PartnersBoxLeft/PartnersBoxLeft'
import { PartnersBoxRigth } from './PartnersBoxRigth/PartnersBoxRigth'
import dog from '../../assets/img/partners2.png'
import style from './style.module.scss'

export const Partners = () => {
  return (
        <section className={style.partners__container}>
            <img className={style.dog__background} src={dog} alt="" />
            <PartnersBoxLeft />
            <PartnersBoxRigth />
        </section>
  )
}
