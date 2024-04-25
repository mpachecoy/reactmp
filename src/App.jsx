import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContairiner/ItemDetailContainer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer title='Tienda' />}/>
            <Route path='/categoria/:categoria' element={<ItemListContainer title='Tienda' />} />
            <Route path="/item/:id" element={<ItemDetailContainer />}/>
            <Route path="*" element={"Error 404"}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
