import React from "react"

const App = () => {
  const { user, identity: netlifyIdentity, loginComplete } = useContext(
    UserContext
  )
  console.log(user)
  console.log(`login state is ${loginComplete}`)
    return (
      <Container>
        <Heading>Hello, {user?.user_metadata?.full_name}</Heading>
        <p>This is the authentication-restricted dashboard</p>
        <Button
          onClick={() => {
            netlifyIdentity.logout()
          }}
        >
          Log Out
        </Button>
      </Container>
    )
}

export default App
