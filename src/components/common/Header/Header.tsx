import {useAuth0} from "@auth0/auth0-react";
import {useAppDispatch, useAppSelector} from "../../../store/hooks";
import {toggleDarkMode} from "../../../store/dark-mode/reducer";
import {AppBar, ToggleButton, Switch, Toolbar, Typography} from "@mui/material";
import {Check, CheckOutlined, Circle, CircleTwoTone, DarkModeRounded} from "@mui/icons-material";
import UnauthenticatedButton from "./UnauthenticatedButton";
import AuthenticatedButton from "./AuthenticatedButton";

const Header =  () => {
  const { isAuthenticated } = useAuth0()
  const dispatch = useAppDispatch()
  const darkMode = useAppSelector(state => state.darkMode)

  const onChangeDarkMode = () => {
    dispatch(toggleDarkMode())
  }

  return (
      <AppBar position='relative'>
        <Toolbar>
          <Typography variant='h6' sx={{ flex: 1 }}>
            Code Editor App
          </Typography>
          <DarkModeRounded/>
          <Switch
              onChange={onChangeDarkMode}
              color='default'
              checked={darkMode}
              checkedIcon={<CircleTwoTone/>}
              icon={<Circle/>}
          />
          {isAuthenticated
              ? <AuthenticatedButton/>
              : <UnauthenticatedButton/>
          }
        </Toolbar>
      </AppBar>
  )
}
export default Header
