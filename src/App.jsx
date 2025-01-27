
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Router, Routes} from 'react-router-dom';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from '/components/ItemDetailContainer/ItemDetailContainer';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
          <Routes>
          <Router path='/' element={<ItemListContainer />}/>
          <Router path='/category/:categoryId' element={<ItemListContainer />}/>
          <Router path='/item/:itemId' element={<ItemDetailContainer />} />
          <Router path='*' element={<h1>404 NOT FOUND</h1>} />
          </Routes>
        </BrowserRouter>
    </div>
    )
  }



export default App;
