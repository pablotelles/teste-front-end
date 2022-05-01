import React, { useState } from 'react'
import style from './style.module.scss'
import { SectionTitle } from '../../Titles/SectionsTitles/SectionTitles'
import { Post } from '../Post/Post'
import { BsChevronLeft as LeftArrow, BsChevronRight as RigthArrow } from 'react-icons/bs'
import { SlideControl } from '../../SlideControl/SlideControl'

export const Blog = () => {
  const [slide, setSlide] = useState(1)
  return (
        <section className={style.blog__container}>
            <SectionTitle title="Confira o nosso Blog" />
            <LeftArrow className={style.leftArrow} />
            <RigthArrow className={style.rigthArrow} />
            <Post />
            <SlideControl slide={slide} setSlide={setSlide} number={1} />
        </section>
  )
}
