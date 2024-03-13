import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, increaseMultiplier, decreaseMultiplier } from "../../redux/slice/counterSlice"
import { useState  } from 'react'
function Counter() {
  const count = useSelector((state)=>state.counterStore.count)
  const dispatch = useDispatch();
  const [multiplier, setMultiplier] = useState(0)
  return (
    <div 
      className='mt-2 pt-3 pl-2 text-center'
      style={{ borderTop: "1px solid #999"}}
    >
      <div className='text-white pb-2 h4'>Counter : {count}</div>
        <div className='row'>
          <div className='p-4 col-12 col-md-6'>
            <div className='border p-4'>
              <h4 className='text-success pb-2'>Basic Counter</h4>
              <button 
                className='btn btn-primary'
                onClick={()=>dispatch(increment())}>Increase</button> &nbsp;
              <button 
                className='btn btn-danger'
                onClick={()=>dispatch(decrement())}>Decrease</button>
            </div>
          </div>
          <div className='p-4 col-12 col-md-6'>
            <div className='border p-4'>
            <h4 className='text-success pb-2'>Multiplier Counter</h4>
              <div className='row'>
                <div className='col-4 p-1'>
                  <input 
                    type="test"
                    placeholder='multiplier...'
                    className='form-control'
                    value={multiplier}
                    onChange={(e)=> setMultiplier(e.target.value)}/>
                </div>
                <div className='col-4 p-1'>
                  <button 
                    className='btn btn-success form-control'
                    onClick={()=>dispatch(increaseMultiplier(multiplier))}>Increase
                  </button>
                </div>
                <div className='col-4 p-1'>
                  <button 
                    className='btn btn-danger form-control'
                    onClick={()=>dispatch(decreaseMultiplier(multiplier))}>Decrease
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Counter
