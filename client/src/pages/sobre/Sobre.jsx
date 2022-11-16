import React from 'react'
import HomeSideBar from '../../components/homeSidebar/HomeSideBar'
import TopBar from '../../components/TopBar/TopBar'
import './sobre.css'

export default function Sobre() {
  return (
    <>
        <TopBar/>
        <HomeSideBar/>
        <div className='sobre'>
            <span>
              Site desenvolvido para fins acadêmicos, como projeto de conclusão do curso de Ciência da Computação, pela UNIP - Universidade Paulista. <br></br><br></br>
              Desenvolvido ao decorrer do ano de 2022, tem como objetivo instruir e aliciar pessoas a participarem ativamente das atividades de coleta e separação de 
              material reciclável na sua região. <br></br><br></br>
              Todo o código fonte pode ser encontrado no <a target='_blank' href='https://github.com/vnN9x/Grupo-15---Reciclagem---TCC-2022' rel="noopener noreferrer"><b>GitHub</b></a><br></br><br></br>
              Para contato com o desenvolvedor e aluno Vinícius Maximiliano, <a target='_blank' href='https://www.linkedin.com/in/vinicius-maximiliano/' rel="noopener noreferrer"><b>Linkedin</b></a><br></br>
              <br></br> Grupo 15 - <b>Lixo na cidade de Campinas: plataforma de conteúdo informativo e incentivador as práticas de reciclagem</b>
            </span>
        </div>
    </>
  )
}
