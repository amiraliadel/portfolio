import React, {useContext, useEffect, useState} from "react";
import {DataCtx} from '../../context/Data';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {solid, brands} from '@fortawesome/fontawesome-svg-core/import.macro';
import styles from './Header.module.css';

export default function Header () {
    const {infos, handleLanguage} = useContext(DataCtx);
    const [data, setData] = useState({});
    const [language, setLanguage] = useState('de');

    useEffect(() => {
        setData(infos);
    }, [infos]);

    const changeLanguage = () => {
        if (language === 'de') {
            handleLanguage('en');
            setLanguage('en');
        } else {
            handleLanguage('de');
            setLanguage('de');
        }
    }

    return (<>
        <div className={styles.header}>
           <div className={styles.contacts}>
               <div className={styles.fix}>
               </div>
               <div className={styles.phone}>
                   <FontAwesomeIcon icon={solid('phone')} className={styles.icons}/>
                   <p>{data.phone}</p>
               </div>
               <div className={styles.address}>
                   <FontAwesomeIcon icon={solid('house')} className={styles.icons}/>
                   <p>{data.address}</p>
               </div>
           </div>
           <div className={styles.head}>
               <div className={styles.top}>
                   <div className={styles.title}>
                       <h1>{data.firstname}</h1>
                       <h2>{data.lastname}</h2>
                   </div>
                   <div className={styles.links}>
                    <div className={styles.social}>
                        <a href={(data.social !== undefined) ? data.social.github: ''}>
                            <FontAwesomeIcon icon={brands('github')} className={styles.icons}/>
                        </a>
                        <a href={(data.social !== undefined) ? data.social.linkedin: ''}>
                            <FontAwesomeIcon icon={brands('linkedin')} className={styles.icons}/>
                        </a>
                        <a href={`mailto:${data.email}`}>
                            <FontAwesomeIcon icon={solid('at')} className={styles.icons}/>
                        </a>
                    </div>
                    <div className={styles.lan}>
                        <span onClick={changeLanguage}>{language}</span>
                    </div>
                   </div>
               </div>
               <div className={styles.subtitle}>
                   <h2>{data.jobTitle}</h2>
               </div>
               <div className={styles.about}>
                   <h2>about me</h2>
                   <p>{data.about}</p>
               </div>
           </div>
       </div>      
   </>);
}