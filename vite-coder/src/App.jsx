import {useState} from 'react'
import NavBar from './Components/NavBar/navBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Titulo from './Components/Titulo/Titulo';

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';





function App() {
  let style = {fontSize: 26}

// const [counter, setCounter] = useState(0)

//   let handleCount = ()=> {
//     setCounter(counter + 1)
//   }

  return (
    <div className="App" style = {style}>
      <NavBar />
      <ItemListContainer greeting={'home de la pagina. ILC'}/>
      {/* <Titulo /> */}
      {/* <p>{counter}</p>
      <button onClick={handleCount}>Incrementacion</button> */}
    </div>

  )
}

export default App
