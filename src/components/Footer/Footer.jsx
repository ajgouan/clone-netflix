import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-icon">
            <img src={facebook_icon} alt="" />
            <img src={instagram_icon} alt="" />
            <img src={youtube_icon} alt="" />
        </div>
        <ul>
            <li>Audiodescription</li>
            <li>Relations Investisseur</li>
            <li>Informations Légales</li>
            <li>Centre d'aide</li>
            <li>Recrutement</li>
            <li>Préférences de cookies</li>
            <li>Cartes cadeaux</li>
            <li>Conditions d'utilisation</li>
            <li>Mentions légales</li>
            <li>Presse</li>
            <li>Confidentialité</li>
            <li>Nous contacter</li>
        </ul>
        <p className='copyright-text'>@ 1997-2026 Netflix, Inc.</p>
    </div>
  )
}

export default Footer