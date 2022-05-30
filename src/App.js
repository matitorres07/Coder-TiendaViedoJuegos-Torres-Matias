import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Saludo from './componentespractica/Saludo';
import ItemListContainer from './components/ItemListContainer';
import Prueba1 from './componentespractica/Prueba1';
import Contador from './componentespractica/Contador';
import ItemCount from './components/ItemCount';
import CountriesContainer from './componentespractica/CountriesContainer';
import Item from './components/Item';
import StarshipContainer from './componentespractica/swapi/StarshipContainer';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nosotros from './components/Nosotros';
import ItemDetail from './components/ItemDetail';
import ItemsCategory from './components/ItemsCategory';
import ItemsCategoryContainer from './components/ItemsCategoryContainer';
import NoVocals from './componentespractica/NoVocals';
import Cart from './components/Cart';
import CartContextProvider from './components/context/CartContext';
import AppContextProvider from './components/context/AppContext';
import ProductDetail from './components/firebase-examples/ProductDetail';
import Home from './components/Home';
import Orden from './componentespractica/Orden';


function App() {
  return (
    <div className="App" >
    <AppContextProvider>
      <CartContextProvider >
        <BrowserRouter >
        
          <Routes>
            <Route path='/' element = {<Home/>}/>
            <Route path='/juegos' element = {<ItemListContainer/>}/>
            <Route path='/nosotros' element = {<Nosotros/>}/>
            <Route path='/categorias/:categoria' element = {<ItemsCategory/>}/>
            <Route path='/consolas/:consola' element = {<ItemsCategoryContainer/>}/>
            <Route path='/datalles/:id' element = {<ItemDetail/>}/>
            <Route path='/cart' element = {<Cart/>}/>
            <Route path='/producto' element = {<ProductDetail/>}/>
            <Route path='/salvar' element = {<Orden/>}/>
          </Routes>
        
        

        
      </BrowserRouter>


      </CartContextProvider>

    </AppContextProvider>
      

    </div>
      


      
      
      


  );
}

export default App;
