import React from 'react'
import {useDispatch } from 'react-redux'
import { resetReduxopedia } from "../../redux/action/actions"

function ResetApp() {
    const dispatch = useDispatch();
    const resetApp = ()=>{
        //dispatch(resetDestination());
        dispatch(resetReduxopedia());
    }
  return (
    <div className='text-center'>
      <button 
        className='btn btn-warning'
        onClick={()=>resetApp() }>
            Reset
      </button>
    </div>
  )
}

export default ResetApp
