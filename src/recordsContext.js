import React, { createContext, useContext } from 'react';
import { createRecordsStore } from './recordsStore';
import { useLocalObservable } from 'mobx-react'

const RecordsContext = createContext(null);
const useRecordsStore = () => useContext(RecordsContext)


const RecordsProvider = ({children}) => {
    const recordsStore = useLocalObservable(createRecordsStore);
    return (
        <RecordsContext.Provider  value={recordsStore}>
            {children}
        </RecordsContext.Provider>
    )
}
export {RecordsProvider, useRecordsStore}