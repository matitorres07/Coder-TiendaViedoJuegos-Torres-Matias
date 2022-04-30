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
import Popup from './componentespractica/Popup';


function App() {
  return (
    <div className="App" style={{backgroundImage: `url("https://i.imgur.com/Kx7N0dG.png")` }}>
      
      <NavBar/>
      <ItemListContainer></ItemListContainer>
      <Footer/>
    
    </div>
  );
}

export default App;
