import React, { createContext, useEffect, useState } from "react"
import netlifyIdentity from "netlify-identity-widget"

const UserContext = createContext({})

const IdentityProvider = ({ children }) => {
  const [loggedInUser, setUser] = useState()
  const [loginComplete, setLoginState] = useState(false)
  useEffect(() => {
    netlifyIdentity.init()
  })
  netlifyIdentity.on("init", user => {})
  netlifyIdentity.on("login", user => {
    console.log("logging in")
    netlifyIdentity.close()
    setUser(user)
    setLoginState(true)
  })
  netlifyIdentity.on("logout", () => {
    console.log("logging out")
    netlifyIdentity.close()
    setUser()
  })
  return (
    <UserContext.Provider
      value={{ identity: netlifyIdentity, user: loggedInUser, loginComplete }}
    >
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, IdentityProvider }
