export const initialState = localStorage.getItem("theme") || []

import React from 'react'

const reducer = (state, action) => {
  switch(action.type){
    case "CHANGE_THEME":
        localStorage.setItem("theme", action.theme)
        return {
            theme: action.theme
        }
    default: 
        return state
    }

}

export default reducer
