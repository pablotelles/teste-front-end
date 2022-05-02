import React from 'react'
import { CNPJ } from '../CNPJ/CNPJ'
import { Infos } from '../Infos/Infos'
import { Payments } from '../Payments/Payments'
import { SocialMedia } from '../SocialMedia/SocialMedia'
import style from './style.module.scss'

export const Footer = () => {
  return (
        <footer className={style.footer__container}>
          <div className={style.social__media}>
            <SocialMedia />
          </div>
          <div className={style.social__info} >
            <Infos />
          </div>
          <div className={style.social__payment} >
            <Payments />
          </div>
          <div className={style.CNPJ} >
            <CNPJ />
          </div>
        </footer>
  )
}
