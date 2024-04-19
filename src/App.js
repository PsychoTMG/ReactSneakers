import './app.scss'
import Card from './components/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'
import Search from './assets/Group.svg'


const App = () => {
  return (
    <div className="wrapper">

      <Drawer />
      <Header />
      <div className='content'>
        <div className='search-block'>
          <h1>Все кроссовки</h1>
          <div className='search'>
            <img src={Search} alt='search' />
            <input placeholder='Поиск' />
          </div>
        </div>
        <Card />
        <Card />
        <Card />
        <Card />

      </div>
    </div>
  );
}

export default App;
