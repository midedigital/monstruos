import monstruos from "../data/monstruos"
import './Main.css'
import monstruoImg from '../assets/monster.png'

const Main = () => {
    return(
        <>
            <div className="d-flex flex-column align-items-center mt-5">
                <div className="main-title">
                    <h1>Monstruos Financieros</h1>
                </div>
                <div className="description">
                    <span>Selecciona a tu monstruo:</span>
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
                            <img src={monstruoImg} alt="monstruo" className="monstruo-img" />
                        </div>
                    </div> )}
            </div>
        </>
    )
}

export default Main