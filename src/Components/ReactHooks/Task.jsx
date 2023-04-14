import React from 'react';
import './Task.css';

const Task = (props) => {
    const { name, isCompleted } = props;

    if (isCompleted) {
        return <del> <li className='completed' > {name} √</li></del>;
    }
    return  <li className='incompleted'> {name}</li>
}

export default Task