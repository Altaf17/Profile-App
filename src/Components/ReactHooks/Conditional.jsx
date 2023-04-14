import React, { useState } from 'react';
import './conditional.css'

const Conditional = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    // if /else
    let message;
    if (isLoggedIn) {
        message = "Wlecome, Altaf"
    }
    else {
        message = "Welcome, Guest"
    }

    // logical  AND && operator
    // ternary operator

    const handleToggle = () => {
        setIsLoggedIn(!isLoggedIn)
    }

    return (
        <div>
            {/* if else condition  */}

            {/* <h5 className='--text-center' > {message} </h5> */}

            {/* logical &&  */}

            {/* {isLoggedIn && 
            <h5  className='--text-center' >Welome, Altaf</h5>
            }
            {!isLoggedIn && 
            <h5  className='--text-center' >Welome, Guest</h5>
            } */}

            {/* ternary operator  */}

            {/* {isLoggedIn ? <h5  className='--text-center' >Welome, Altaf</h5> : <h5  className='--text-center' >Welome, Guest</h5>} */}

            {/* ternary operator css  */}
            <div className={isLoggedIn ? "user" : "guest"}>
                {isLoggedIn ? <h5 className="--text-center" >Welome, Altaf</h5> : <h5 className='--text-center' >Welome, Guest</h5>}
            </div>
            <div className="--center-all --my10">
                <button className='--btn --btn-primary' onClick={handleToggle}> {isLoggedIn ? "LogOut" : "Login"}</button>
            </div>
        </div>
    )
}

export default Conditional