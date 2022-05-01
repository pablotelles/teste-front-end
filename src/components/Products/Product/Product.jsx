import React, { useEffect, useState } from 'react'
import heartIcon from '../../../assets/icons/Heart.png'
import PropTypes from 'prop-types'
import productImage from '../../../assets/img/productImage.png'
import style from './style.module.scss'
import { BsChevronLeft as LeftArrow, BsChevronRight as RigthArrow } from 'react-icons/bs'

export const Product = ({ products, setSlide, slide }) => {
  const [scrollX, setScrollX] = useState(0)
  const widthList = (products.length * 300) + (products.length * 20)

  // lidando com o scroll feito pelos circulos inferiores
  useEffect(() => {
    if (slide < 2) {
      handleArrowLeft()
    } else if (slide > 2) {
      handleArrowRigth()
    } else if (slide === 2) {
      setScrollX(-1000)
    }
  }, [slide])

  function handleArrowRigth () {
    let x = scrollX - Math.round(window.innerWidth / 2)
    if ((window.innerWidth - widthList) > x) {
      x = (window.innerWidth - widthList) + 112
      setScrollX(x)
      setSlide(3)
      return
    }
    setScrollX(x)
    setSlide((slide) => slide + 1)
  }
  function handleArrowLeft () {
    let x = scrollX + Math.round(window.innerWidth / 2)
    if (x > 0) {
      x = 0
      setScrollX(x)
      setSlide(1)
      return
    }
    setScrollX(x)
    setSlide((slide) => slide - 1)
  }
  return (
    <div className={style.products__container}>
        <LeftArrow onClick={handleArrowLeft} className={style.leftArrow} />
        <RigthArrow onClick={() => handleArrowRigth(setScrollX, setSlide, widthList)} className={style.rigthArrow} />
        <section className={style.products__list} style={{ marginLeft: scrollX, width: widthList }}>
            {products.map((item, index) => (
                <article className={style.products__item} key={item.index}>
                  <div className={style.products__icons}>
                    <p>40%OFF</p>
                    <figure>
                      <img src={heartIcon} alt="favoritar icone" />
                    </figure>
                  </div>
                  <img src={productImage} alt="" />
                  <h3 className={style.products__title}>
                    {item.productName.length < 20
                      ? item.productName.substring(0, 20)
                      : item.productName.substring(0, 20) + '...'}
                    </h3>
                  <span className={style.products__oldPrice}>De R$96,69</span>
                  <p className={style.products__price}>R${item.price}</p>
                  <p className={style.products__memberPrice}>R$85,69</p>
                  <button className={style.products__button}>Adicionar</button>
                </article>
            ))}
        </section>
      </div>
  )
}

Product.propTypes = {
  products: PropTypes.array,
  setSlide: PropTypes.func,
  slide: PropTypes.number
}
