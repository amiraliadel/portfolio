import React, {createContext, useEffect, useState} from "react";
import data from '../data.js';

const DataCtx = createContext({});

function DataProvider ({children}) {
    const [infos, setInfos] = useState('');

    useEffect(() => {
        (async () => {
            setInfos(data);
        })();
    }, []);

    return (
        <DataCtx.Provider value={infos}>
            {children}
        </DataCtx.Provider>
    );
}
export {DataCtx, DataProvider};