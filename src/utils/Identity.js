import React, { createContext, useEffect, useState } from "react"
import netlifyIdentity from "netlify-identity-widget"

const UserContext = createContext({})

const IdentityProvider = ({ children }) => {
  const [loggedInUser, setUser] = useState()
  useEffect(() => {
    netlifyIdentity.init()
  })
  netlifyIdentity.on("login", user => {
    console.log("logging in")
    console.log(user)
    netlifyIdentity.close()
    setUser(user)
  })
  netlifyIdentity.on("logout", () => {
    console.log("logging out")
    netlifyIdentity.close()
    setUser()
  })
  return (
    <UserContext.Provider
      value={{ identity: netlifyIdentity, user: loggedInUser }}
    >
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, IdentityProvider }
