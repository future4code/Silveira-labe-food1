import {createTheme} from '@mui/material/styles'
import { colorsOne, colorsTwo, colorsTree, colorsFour, colorFive} from './colors'

const theme = createTheme ({
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