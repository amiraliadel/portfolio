import React, {createContext, useEffect, useState} from "react";
import data from '../data.js';

const DataCtx = createContext({});

function DataProvider ({children}) {
    const [infos, setInfos] = useState('');

    useEffect(() => {
        (async () => {
            setInfos(data.EN);
            //console.log(data);
        })();
    }, []);

    const handleLanguage = (lan) => {
        lan === 'de' ? setInfos(data.EN) : setInfos(data.DE);
    }
    return (
        <DataCtx.Provider value={{infos, handleLanguage}}>
            {children}
        </DataCtx.Provider>
    );
}
export {DataCtx, DataProvider};