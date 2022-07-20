import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            light: '#c25959',
            main: '#B33030',
            dark: '#7d2121',
        },
        secondary: {
            light: '#475358',
            main: '#19282F',
            dark: '#111c20',
        },
    },
    typography: {
        fontFamily: "Poppins",
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700
    }
})

export default theme;