import React from 'react'
import BtnRemove from '../assets/btnRemove.svg'

const Drawer = ({ onClose, items = [] }) => {
    return (
        <div className='overlay'  >

            <div className='drawer'>
                <h3>Корзина <img onClick={onClose} src={BtnRemove}  alt='ds'/></h3>
                <div className='meow'>

                    {items.map((arr) => (
                        <div className='cartItems'>
                            <img src={arr.imgUrl} alt='' width={70} height={70}></img>

                            <div className='cartItem'>
                                <div><p>{arr.title}</p>
                                    <b>{arr.price}</b></div>
                                <div> <img className='remove' src={BtnRemove} alt='sds' /></div>
                            </div>
                        </div>
                    )
                    )}
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
