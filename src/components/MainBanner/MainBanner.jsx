import React, { useEffect, useState } from 'react'
import style from './style.module.scss'
import bannerImage1 from '../../assets/img/bannerimage1.png'
import bannerImage2 from '../../assets/img/bannerimage2.jpg'
import { BsChevronLeft as LeftArrow, BsChevronRight as RigthArrow } from 'react-icons/bs'
import { MainButton } from '../Buttons/MainButton/MianButton'
import { SlideControl } from '../SlideControl/SlideControl'

export const MainBanner = () => {
  const [scrolX, setScrollX] = useState(1)
  const [slide, setSlide] = useState(1)

  useEffect(() => {
    setScrollX(slide)
  }, [slide])

  useEffect(() => {
    setTimeout(() => {
      if (slide < 2) {
        setSlide(slide + 1)
      } else {
        setSlide(1)
      }
    }, 3000)
  })

  const handleRigthArrow = () => {
    let x = scrolX + 1
    if (x > 2) {
      x = 2
    }
    setScrollX(x)
    setSlide(x)
  }
  const handleLeftArrow = () => {
    let x = scrolX - 1
    if (x < 1) {
      x = 1
    }
    setScrollX(x)
    setSlide(x)
  }
  return (
    <>
        <section className={style.mainBaner__container}>
            <img style={scrolX === 1 ? { display: 'block' } : { display: 'none' }} src={bannerImage1} alt="" />
            <img style={scrolX === 2 ? { display: 'block' } : { display: 'none' }} src={bannerImage2} alt="" />
            <div className={style.mainBanner__content}>
                <LeftArrow onClick={handleLeftArrow} className={style.arrow__left} />
                <div className={style.mainBanner__title}>
                    <h1>As melhores guias para os melhores passeios.</h1>
                    <MainButton text={'confira'} />
                </div>
                <RigthArrow onClick={handleRigthArrow} className={style.arrow__rigth}>{'>'}</RigthArrow>
            </div>
        </section>
        <SlideControl slide={slide} setSlide={setSlide} number={2} />
    </>
  )
}
