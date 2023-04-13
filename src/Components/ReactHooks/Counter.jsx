import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleInc = () => {
        setCount(count + 1)
    }

    const handleDec = () => {
        setCount(count - 1)
    }
    const handleReset = ()=>{
        setCount(0)
    }

    let color = "black";
    if (count > 0) {
        color = "green"
    } else if (count < 0) {
        color = "red"
    } else {
        color = "black"
    }
    return (
        <div className='--flex-center --100vh --bg-primary'>
            <div className="container --bg-light --p2 --m2 --center-all">
                <h3>Counter App with Count color change</h3>
                <div className="buttons --flex-center">
                    <button className='--btn --btn-primary' onClick={handleInc}>Increment + </button>
                    &nbsp;
                    &nbsp;
                    <h2 style={{ color: color }}>{count}</h2>
                    &nbsp;
                    &nbsp;
                    <button className='--btn --btn-danger' onClick={handleDec}>Decrement - </button>
                    <button className='--btn --btn-danger' onClick={handleReset}>Reset</button>
                </div>

            </div>
        </div>
    )
}

export default Counter