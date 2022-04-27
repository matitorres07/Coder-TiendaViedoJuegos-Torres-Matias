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

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer></ItemListContainer>


    </div>
  );
}

export default App;
