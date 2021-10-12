import React, { createContext, useState } from 'react'
import MyContext from './MyContext.js'

const MyContextContainer = ({ children }) => {
  const [username, setUsername] = useState(null)
  const [loadingData, setLoadingData] = useState(false)
  return (
    <MyContext.Provider
      value={{
        username,
        setUsername,
        loadingData, 
        setLoadingData
      }}
    >
      {children}
    </MyContext.Provider>
  )
}

export default MyContextContainer
