import Monstruo from "./components/Monstruo";
import monstruos from "./data/monstruos";
import MainMonstruos from "./components/MainMonstruos";
import './App.css'
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  return( 
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/monstruos" element={<MainMonstruos />} />
        <Route path='/monstruos/:id' element={<Monstruo monstruos={monstruos}/>} />
      </Routes>
    </>
    /* <Monstruo monstruo={monstruos[0]}/> */
  )
}

export default App;
