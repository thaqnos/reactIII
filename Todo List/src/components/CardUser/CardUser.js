import React from 'react'
import '../Card/Card.css'

const CardUser = (props) => {
    const { user, img, nome, repositorio } = props
    return (
        <div className='doggo-card' onClick={props.clicar}>
            <img className='doggo-foto' src={img} alt='produto cachorrinhos: nao compre, adote'></img>
            <p className='doggo-titulo'>{user}</p>
            <p className='doggo-descricao'>{nome}</p>
            <p className='doggo-descricao'>{repositorio}</p>
        </div>
    )
}

export default CardUser;