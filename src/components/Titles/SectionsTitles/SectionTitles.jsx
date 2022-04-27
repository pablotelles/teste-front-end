import React from 'react'
import style from './style.module.scss'
import PropTypes from 'prop-types'

export const SectionTitle = ({ title }) => {
  return <h1 className={style.section__title}>{title}</h1>
}
SectionTitle.propTypes = {
  title: PropTypes.node
}
