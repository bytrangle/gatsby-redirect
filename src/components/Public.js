import React from "react"
import { Container, Heading, Button, Flex, Box } from "theme-ui"

const Public = ({ identity }) => {
  return (
    <Container pt={6} sx={{ textAlign: "center" }}>
      <Heading as="h1" sx={{ fontSize: "72px" }}>
        Get Nothing Done
      </Heading>
      <Box
        sx={{
          marginTop: "2rem",
        }}
      >
        <Button
          sx={{
            marginRight: 3,
          }}
          onClick={() => {
            identity.open("login")
          }}
        >
          Log In
        </Button>
        <Button
          sx={{
            marginRight: 3,
          }}
          onClick={() => {
            identity.open("signup")
          }}
        >
          Register
        </Button>
      </Box>
    </Container>
  )
}

export default Public
