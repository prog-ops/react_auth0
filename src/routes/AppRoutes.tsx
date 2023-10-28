import {Route, Switch} from "react-router";
import {createTheme, makeStyles, Theme} from "@mui/material";
import {ThemeProvider} from "@mui/material/styles";
import ProtectedRoute from "../auth/ProtectedRoute";
import routes from "./routes";
import {useAuth0} from "@auth0/auth0-react";
import Loading from "../components/common/Loading/Loading";
import {Redirect} from "react-router-dom";
import Header from "../components/common/Header/Header";

const AppRoutes = () => {
  // const classes = useStyles()

  const { isAuthenticated, isLoading} = useAuth0()

  if (isLoading) {
    return <Loading/>
  }

  const CodeEditor = () => <div>Code Editor App</div>

  return (
      <ThemeProvider theme={theme}>
        <div>
          <Header/>
          <div>
            <Switch>
              <ProtectedRoute exact path={routes.codeEditor}>
                asfdsfds
              {/*  masih bermasalah disini, harusnya disini {CodeEditor} */}
              </ProtectedRoute>
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

/*! MUI: makeStyles is no longer exported from @mui/material/styles.
You have to import it from @mui/styles.
See https://mui.com/r/migration-v4/#mui-material-styles for more details.
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
}))*/

export default AppRoutes
