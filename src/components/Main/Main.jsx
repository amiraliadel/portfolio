import React from "react";
import Sidebar from "./Sidebar";
import Sections from './Sections';
import styles from './Main.module.css';

export default function Main () {

    return (<>
        <div className={styles.main}>
            <Sidebar />
            <Sections />
        </div>  
    </>);
}