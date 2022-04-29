import React, { useState } from 'react'
import crowIcon from '../../../assets/icons/CrownSimple.png'
import style from './style.module.scss'
import { CgMenu } from 'react-icons/cg'

export const HeaderMenu = () => {
  const [mobileMenu, setMobileMenu] = useState(false)
  return (
        <>
          <CgMenu
            onClick={() => setMobileMenu(!mobileMenu)}/>
          <nav
            className={style.headerMenu}
            style={mobileMenu === true ? { display: 'block' } : { display: 'none' }}
          >
              <ul>
                  <li>Brincar</li>
                  <li>Morder</li>
                  <li>Comer</li>
                  <li>Passear</li>
                  <li>Casa e conforto</li>
                  <li>Educação</li>
                  <li>Conforto</li>
                  <li className={style.menuItem__icon}>
                    <img src={crowIcon} alt="icone menu destaque" />
                  Coleção de outono</li>
              </ul>
          </nav>
        </>
  )
}
