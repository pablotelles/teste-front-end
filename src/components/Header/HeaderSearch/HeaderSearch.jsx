import React from 'react'
import logo from '../../../assets/img/logosite.png'
import searchIcon from '../../../assets/icons/MagnifyingGlass.png'
import heartIcon from '../../../assets/icons/Heart.png'
import groupIcon from '../../../assets/icons/Group.png'
import cartIcon from '../../../assets/icons/ShoppingCart.png'
import userCircleIcon from '../../../assets/icons/UserCircle.png'
import style from './style.module.scss'

export const HeaderSearch = () => {
  return (
        <div className={style.headerSearch__container}>
            <img className={style.headerSearch__logo} src={logo} alt="Logo do site" />
            <div className={style.headerSearch__search}>
                <input type="text" placeholder='o que você está buscando?'/>
                <img src={searchIcon} alt="icone de busca" />
            </div>
            <div className={style.headerSearch__icons}>
                <img className={style.iconBox} src={groupIcon} alt="icones box" />
                <img className={style.icon} src={heartIcon} alt="icone favoritos" />
                <img className={style.icon} src={userCircleIcon} alt="icone user" />
                <img className={style.icon} src={cartIcon} alt="icone carrinho" />
            </div>
        </div>

  )
}
