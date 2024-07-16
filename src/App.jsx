import { useContext } from 'react'
import './App.css'
import RouterController from './routes/RouterController'
import AppContext from './context/store'

function App() {

  const [state,dispatch] = useContext(AppContext)

  return (
    <div data-current-theme={state.theme}>
     <RouterController/>
    </div>
  )
}

export default App
