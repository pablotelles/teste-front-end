import React from 'react'
import { PartnersBoxLeft } from './PartnersBoxLeft/PartnersBoxLeft'
import { PartnersBoxRigth } from './PartnersBoxRigth/PartnersBoxRigth'
import style from './style.module.scss'

export const Partners = () => {
  return (
        <section className={style.partners__container}>
            <PartnersBoxLeft />
            <PartnersBoxRigth />
        </section>
  )
}
