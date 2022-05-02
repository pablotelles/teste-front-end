import React from 'react'
import style from './style.module.scss'
import PropTypes from 'prop-types'

export const SectionTitle = ({ title }) => {
  return <h2 className={style.section__title}>{title}</h2>
}
SectionTitle.propTypes = {
  title: PropTypes.node
}
