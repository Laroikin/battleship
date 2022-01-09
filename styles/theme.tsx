import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools'
const config: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
    cssVarPrefix: '',
}


const styles = {
    global: (props: any) => ({
        '*': {
            outlineWidth: '0!important'
        },
        body: {
            bg: mode("#f5f5f7", "#111")(props),
            transitionDuration: '250ms',
            overscrollBehavior: 'none',
            scrollBehavior: 'smooth',
            overflow: {md: 'unset!important'},
        },
        "#__next": {
            d: 'flex',
            flexDirection: 'column',
            minH: '100vh',
        }
    })
}

const colors = {
    link: {
        "default": 'white',
        "hover": "#d8d8d8",
        "active": "blue",
    },
    whiteAlpha: {
        250: 'rgba(255, 255, 255, 0.12)'
    }
}

const fonts = {
    heading: "Poppins, Avenir Next, sans-serif",
    body: "Poppins, Avenir Next, sans-serif",
}

const components = {}

const overrides = {}

const theme = extendTheme({ styles, config, fonts, colors, components, overrides })

export default theme;
