import {Box, createTheme} from "@mui/material";
import ProgrammingList from "../../components/Home/ProgrammingList";

const Home = () => {

  return (//div not Box
      <Box sx={styles.root}>
        <div style={styles.welcomeMessage}>
          Welcome to Code Editor App
        </div>
        <ProgrammingList/>
      </Box>
  )
}

const theme = createTheme()

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.background
  },
  welcomeMessage: {
    padding: '15px',
    fontSize: '30px',
    color: theme.font
  }
}

export default Home
