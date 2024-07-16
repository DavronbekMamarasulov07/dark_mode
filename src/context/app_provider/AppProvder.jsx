import  { useReducer } from 'react'
import AppContext from '../store'
import reducer, { initialState } from '../reducer'

const AppProvder = ({children}) => {
  return (
    <div>
      <AppContext.Provider value={useReducer(reducer,initialState)} >
        {children}
      </AppContext.Provider>
    </div>
  )
}

export default AppProvder
