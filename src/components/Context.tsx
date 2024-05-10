"use client";

import  { useContext, createContext, useState, Dispatch, SetStateAction} from 'react';
type defaultV = {
    filter: string,
    search: string,
    setSearch: Dispatch<SetStateAction<string>>,
    setFilter: Dispatch<SetStateAction<string>>
}
const defaultValue:defaultV = {
    filter: "",
    search: "",
    setFilter: (): string => '',
    setSearch: (): string => ''
}
const AppContext = createContext(defaultValue);

const AppProvider = ({children}:{children:React.ReactNode}) => {
        const [filter, setFilter] = useState<string>("");
        const [search, setSearch] = useState<string>(""); 
        return <AppContext.Provider
            value={{
                filter,
                search,
                setFilter,
                setSearch
            }}
        >
            {children}
        </AppContext.Provider>
}

const useGlobalContext = () => {
    return useContext(AppContext);
}

export {useGlobalContext, AppProvider};