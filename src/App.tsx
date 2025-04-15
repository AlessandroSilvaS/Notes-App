import './style/App.css'
import './style/AppRespo.css'
import { FaPlus } from "react-icons/fa"
import 'bootstrap/dist/css/bootstrap.min.css'
import ModalNote from './components/ModalNote'
import { useState } from 'react'

function App() {

  const [show, setShow] = useState(false)

  const showModal =  () => setShow(true)
  const hideModal = () => setShow(false)

  return (
    <div className='app'>

      <section className="header">

        <div className="buton-area">

          <button onClick={showModal}><FaPlus className='plus'/></button>
          <p>Add</p>

        </div>

        <h1 className='title'>Your notes app</h1>

      </section>

      <section className="main"></section>

      <ModalNote showProp={show} onHide={hideModal}/>
    </div>
  )
}

export default App
