import React from 'react'
import style from './style.module.scss'
import bannerImage1 from '../../assets/img/bannerimage1.png'
import { BsChevronLeft as LeftArrow, BsChevronRight as RigthArrow } from 'react-icons/bs'
import { MainButton } from '../Buttons/MainButton/MianButton'

export const MainBanner = () => {
  return (
        <section className={style.mainBaner__container}>
            <img src={bannerImage1} alt="" />
            <div className={style.mainBanner__content}>
                <LeftArrow className={style.arrow__left} />
                <div>
                    <h1>As melhores guias para os melhores passeios.</h1>
                    <MainButton text={'confira'} />
                </div>
                <RigthArrow className={style.arrow__rigth}>{'>'}</RigthArrow>
            </div>
        </section>
  )
}
