import Footer from './Footer'
import './Test.css'

const Test = () => {
    return(
        <div className='test-container'>
            <div className='test-content'>
                <h1>Hey</h1>
                <h2>Hello</h2>
                <p>Hello</p>
            </div>
            <Footer style={{ position: 'absolute', bottom: 0, width: '100vw', height: '3em'}}/>
        </div>
    )
}

export default Test