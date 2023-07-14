import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

export const windbnbTheme = createTheme({
    typography: {
        fontFamily: "'Montserrat'",
        h1: {
            fontSize: '24px',
            fontWeight: 700,
            lineHeight: '29px',
            letterSpacing: '0em',
            textAlign: 'left',
        },
        h2: {
            fontSize: '16px',
            fontWeight: 600,
            lineHeight: '20px',
            letterSpacing: '0em',
            textAlign: 'right',
        },
        h3: {
            fontSize: '14px',
            fontWeight: 500,
            lineHeight: '17px',
            letterSpacing: '0em',
            textAlign: 'left',
        },
        h4: {
            fontSize: '16px',
            fontWeight: 600,
            lineHeight: '19.5px',
            '@media (max-width:1000px)': {
                fontSize: '14px',
            }
        },
        h5: {
            fontSize: '14px',
            fontWeight: 500,
            lineHeight: '17px',
            letterSpacing: '0em',
            '@media (max-width:1000px)': {
                fontSize: '12px',
            }
        },
        h6: {
            fontSize: '12px',
            fontWeight: 700,
            lineHeight: '14.63px',
            '@media (max-width:1100px)': {
                fontSize: '10px',
            }
        },
        body1 : {
            fontSize: '14px',
            fontWeight: 700,
            lineHeight: '17px',
        },
        body2 : {
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '17px',
        },
        subtitle1: {
            fontSize: '9px',
            fontWeight: 800,
            lineHeight: '11.29px'
        }
    },
    palette: {
        background: {
            default: '#ffffff'
        },
        primary: {
            main: '#333333',
        },
        secondary: {
            main: '#EB5757'
        },
        text: {
            primary: '#333333',
            secondary: '#828282',
        },
        info: {
            light: '#828282',
            main: grey[400], //#bdbdbd
            
        }
    }
})