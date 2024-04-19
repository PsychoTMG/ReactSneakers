import React from 'react'
import BtnRemove from '../assets/btnRemove.svg'
import Cart1 from '../assets/cart1.svg'

const Drawer = () => {
    return (
        <div className='overlay' >

            <div className='drawer'>
                <h3>Корзина <img src={BtnRemove} /></h3>
                <div className='meow'>
                <div className='cartItems'>
                    <img src={Cart1} alt='' width={70} height={70}></img>
                   
                    <div className='cartItem'>
                        <div><p>Мужские Кроссовки Nike Air Max 270</p>
                            <b>12999 руб</b></div>
                        <div> <img className='remove' src={BtnRemove} /></div>
                    </div>
                </div>
                </div>
                <div className='items'>
                    <div className='cartTotalBlock'>
                        <ul >
                            <li className='items1'>
                                <span>Итого</span><div></div><b>21498 руб</b>
                            </li>
                            <li className='items2'>
                                <span>Налог 5%</span><div></div><b>1074 руб. </b>
                            </li>
                        </ul>
                        <button>Оформить заказ</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Drawer
