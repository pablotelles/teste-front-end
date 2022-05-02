import React from 'react'
import style from './style.module.scss'
import allPayments from '../../../assets/payments/allPayments.png'
import letsencrypt from '../../../assets/payments/letsencrypt.png'

export const Payments = () => {
  return (
        <footer className={style.footer__payment__container}>
          <div>
            <h4>Formas de pagamento</h4>
            <img src={allPayments} alt="" />
          </div>
          <div>
            <h4>Segurança</h4>
            <img src={letsencrypt} alt="" />
          </div>
        </footer>
  )
}
