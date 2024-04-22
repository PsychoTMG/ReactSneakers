import React from 'react'
import classes from './card.module.scss'

const Card = ({ onLikeClick, title, price, imgUrl }) => {
    const [isAdded, setIsAdded] = React.useState(false)
    const [favorite, setFavorite] = React.useState(false)

    const onFavorite = () => {
        setFavorite(!favorite)
    }

    const onClickPlus = () => {
        onLikeClick({ title, price, imgUrl })
        setIsAdded(!isAdded)
    }

    return (
        <div className={classes.card}>
            <div className={classes.favorite}>
                <img onClick={onFavorite} src={favorite ? 'img/like.svg' : 'img/unlike.svg'} width={30} height={30} alt='dsd'/>
            </div>
            <div className={classes.sneakImg}>
                <img src={imgUrl} width={133} height={112} alt='ds' />
                <p>{title}</p>
            </div>
            <div className={classes.general}>
                <div className={classes.price}>
                    <span>ЦЕНА: </span>
                    <b>{price}</b>
                </div>
                <img className={classes.plus} onClick={onClickPlus} src={isAdded ? 'img/checked.svg' : 'img/plus.svg'} width={30} height={30} alt='dsd' />
            </div>
        </div>
    )
}

export default Card
