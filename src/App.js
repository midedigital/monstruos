import './App.css'
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import MainMonstruos from './components/MainMonstruos'
import Monstruo from './components/Monstruo'
import Tinder from './components/Tinder';
import { Router } from 'react-router-dom';
import Test from './components/Test';

const App = () => {
  //console.log(process.env.PUBLIC_URL)
  return( 
    <Routes>
        <Route path={'/'} element={<Main />} />
        <Route path={'/monstruos'} element={<MainMonstruos />} />
      {/*   <Route path='/monstruos/:id' element={<Monstruo monstruos={monstruos}/>} /> */}
        <Route path={'/citas-monstruos'} element={<Tinder />} />
        <Route path={'/test'} element={<Test />} />
    </Routes>
  )
}

export default App;
