import {useAuth0} from "@auth0/auth0-react";
import {Button} from "@mui/material";

const SignIn = () => {
  const { loginWithRedirect } = useAuth0()

  const onLogin = () => {
    loginWithRedirect()
  }

  return (
      <Button onClick={onLogin}>
        Sign In
      </Button>
  )
}

export default SignIn
