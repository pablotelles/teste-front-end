import React from 'react'
import crowIcon from '../../../assets/icons/CrownSimple.png'
import style from './style.module.scss'

export const HeaderMenu = () => {
  return (
        <nav className={style.headerMenu}>
            <ul>
                <li>Brincar</li>
                <li>Morder</li>
                <li>Comer</li>
                <li>Passear</li>
                <li>Casa e conforto</li>
                <li>Educação</li>
                <li>Conforto</li>
                <li className={style.menuItem__icon}><img src={crowIcon} alt="icone menu destaque" />Coleção de outono</li>
            </ul>
        </nav>
  )
}
