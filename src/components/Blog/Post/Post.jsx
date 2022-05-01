import React from 'react'
import style from './style.module.scss'
import imgPost1 from '../../../assets/posts/post1.png'
import { MainButton } from '../../Buttons/MainButton/MianButton'

export const Post = () => {
  return (
        <section className={style.post__list}>
            <article className={style.post__item}>
                <img className={style.post__banner} src={imgPost1} alt="" />
                <div className={style.post__content}>
                    <h3 className={style.post__title}>Lorem ipsum dolor sit amet consectetur.</h3>
                    <p className={style.post__description}>Lorem ipsum dolor sit amet, consectetur elit adipiscing dignissim posuere vitae.</p>
                    <MainButton text={'Ler artigo'} />
                </div>
            </article>
            <article className={style.post__item}>
                <img className={style.post__banner} src={imgPost1} alt="" />
                <div className={style.post__content}>
                    <h3 className={style.post__title}>Lorem ipsum dolor sit amet consectetur.</h3>
                    <p className={style.post__description}>Lorem ipsum dolor sit amet, consectetur elit adipiscing dignissim posuere vitae.</p>
                    <MainButton text={'Ler artigo'} />
                </div>
            </article>
            <article className={style.post__item}>
                <img className={style.post__banner} src={imgPost1} alt="" />
                <div className={style.post__content}>
                    <h3 className={style.post__title}>Lorem ipsum dolor sit amet consectetur.</h3>
                    <p className={style.post__description}>Lorem ipsum dolor sit amet, consectetur elit adipiscing dignissim posuere vitae.</p>
                    <MainButton text={'Ler artigo'} />
                </div>
            </article>
            <article className={style.post__item}>
                <img className={style.post__banner} src={imgPost1} alt="" />
                <div className={style.post__content}>
                    <h3 className={style.post__title}>Lorem ipsum dolor sit amet consectetur.</h3>
                    <p className={style.post__description}>Lorem ipsum dolor sit amet, consectetur elit adipiscing dignissim posuere vitae.</p>
                    <MainButton text={'Ler artigo'} />
                </div>
            </article>
        </section>
  )
}
