import React from 'react'
import './Card.css'

const Card = (props) => {
    const { price, title, img } = props.produto
    return (
    <div className='doggo-card'>
        <img className='doggo-foto' src={img}></img>
        <p className='doggo-titulo'>{title}</p>
        <p className='doggo-descricao'>{price}</p>
    </div>
    )
}

export default Card;