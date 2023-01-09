import NavBar from './components/Navbar/NavBar'
import ItemListContainer from './components/ItemsListContainer/ItemListcontainer';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
            <NavBar />
            <Routes>
                <Route  
                    path='/' 
                    element={<ItemListContainer greeting='Bienvenido/a a la tienda de Adopciones Quilmes!'/>
                    } 
                />
                <Route  
                    path='/category/:categoryName' 
                    element={<ItemListContainer greeting='Bienvenido/a a la tienda de Adopciones Quilmes!'/>
                    } 
                />
                <Route  
                    path='/item/:productId' 
                    element={<ItemDetailContainer />
                    } 
                />
            </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
