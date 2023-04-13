import React, { useState } from 'react';
import { PersonsData } from '../../UserData';
import { BiTrash, BiMap } from 'react-icons/bi';
import { BsFillPersonFill } from 'react-icons/bs';

const GetUserData = () => {
    const [person, setPerson] = useState(PersonsData);


    // Delete function
    const RemovePerson = (id) => {
        const newPerson = person.filter((prsn) => prsn.id !== id)
        setPerson(newPerson)
    }
    return (
        <section className='--flex-center --100vh --bg-primary'>
            <div className='container'>
                <h1 className="--color-white">
                    UseState in Array
                </h1>

                {person.map((item) => {
                    const { id, name, city } = item
                    return (
                        <div className='--flex-between --bg-light --my --card' key={id}>
                            <h2><BsFillPersonFill /> {name}</h2> <span>-</span><h4><BiMap />{city}</h4>
                            <BiTrash color='red' size={22} onClick={() => RemovePerson(id)} />
                        </div>
                    )
                })}

                <button className="--btn --btn-danger" onClick={() => setPerson([])}>Clear All</button>
            </div>
        </section>
    )
}

export default GetUserData