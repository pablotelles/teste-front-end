import React from 'react'
import style from './style.module.scss'
import PropTypes from 'prop-types'

export const SlideControl = ({ setSlide, slide, number }) => {
  const itemsSlide = []
  function handlerSlideChange (position) {
    setSlide(position)
  }
  for (let i = 1; i <= number; i++) {
    itemsSlide.push(<button
        className={slide === i
          ? style.slide__options__icon__Active
          : style.slide__options__icon }
            onClick={() => handlerSlideChange(i)}
        />)
  }
  return (
    <div className={style.slide__options}>
        {itemsSlide}
    </div>
  )
}
SlideControl.propTypes = {
  setSlide: PropTypes.func,
  slide: PropTypes.number,
  number: PropTypes.number
}
