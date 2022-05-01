import React from 'react'
import style from './style.module.scss'
import { MainButton } from '../../Buttons/MainButton/MianButton'

export const PartnersBoxRigth = () => {
  return (
    <div className={style.partners__rigth}>
        <h3>Assinatura Cãoselheiro</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor adipiscing quis non sed.</p>
        <MainButton text={'Saiba mais'} />
    </div>
  )
}
