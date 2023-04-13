import React, { useState } from 'react';

const UseStateObject = () => {
    const [profile, setProfile] = useState({
        name: "Altaf",
        job: "Web Developer",
        company: "Google",
    })

    const editCompany = () => {
        setProfile({ ...profile, company: "microsoft" });
    }
    const PreviosCompany = ()=>{
        setProfile({...profile,company:"Google"})
    }
    return (
        <>
            <h2 className='--text-center --my2'>UseState in Object</h2>
            <div className="--card max2">
                <h2>Name : {profile.name}</h2>
                <h4>Job : {profile.job}</h4>
                <h4>Company : {profile.company}</h4>
            </div>
            <div className="--center-all --my2">
                <button className="--btn --btn-primary" onClick={editCompany}>Change Company</button> &nbsp;
                <button className="--btn --btn-primary" onClick={PreviosCompany}>Previos Company</button>
            </div>
        </>
    )
}

export default UseStateObject