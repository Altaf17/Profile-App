import React, { useReducer } from 'react';
import { CounterReducer } from './CountReducer';


const CounterUseReducer = () => {
    const initialState = { count: 0 }

    
    const [state, dispatch] = useReducer(CounterReducer, initialState)

    const handleAdd = () => {
        dispatch({
            type: "ADD"
        })
    }
    const handleDec = () => {
        dispatch({
            type: "DEC"
        })
    }

    const handleReset = () => {
        dispatch({
            type: "RESET"
        })
    }



    return (
        <section className='--flex-center --100vh --bg-primary'>

            <div className="container --bg-light --py2 --m2 --center-all">
                <h3>React Counter App with UseReducer Hook</h3>
                <h4>{state.count}</h4>
                <div className="buttons --flex-center">
                    <button className='--btn --btn-danger' onClick={handleDec}>Substract</button>
                    <button className='--btn' onClick={handleReset}>Reset</button>
                    <button className='--btn --btn-primary' onClick={handleAdd}>Add</button>
                </div>
            </div>
        </section>
    )
}

export default CounterUseReducer