import TinderCard from "react-tinder-card"
import { useState } from "react"
import data from "./monsterData"
import './Tinder.css'
import TinderMonster from "./TinderMonster"

const Tinder = () => {
    const [monstruos, setMonstruos] = useState(data)
    const [finished, setFinished] = useState(false)
    const [high, setHigh] = useState(0)
    const [name, setName] = useState('')

    const getHighest = () => {
        let temp = 0
        let tempName = ''
        monstruos.forEach(monstruo => {
            if(temp < monstruo.score) {
                console.log('score is', monstruo.score)
                temp = monstruo.score
                tempName = monstruo.nombre
            }
        })
        setHigh(temp)
        setName(tempName)
    }

    const updateMonstruo = (index, score) => {
        let newArr = [...monstruos]
        newArr[index].score = newArr[index].score + score
        setMonstruos(newArr)
    }

    const onSwipe = (direction, nombre, index) => {
        switch (nombre) {
            case 'deudas':
                if(direction === 'left') {
                    updateMonstruo(index, 2)
                    setFinished(true)
                    getHighest()
                } else if(direction === 'right'){
                    updateMonstruo(index, 2)
                    setFinished(true)
                    getHighest()
                }
                break
            case 'compras':
                if(direction === 'left') {
                    updateMonstruo(index, 3)
                } else if(direction === 'right'){
                    updateMonstruo(5, 2)
                }
                break
            case 'impostor':
                if(direction === 'left') {
                    updateMonstruo(index, 5)
                } else if(direction === 'right') {
                    updateMonstruo(6, 2)
                }
                break
            case 'meses':
                if(direction === 'left') {
                    updateMonstruo(index, 3)
                } else if(direction === 'right') {
                    updateMonstruo(6, 2)
                }
                break
            case 'saboteador':
                if(direction === 'left') {
                    updateMonstruo(index, 2)
                } else if(direction === 'right') {
                    updateMonstruo(3, 2)
                }
                break
            case 'credito':
                if(direction === 'left') {
                    updateMonstruo(index, 2)
                } else if(direction === 'right') {
                    updateMonstruo(0, 1)
                }
                break
            case 'imprevistos':
                if(direction === 'left') {
                    updateMonstruo(index, 1)
                } else if(direction === 'right') {
                    updateMonstruo(1, 2)
                }
                break
            case 'hormiga':
                if(direction === 'left') {
                    updateMonstruo(index, 5)
                } else if(direction === 'right') {
                    updateMonstruo(4, 3)
                }
                break
            case 'ultimo':
                if(direction === 'left') {
                    updateMonstruo(4, 5)
                } else if(direction === 'right') {
                    updateMonstruo(5, 1)
                }
                break
        }
    }

    return(
        <div className="">
                {data.map((monstruo, index) =>     
                    <TinderCard 
                        className="swipe"
                        key={monstruo.nombre} 
                        onSwipe={(direction) => onSwipe(direction, monstruo.nombre, index)}
                        preventSwipe={['up','down']}
                    >
                        {/* <div style={{ backgroundImage: `url(${monstruo.url})`}} className="tinderCard">
                            <h3 className="p-3">{monstruo.nombre}</h3>
                            <div className="card-text">
                                <span>{monstruo.pregunta}</span>
                            </div>
                            <div className="swiping">
                                <span className="left">{monstruo.left}</span>
                                <span className="right">{monstruo.right}</span>
                            </div>
                        </div> */}
                        <TinderMonster monster={monstruo} />
                    </TinderCard>
                )}
                {finished &&
                    <h1>Tu monstruo es {name}</h1>
                }
        </div>
    )
}

export default Tinder