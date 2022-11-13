import React from 'react'
import './locais.css'

export default function Locais() {
  return (
    <div className='locais'>
        <ul className="cardsContainer">
            <li className="listItem">
                <div className="locais-card">
                    <form>
                        <label for="local">Local:</label><br/>
                        <input type="text" id="local" name="local"/><br/>
                        <label for="materiais">Materiais:</label><br/>
                        <input type="text" id="materiais" name="materiais"/>
                        <label for="descricao">Descrição:</label><br/>
                        <input type="text" id="descricao" name="descricao"/>
                        <label for="materiais">Materiais:</label><br/>
                        <input type="text" id="materiais" name="descricao"/>
                    </form>
                </div>
            </li>
            <li className="listItem">
                <div className="locais-card">
                    <label>Local:</label>
                    <label>Materiais:</label>
                    <label>Descrição:</label>
                    <label>Endereço:</label>
                </div>
            </li>
        </ul>
    </div>
  )
}
