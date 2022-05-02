import React from 'react'
import style from './style.module.scss'

export const MenuProducts = () => {
  return (
        <ul className={style.menu__list}>
            <li>
                <button autoFocus>É agitado</button>
            </li>
            <li>
                <button>Morde</button>
            </li>
            <li>
                <button>Late muito</button>
            </li>
            <li>
                <button>É ansioso</button>
            </li>
            <li>
                <button>É estressado</button>
            </li>
        </ul>
  )
}
