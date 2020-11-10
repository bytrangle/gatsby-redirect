import React, { useContext, useEffect } from "react"
import { navigate } from "gatsby"
import { UserContext } from "../utils/Identity"
import Public from "../components/Public"

const LandingPage = () => {
  const { user, identity } = useContext(UserContext)
  return <Public identity={identity} />
}

export default LandingPage
