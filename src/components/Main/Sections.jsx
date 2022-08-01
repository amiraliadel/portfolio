import React, {useState, useEffect, useContext} from "react";
import { DataCtx } from "../../context/Data";
import styles from './Main.module.css';

export default function Sections () {
    const {infos} = useContext(DataCtx);
    const [dataSections, setDataSections] = useState([]);

    useEffect(() => {
        setDataSections(infos.sections);
    }, [infos.sections]);

    return (<>
        <div className={styles.container}>
        {(() => {
            if (dataSections !== undefined) {
                return (dataSections.map(section => {
                    return (
                        <section key={section.title}>
                            <div className={styles.title}>
                                <h2>{section.title}</h2>
                            </div>
                            <div className={styles.content}>
                               {section.elements.map(element => {
                                return (
                                    <div key={element.title}>
                                        <div className={styles.listTitle}>
                                            <h2>{element.title}</h2>
                                        </div>
                                        <div className={styles.listSubtitle}>
                                            <h2>{(element.subtitle.includes('http')) ? <a href={element.subtitle}>{element.subtitle}</a>: element.subtitle}</h2>
                                            <h3>{element.date}</h3>
                                        </div>
                                        <div className={styles.list}>
                                            <ul>
                                                {element.elements.map(el => <li key={el}>{el}</li>)}
                                            </ul>
                                        </div>
                                    </div>
                                )
                               })}
                            </div>
                        </section>
                    );
                }));
            }
        })()}
        </div>
    </>);
} 