import TinderCard from "react-tinder-card"
import { useState, useRef, useMemo } from "react"
import data from "./monsterData"
import './Tinder.css'
import TinderMonster from "./TinderMonster"
import React from "react"
import leftArrow from '../assets/left_arrow.svg'
import rightArrow from '../assets/right_arrow.svg'
import TinderStartScreen from "./TinderStartScreen"
import TinderMatch from "./TinderMatch"

const Tinder = () => {
    const [monstruos, setMonstruos] = useState(data)
    const [finished, setFinished] = useState(false)
    const [high, setHigh] = useState(0)
    const [name, setName] = useState('')
    const [start, setStart] = useState(true)
    const [counter, setCounter] = useState(1)
    const [match, setMatch] = useState({})

    //setup button swipe
    const [currentIndex, setCurrentIndex] = useState(data.length - 1)
    const [lastDirection, setLastDirection] = useState()
    // used for outOfFrame closure
    const currentIndexRef = useRef(currentIndex)
    const [direction, setDirection] = useState()

    const childRefs = useMemo(
        () =>
          Array(data.length)
            .fill(0)
            .map((i) => React.createRef()),
        []
      )

    //gets high score
    const getHighest = () => {
        let temp = 0
        let tempName = ''
        let tempIndex = ''
        monstruos.forEach((monstruo, index) => {
            if(temp < monstruo.score) {
                //console.log('score is', monstruo.score)
                temp = monstruo.score
                tempName = monstruo.nombre
                tempIndex = index
            }
        })
        setHigh(temp)
        setName(tempName)
        setMatch(data[tempIndex])
    }

    //updates score on monsters
    const updateMonstruo = (index, score) => {
        let newArr = [...monstruos]
        newArr[index].score = newArr[index].score + score
        setMonstruos(newArr)
    }

    const updateCurrentIndex = (val) => {
        setCurrentIndex(val)
        currentIndexRef.current = val
      }

    //handle swipe
    const handleSwipe = (direction, nombre, index) => {
        //console.log(direction, nombre, index, currentIndex)
        onSwipe(direction, nombre, index)
        setLastDirection(direction)
        updateCurrentIndex(index - 1)
    }

    //method to call whenever there is a swipe
    const onSwipe = (direction, nombre, index) => {
        setCounter(counter + 1)
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

    const swipe = async (dir, name, index) => {
        onSwipe(dir, name, index)
        if (currentIndex < data.length) {
          await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
        }
      }

    return(
        <div className="tinder">
            {start 
            ? 
                <TinderStartScreen setStart={setStart} />
            :
            <div className="tinder-container-main">
                <div className='tinder-container'>
                {data.map((monstruo, index) =>     
                    <TinderCard 
                        ref={childRefs[index]}
                        className="swipe"
                        key={monstruo.nombre} 
                        onSwipe={(direction) => handleSwipe(direction, monstruo.nombre, index)}
                        preventSwipe={['up','down']}
                    >
                        <TinderMonster monster={monstruo} index={index} swipe={swipe} />
                    </TinderCard>
                )}
                {finished &&
                    <TinderMatch match={match} />
                }
                </div>
                <div className={!finished ? "botones" : 'd-none'}>
                    <div 
                        className="boton-izq"
                        onClick={() => swipe('left', data[currentIndex].nombre, currentIndex)} 
                    >
                        <img 
                            src={leftArrow} 
                            alt="left-arrow" 
                            className='left-arrow' 
                        />    
                    </div>
                    <div 
                        className="boton-der"
                        onClick={() => swipe('right', data[currentIndex].nombre, currentIndex)} 
                    >
                        <img 
                            src={rightArrow} 
                            alt="right-arrow" 
                            className='right-arrow' 
                        />    
                    </div>
                </div>
            </div>
            }
        </div>
    )
}

export default Tinder