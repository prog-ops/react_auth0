import {Route, Switch} from "react-router";
import {createTheme, makeStyles, Theme} from "@mui/material";
import {ThemeProvider} from "@mui/material/styles";
import ProtectedRoute from "../auth/ProtectedRoute";
import routes from "./routes";
import {useAuth0} from "@auth0/auth0-react";
import Loading from "../components/common/Loading";
import {Redirect} from "react-router-dom";

const Routes = () => {
  // const classes = useStyles()

  const { isAuthenticated, isLoading} = useAuth0()

  if (isLoading) {
    return <Loading/>
  }

  return (
      <ThemeProvider theme={theme}>
        <div>
          <div>Header</div>
          <div>
            <Switch>
              <ProtectedRoute
                  exact
                  path={routes.codeEditor} component={<div>Code Editor</div>}
              />
              <Route exact path={routes.home}>
                {isAuthenticated ? <Redirect to={routes.codeEditor} /> : <div>Home</div>}
              </Route>
            </Switch>
          </div>
        </div>
      </ThemeProvider>
  );

  // return (
  //     <ThemeProvider theme={theme}>
  //       <div className={classes.main}>
  //         <div>Header</div>
  //         <div className={classes.page}>
  //           <Switch>
  //             <ProtectedRoute/>
  //           </Switch>
  //         </div>
  //       </div>
  //     </ThemeProvider>
  // )
}

const theme = createTheme();

const useStyles = makeStyles((theme: Theme) => ({
  main: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  page: {
    height: '100%',
    color: theme.palette.primary,
  }
}))

export default Routes
