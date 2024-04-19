import React from 'react'
import Unliked from '../assets/Heart1.svg'
import Sneak1 from '../assets/1.png'
import Plus from '../assets/plus.svg'

const Card = () => {
    return (
        <div className='card'>
            <div className='favorite'>
                <img src={Unliked} width={30} height={30} />
            </div>
            <div className='sneakImg'>
                <img width={133} height={112} src={Sneak1} alt='' />
            </div>
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className='c1'>
                <div className='c2'>
                    <span>ЦЕНА: </span>
                    <b>12999 рублей</b>
                </div>
                <img src={Plus} width={30} height={30} alt='' />
            </div>
        </div>
    )
}

export default Card
