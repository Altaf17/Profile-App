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
    const PreviosJob = ()=>{
        setProfile({...profile,job:"Data Scientist"})
    }
    return (
        <>
            <h2 className='--text-center --my2'>UseState in Object</h2>
            <div className="--card --mx2">
                <h2>Name : {profile.name}</h2>
                <h4>Job : {profile.job}</h4>
                <h4>Company : {profile.company}</h4>
            </div>
            <div className="--center-all --my2">
                <button className="--btn --btn-primary" onClick={editCompany}>Change Company</button> &nbsp;
                <button className="--btn --btn-primary" onClick={PreviosJob}>Change Job</button>
            </div>
        </>
    )
}

export default UseStateObject