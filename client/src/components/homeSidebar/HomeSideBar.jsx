import React from 'react'
import './homesidebar.css'

export default function HomeSideBar() {
  return (
    <div className='sidebar'>
        <a className="sideItem" target='_blank' class='fa fa-facebook' href='https://www.facebook.com/groups/774394979697583'></a>
        <a className="sideItem" target='_blank' class='fa fa-twitter' href='https://twitter.com/cemprebr'></a>
        <a className="sideItem" target='_blank' class='fa fa-instagram' href='https://www.instagram.com/reciclagem.criativa/'></a>
        <a className="sideItem" target='_blank' class='fa fa-youtube' href='https://www.youtube.com/channel/UCJ4jzwNmS_vjqfQxBeS-eog/featured'></a>
        <a className="sideItem" target='_blank' class='fa fa-linkedin' href='https://www.linkedin.com/company/cempre-compromisso-empresarial-para-reciclagem/'></a>
    </div>
  )
}
