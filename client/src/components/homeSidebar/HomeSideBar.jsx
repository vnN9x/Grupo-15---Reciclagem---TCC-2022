import React from 'react'
import './homesidebar.css'

export default function HomeSideBar() {
  return (
    <div className='sidebar'>
        <a className="sideItem" target='_blank' class='fa fa-facebook' href='https://www.facebook.com/groups/774394979697583' rel="noopener noreferrer"></a>
        <a className="sideItem" target='_blank' class='fa fa-twitter' href='https://twitter.com/cemprebr' rel="noopener noreferrer"></a>
        <a className="sideItem" target='_blank' class='fa fa-instagram' href='https://www.instagram.com/reciclagem.criativa/' rel="noopener noreferrer"></a>
        <a className="sideItem" target='_blank' class='fa fa-youtube' href='https://www.youtube.com/channel/UCJ4jzwNmS_vjqfQxBeS-eog/featured' rel="noopener noreferrer"></a>
        <a className="sideItem" target='_blank' class='fa fa-linkedin' href='https://www.linkedin.com/company/cempre-compromisso-empresarial-para-reciclagem/' rel="noopener noreferrer"></a>
    </div>
  )
}
