import './App.css'
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import MainMonstruos from './components/MainMonstruos'
import Monstruo from './components/Monstruo'
import Tinder from './components/Tinder';

const App = () => {
  return( 
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/monstruos" element={<MainMonstruos />} />
      {/*   <Route path='/monstruos/:id' element={<Monstruo monstruos={monstruos}/>} /> */}
        <Route path='/citas-monstruos' element={<Tinder />} />
      </Routes>
    </>
  )
}

export default App;
