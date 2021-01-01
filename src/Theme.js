import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#1A92E5",
        },
        textColor: {
            main: '#1A92E5'
        },
        secondary: {
            main: "#293557",
        },
        normalLight: {
            main: "#A1A1A1"
        }
    },
    typography: {
        fontFamily: 'Source Sans Pro'
    }
});
export default theme;