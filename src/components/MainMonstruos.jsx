import monstruos from "../data/monstruos"
import './MainMonstruos.css'
import monstruoImg from '../assets/hero.png'
import { Link } from "react-router-dom"

const MainMonstruos = () => {
    return(
        <div className="body">
            <div className="d-flex flex-column align-items-center mt-5">
                <div className="main-title">
                    <h1>Monstruos Financieros</h1>
                </div>
                <p className="instrucciones">Aquí podrás pelear contra tu monstruo financiero y aprender cómo puedes vencerlo.</p>
                <div className="mt-3 description">
                    <span>Selecciona a un monstruo para iniciar:</span>
                </div>
            </div>
            {/* <div className="d-flex justify-content-center">
                <div className="container main">
                    <div className="row">
                        {monstruos.map(monstruo => 
                            <div key={monstruo.id} className="col-lg-4 col-sm-6">
                                <div className="monstruo"></div>
                            </div> )}
                    </div>
                </div>
            </div> */}
            <div className="main">
                {monstruos.map(monstruo => 
                    <div key={monstruo.id}>
                        <div className="monstruo">
                            <Link to={monstruo.id}>
                                <img src={monstruoImg} alt="monstruo" className="monstruo-img" />
                            </Link>
                        </div>
                    </div> )}
            </div>
        </div>
    )
}

export default MainMonstruos