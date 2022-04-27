import React from 'react'
import style from './style.module.scss'
import PropTypes from 'prop-types'

export const MainButton = ({ text }) => {
  return (
        <button className={style.main__button}>{text}</button>
  )
}

MainButton.propTypes = {
  text: PropTypes.node
}
