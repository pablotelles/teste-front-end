import React from 'react'
import { HeaderMenu } from '../HeaderMenu/HeaderMenu'
import { HeaderPayment } from '../HeaderPayment/HeaderPayment'
import { HeaderSearch } from '../HeaderSearch/HeaderSearch'
import './style.module.scss'

export const Header = () => {
  return (
    <header>
        <HeaderPayment />
        <HeaderSearch />
        <HeaderMenu />
    </header>
  )
}
