import React, { createContext, useState } from 'react'
import MyContext from './MyContext.js'

const MyContextContainer = ({ children }) => {
  const [username, setUsername] = useState(null)

  return (
    <MyContext.Provider
      value={{
        username,
        setUsername
      }}
    >
      {children}
    </MyContext.Provider>
  )
}

export default MyContextContainer
