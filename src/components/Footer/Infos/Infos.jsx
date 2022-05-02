import React from 'react'
import style from './style.module.scss'
import phone from '../../../assets/icons/phoneIcon.png'

export const Infos = () => {
  return (
        <footer className={style.footer__info__container}>
          <div>
            <h4>Assinatura</h4>
            <h4>Parceiros</h4>
          </div>
          <div className={style.info__institutional}>
            <h4>Institucional</h4>
            <ul>
              <li>Quem somos</li>
              <li>Política de privacidade</li>
              <li>Política comercial</li>
              <li>Política de devolução</li>
              <li>Regras de frete</li>
            </ul>
          </div>
          <div>
            <h4>Atendimento</h4>
            <ul>
              <li>Fale conosco</li>
              <li className={style.info__phone}>
                <img src={phone} alt="" />
                (11) 97212-1314
              </li>
              <li>ocaoselheiro@ocaoselheiro.com.br</li>
              <li>Trabalhe conosco</li>
            </ul>
          </div>
        </footer>
  )
}
