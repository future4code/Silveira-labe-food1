import { createMuiTheme } from '@material-ui/core/styles'
import { colorsOne, colorsTwo, colorsTree, colorsFour, colorFive} from './colors'

const theme = createMuiTheme ({
    palette: {
        primary: {
            main: colorsOne,
            contrastText: "white"

        },
        secondary:{
            main: colorsTwo,
            contrastText: "white"

        },
        text: {
        primary: colorsTwo
    }
}})

export default theme 