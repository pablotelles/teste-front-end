import React from 'react'
import dogContact from '../../../assets/contact/contactdog.png'
import { MainButton } from '../../../components/Buttons/MainButton/MianButton'
import style from './style.module.scss'
import { AiOutlineUser as UserICon } from 'react-icons/ai'
import { HiOutlineMail as EmailIcon } from 'react-icons/hi'

export const Contact = () => {
  return (
      <div className={style.contact__container}>
          <img src={dogContact} alt="" />
          <form className={style.contact__form} action="submit">
              <h3>Se inscreva para receber novidades e promoções</h3>
              <div className={style.contact__content}>
                <div className={style.contact__input__container}>
                    <input className={style.contact__name} type="text" placeholder='Digite seu nome' />
                    <UserICon className={style.contact__icon} size={30} />
                </div>
                <div className={style.contact__input__container}>
                    <input className={style.contact__email} type="text" placeholder='Digite seu e-mail' />
                    <EmailIcon className={style.contact__icon} size={30} />
                </div>
                <MainButton text={'enviar'} />
              </div>
          </form>
      </div>

  )
}
