import Monstruo from "./components/Monstruo";
import monstruos from "./data/monstruos";
import Main from "./components/Main";
import './App.css'
import { Routes, Route } from "react-router-dom";

const App = () => {
  return(
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path=':id' element={<Monstruo monstruos={monstruos}/>} />
    </Routes>
    /* <Monstruo monstruo={monstruos[0]}/> */
  )
}

export default App;
