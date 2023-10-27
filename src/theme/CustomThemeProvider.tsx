import {PropsWithChildren} from "react";
import {useAppSelector} from "../store/hooks";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {appColors, darkModeColors} from "./colors";

const CustomThemeProvider = (props: PropsWithChildren<{}>) => {
  const darkMode = useAppSelector((state) => state.darkMode)

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light", // (type)
      primary: {
        main: appColors.primary
      }
    },
    background: darkMode ? darkModeColors.background : appColors.background,
    font: darkMode ? darkModeColors.font : appColors.font,
  })

  return <ThemeProvider theme={theme}>
    {props.children}
  </ThemeProvider>
}
export default CustomThemeProvider

declare module '@mui/material/styles/createTheme' {
  interface Theme {
    background: string
    font: string
  }
  interface ThemeOptions {
    background: string
    font: string
  }
}
