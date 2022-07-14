import { extendTheme, ThemeConfig } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const fonts = { mono: `'Menlo', monospace` }

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
})

const theme = extendTheme({
  initialColorMode: 'dark',
  useSystemColorMode: false,
  semanticTokens: {
    colors: {
      text: {
        _dark: '#5D3FD3',
      },
      heroGradientStart: {
        _dark: '#5D3FD3',
      },
      heroGradientEnd: {
        _dark: '#F54040',
      },
    },
    radii: {
      button: '12px',
    },
  },
  colors: {
    black: '#16161D',
  },
  fonts,
  breakpoints,
} as ThemeConfig);

export default theme
