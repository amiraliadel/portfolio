import React, {useState, useEffect, useContext} from "react";
import {DataCtx} from "../../context/Data";
import styles from './Main.module.css';

export default function Sidebar () {
    const {infos} = useContext(DataCtx);
    const [dataSkills, setDataSkills] = useState([]);

    useEffect(() => {
        setDataSkills(infos.skills);
    }, [infos.skills]);

    return (<>
        <div className={styles.sidebar}>
            <div className={styles.skills}>
                <div className={styles.title}>
                    <h2>skills</h2>
                </div>
                <div className={styles.lists}>
                    {(() => {
                        if (dataSkills !== undefined) {
                            return (
                                dataSkills.map(skill => {
                                return(<>
                                    <ul key={skill.title}>{skill.title}:
                                        {skill.elements.map(el => {
                                            return(<>
                                                <li key={el}>{el}</li>
                                            </>);
                                        })}
                                    </ul>
                                </>);
                                })
                            );    
                        }
                    })()}              
                </div>
            </div>
        </div>
    </>);
}