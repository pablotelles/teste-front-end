import React from 'react'
import style from './style.module.scss'
import creditCard from '../../../assets/icons/CreditCard.png'
import shildCheck from '../../../assets/icons/ShieldCheck.png'
import truck from '../../../assets/icons/Truck.png'

export const HeaderPayment = () => {
  return (
      <div className={style.header__payment}>
        <div className={style.headerPayment__item}>
            <img className={style.icons} src={shildCheck} alt="icone compra segura" />
            <p className={style.text__security}>compra</p>
        </div>
        <div className={style.headerPayment__item}>
            <img className={style.icons} src={truck} alt="icone entrega gratis" />
            <p className={style.text__delivery}>acima de R$200</p>
        </div>
        <div className={style.headerPayment__item}>
            <img className={style.icons} src={creditCard} alt="icone compra parcelada" />
            <p className={style.text__parcel}>suas compras</p>
        </div>
    </div>
  )
}
