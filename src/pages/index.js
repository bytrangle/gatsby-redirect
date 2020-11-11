import React, { useContext, useEffect, useState } from "react"
import { navigate } from "gatsby"
import { UserContext } from "../utils/Identity"
import Public from "../components/Public"

const LandingPage = () => {
  const { user, identity, loginComplete } = useContext(UserContext)
  console.log(user)
  return <Public identity={identity} />
}

export default LandingPage
