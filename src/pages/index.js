import React, { useContext, useEffect, useState } from "react"
import { navigate } from "gatsby"
import { UserContext } from "../utils/Identity"
import Public from "../components/Public"

const LandingPage = () => {
  const { user, identity, loginComplete } = useContext(UserContext)
  console.log(user)
  useEffect(() => {
    if (user) {
      navigate("/app")
    }
  })
  if (!user && loginComplete) return <Public identity={identity} />
  return <h1>Loading...</h1>
}

export default LandingPage
