import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataContextProvider = ({children}) => {

    const [firstdata, setFirstData] = useState([])

    const handleFirstData = (data) => {
        setFirstData(data)
    }

    const value = {firstdata, handleFirstData}

  return (
    <DataContext.Provider value={value}>
        {children}
    </DataContext.Provider>
  )
}
