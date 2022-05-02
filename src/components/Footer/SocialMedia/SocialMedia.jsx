import React from 'react'
import style from './style.module.scss'
import facebook from '../../../assets/socialMedia/facebook.png'
import instagram from '../../../assets/socialMedia/instagram.png'
import youtube from '../../../assets/socialMedia/youtube.png'

export const SocialMedia = () => {
  return (
        <section className={style.socialMedia__container}>
            <h4>Nos siga nas nossas redes sociais</h4>
            <div className={style.SocialMedia__icons}>
                <figure>
                    <img src={facebook} alt="" />
                </figure>
                <figure>
                    <img src={instagram} alt="" />
                </figure>
                <figure>
                    <img src={youtube} alt="" />
                </figure>
            </div>
            <h4>Sobre O Cãoselheiro</h4>
            <p>Seja muito bem-vindo! O Cãoselheiro - a loja - é a loja online de uma empresa que nasceu para contribuir para uma melhor qualidade de vida dos cães e seus familiares humanos. Seus sócios são profissionais de educação canina que trabalham seguindo metodologias positivas de treinamento animal, encorajando e recompensando os acertos de nossos amigos em seus processos de adestramento. Aqui você encontrará apenas itens de qualidade comprovada e utilizados pessoalmente por seus idealizadores. Fique à vontade!</p>
        </section>
  )
}
