import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Saludo from './components/Saludo';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
    
    <ItemListContainer name = 'tienda' producto='juegos'></ItemListContainer>
    </div>
  );
}

export default App;
