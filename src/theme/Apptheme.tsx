import { ThemeProvider } from '@emotion/react'
import { ReactNode } from 'react'
import { windbnbTheme } from '.'

interface AppThemeProps {
    children: ReactNode
}

export const Apptheme = (props: AppThemeProps) => {
  return (
    <ThemeProvider theme={ windbnbTheme }>
        { props.children }
    </ThemeProvider>
  )
}
