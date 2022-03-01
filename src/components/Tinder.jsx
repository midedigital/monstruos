import TinderCard from "react-tinder-card"
import { useState } from "react"

const Tinder = () => {
    const [monstruos, setMonstruos] = useState([
        {
            nombre: 'deudas'
        },
        {
            nombre: 'compras'
        },
        {
            nombre: 'impostor'
        },
        {
            nombre: 'meses'
        },
        {
            nombre: 'saboteador'
        },
        {
            nombre: 'credito'
        },
        {
            nombre: 'imprevistos'
        },
        {
            nombre: 'hormiga'
        },
        {
            nombre: 'ultimo'
        },
    ])

    const onSwipe = (direction, nombre) => {
        console.log(direction, nombre)
        switch (nombre) {
            case 'deudas':
                if(direction === 'left') {
                    console.log('2 pt')
                } else {
                    console.log('2 pt deudas')
                }
            case 'compras':
                if(direction === 'left') {
                    console.log('something')
                } else {
                    console.log('no')
                }
        }
    }
    return(
        <div className="d-flex justify-content-center">
            <div className="d-flex flex-column">
                {monstruos.map(monstruo =>     
                    <TinderCard 
                        key={monstruo.nombre} 
                        onSwipe={(direction) => onSwipe(direction, monstruo.nombre)}
                    >
                        <div className="card">{monstruo.nombre}</div>
                    </TinderCard>
                )}
            </div>
        </div>
    )
}

export default Tinder