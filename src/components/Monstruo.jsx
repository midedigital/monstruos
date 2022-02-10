import { useEffect, useState } from "react"
import './Monstruo.css'
import heart from '../assets/heart.png'
import monster from '../assets/monster.png'
import { useParams } from "react-router-dom"

const Monstruo = ({ monstruos }) => {
    const { id } = useParams()
    const monstruo = monstruos.filter(monstruo => monstruo.id === id)
    const preguntas = monstruo[0].preguntas
    const [question, setQuestion] = useState(0)
    const [hearts, setHearts] = useState(2)
    const [gameOver, setGameOver] = useState(false)
    const [win, setWin] = useState(false)
    const [finished, setFinished] = useState(false)

    const handleClick = (e, correct) => {
        e.preventDefault()
        if(correct) {
            console.log('correcto')
        } else {
            setHearts(hearts - 1)
            console.log('incorrecto')
        }
        nextQuestion()
    }

    useEffect(() => {
        if(finished) {
            checkWin()
        }
    }, [hearts, question, finished])

    const checkWin = () => {
        if(hearts > 0) {
            setWin(true)
        } else if (hearts < 1){
            setGameOver(true)
        }
    }

    const nextQuestion = () => {
        if(question + 1 < preguntas.length ) {
            setQuestion(question + 1)
        } else {
            setFinished(true)
        }
    }

    return(
        <div className="d-flex justify-content-center mt-5">
            {gameOver === true && win === false
            ?
                <div className="gameOver">
                    <h1>Game Over</h1>
                </div>
            :
                null
            }
            {win === true && gameOver === false
            ?
                <div>
                    <h1>Ganaste</h1>
                </div>
            :
                null
            }
            <div className="monstruo-container" style={gameOver === true || win === true ? {display: 'none'} : {display: 'block'}}>
                {/* <h1>{monstruo.id}</h1> */}
                <div className="pregunta-container">
                    <span>{preguntas[question].monstruo}</span>
                </div>
                <div className="d-flex justify-content-end mb-2 hearts">
                    {hearts === 2 &&
                    <div className="d-flex">
                        <img src={heart} alt='heart' width='25px' height='25px'/>
                        <img src={heart} alt='heart' width='25px' height='25px'/>
                    </div> 
                    }
                    {hearts === 1 &&
                    <div className="d-flex">
                        <img src={heart} alt='heart' width='25px' height='25px'/>
                    </div> 
                    }
                </div>
                <div className="respuestas-container">
                    <span className="mt-1 title">{preguntas[question].pregunta}</span>
                    <div className="mt-3 respuestas-content">
                        {preguntas[question].respuestas.map(
                            respuesta => 
                                <span className="mt-1 respuesta" style={{ cursor: 'pointer'}} key={respuesta.label} onClick={(e) => handleClick(e, respuesta.correct)}>{`${respuesta.label}) ${respuesta.text}`}</span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Monstruo