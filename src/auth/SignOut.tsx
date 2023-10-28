import {useAuth0} from "@auth0/auth0-react";
import {Button} from "@mui/material";

const SignOut = () => {
  const { logout } = useAuth0()

  const onLogOut = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin
      }
    })
  }

  return (
      <Button onClick={onLogOut}>
        Sign Out
      </Button>
  )
}

export default SignOut
