import './app.scss'
import React from 'react'
import Card from './components/card/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'




const App = () => {
  const [items, setItems] = React.useState([])
  const [cartOpened, setCartOpened] = React.useState(false)
  const [cartItems, setCartItems] = React.useState([])

  React.useEffect(() => {
    fetch('https://6625088904457d4aaf9da09a.mockapi.io/items').then(responce => {
      return responce.json()
    }).then((json) => {
      setItems(json)
    })
  }, [])



  const onAddtoCard = (item) => {
    // Проверяем, есть ли уже такой товар в корзине
    const isItemInCart = cartItems.some(cartItem => cartItem.title === item.title);
  
    // Если товар уже в корзине, ничего не делаем
    if (isItemInCart) {
      console.log("Товар уже в корзине");
      return;
    }
  
    // Если товара нет в корзине, добавляем его
    setCartItems(prev => [...prev, item]);
  };


  return (
    <div className="wrapper">
      {cartOpened ? <Drawer items={cartItems} onClose={() => { setCartOpened(false) }} /> : null}
      <Header onClickCart={() => { setCartOpened(true) }} />
      <div className='content'>
        <div className='search-block'>
          <h1>Все кроссовки</h1>
          <div className='search'>
            <img src='img/search.svg' alt='search' />
            <input placeholder='Поиск' />
          </div>
        </div>
        <div className='cardBlock'>
          {items.map((arr) => <Card
            title={arr.title}
            price={arr.price}
            imgUrl={arr.imgUrl}
            onLikeClick={(item) => { onAddtoCard(item) }}
          />)}
        </div>
      </div>
    </div>
  );
}

export default App;
