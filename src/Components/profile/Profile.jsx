import React from 'react';
import styles from './Profile.module.css';
import profile1 from '../../assets/profile1.png';
import { AiOutlineTwitter, AiOutlineGithub, AiOutlineGooglePlus } from 'react-icons/ai'
import { IconContext } from 'react-icons';
import Card from '../UI/card/Card';



const Profile = ({ image, name, job, company, link }) => {
  return (
    <Card>
      <div className={styles.profile}>
        <img src={image} alt="profile" />
        <div className={styles["profile-content"]}>
          <h3>My Profile</h3>

          <div className={styles.text}>
            <p>Name : </p>
            <p>{name}</p>
          </div>

          <div className={styles.text}>
            <p>job : </p>
            <p>{job}</p>
          </div>

          <div className={styles.text}>
            <p>company : </p>
            <p>{company} </p>
          </div>

          <IconContext.Provider value={{ color: "#666", size: "20px" }}>
            <div className={styles.icons}>
              <AiOutlineTwitter />
              <AiOutlineGithub />
              <AiOutlineGooglePlus />
            </div>
          </IconContext.Provider>

          <div className={styles.btn}>
            <a href={link} target="_blank" rel='noreferrer'>View Profile</a>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default Profile