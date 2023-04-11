import React from 'react';
import Profile from './Profile';
import styles from './ProfileList.module.css';
import { profilesData } from '../../Data';

const ProfileList = () => {
    return (
        <section className={styles.center}>
            <div className="">
                <h1>Teams Members</h1>
                <div className={styles["profile-container"]}>
                    {profilesData.map((item, index) => {
                        const { name, img, link, job, company } = item
                        return (
                            < Profile
                                key={index}
                                image={img}
                                name={name}
                                job={job}
                                company={company}
                                link={link}
                            />
                        )

                    })}
                </div>
            </div>
        </section>
    )
}

export default ProfileList