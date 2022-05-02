import React from 'react'
import style from './style.module.scss'
import endlogos from '../../../assets/payments/endlogos.png'

export const CNPJ = () => {
  return (
        <section className={style.section__CNPJ__container}>
           <p>O Cãoselheiro Comércio LTDA<br/>
                CNPJ: 30.324.633/0001-16<br/>
                © Todos os direitos reservados. 2021
            </p>
            <figure>
                <img src={endlogos} alt="" />
            </figure>

        </section>
  )
}
