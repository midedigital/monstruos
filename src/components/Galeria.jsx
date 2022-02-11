import './Galeria.css'

const Galeria = () => {
    const arr = [1,2,3,4,5,6,7,8,9]
    return(
        <div className='galeria-bg'>
            <div className="main-galeria">
                {arr.map(e => 
                    <div key={e} className="galeria-monstruo">
                    </div>    
                )}
            </div>
        </div>
    )
}

export default Galeria