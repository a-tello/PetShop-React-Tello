import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListcontainer';
import './App.css';

function App() {
  return (
    <div className="App">
        <NavBar />
        <ItemListContainer greeting='Bienvenido/a a la tienda de Adopciones Quilmes!'/>
    </div>
  );
}

export default App;
