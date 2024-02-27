import { createContext, useState } from "react";

export const HomeContext = createContext();

const HomeProvider = ({children}) => {

  return (
    <HomeContext.Provider 
      value={{}}
    >
      {children }
    </HomeContext.Provider>
  )
}

export default HomeProvider