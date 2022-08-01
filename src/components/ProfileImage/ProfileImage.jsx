import React from "react";
import img from '../../img/myPhoto.png';
import styles from './ProfileImage.module.css';

export default function ProfileImage () {

    return (
        <div className={styles.image}>
            <img src={img} alt="" />
        </div>
    );
}