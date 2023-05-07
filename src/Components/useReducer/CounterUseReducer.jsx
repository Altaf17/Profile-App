import React, { useReducer } from 'react';



const CounterUseReducer = () => {
    const initialState = { count: 0 }

    const CounterReducer = (state, action) => {
        // switch statement
        switch (action.type) {
            case "ADD":
                return { count: state.count + 1 }
            case "DEC":
                return { count: state.count - 1 }
            case "RESET":
                return { count: 0 }

            default: return state
        }
        // if else condition

        // if (action.type === "ADD") {
        //     return {
        //         count: state.count + 1
        //     }
        // }
        // if (action.type === "DEC") {
        //     return {
        //         count: state.count - 1
        //     }
        // }
        // if (action.type === "RESET") {
        //     return {
        //         count: 0
        //     }
        // }
        // return state;
    }
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