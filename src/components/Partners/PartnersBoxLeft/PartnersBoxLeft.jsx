import React, { useState } from 'react'
import style from './style.module.scss'
import { MainButton } from '../../Buttons/MainButton/MianButton'
import { SlideControl } from '../../SlideControl/SlideControl'

export const PartnersBoxLeft = () => {
  const [slide, setSlide] = useState(1)

  return (
        <div className={style.partners__left}>
            <div className={style.partners__left__items}>
                <h3>Parceiros</h3>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
                <MainButton text={'Confira'} />
            </div>
            <SlideControl setSlide={setSlide} slide={slide} number={1} />
        </div>
  )
}
