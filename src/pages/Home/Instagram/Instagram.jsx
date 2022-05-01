import React from 'react'
import { SectionTitle } from '../../components/Titles/SectionsTitles/SectionTitles'
import style from './style.module.scss'
import img1 from '../../assets/instagram/instagram1.png'
import img2 from '../../assets/instagram/instagram2.png'
import img3 from '../../assets/instagram/instagram3.png'
import img4 from '../../assets/instagram/instagram4.png'
import img5 from '../../assets/instagram/instagram5.png'

export const Instagram = () => {
  return (
      <section className={style.container}>
            <SectionTitle title={'Instagram'} />
            <div>
                <img className={style.instagram__image} src={img1} alt="" />
                <img className={style.instagram__image} src={img2} alt="" />
                <img className={style.instagram__image} src={img3} alt="" />
                <img className={style.instagram__image} src={img4} alt="" />
                <img className={style.instagram__image} src={img5} alt="" />
            </div>
      </section>

  )
}
