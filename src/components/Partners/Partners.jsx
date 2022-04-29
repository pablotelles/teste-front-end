import React from 'react'
import { MainButton } from '../Buttons/MainButton/MianButton'
import style from './style.module.scss'

export const Partners = () => {
  return (
        <section className={style.partners__container}>
            <div className={style.bacgroundImage}>
            </div>
                <div className={style.partners__rigth}>
                    <h3>Parceiros</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur</p>
                    <MainButton text={'Confira'} />
                </div>
                <div className={style.partners__left}>
                    <h5>Assinatura Cãoselheiro</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor adipiscing quis non sed.</p>
                    <MainButton text={'Saiba mais'} />
                </div>

        </section>
  )
}
