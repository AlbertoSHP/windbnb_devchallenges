import { Box, useTheme } from '@mui/material'
import { ReactNode } from 'react'

interface WindbnbLayoutProps {
    children: ReactNode
}

export const WindbnbLayout = (props: WindbnbLayoutProps) => {
    const theme = useTheme()

  return (
    <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            backgroundColor: theme.palette.background.default
        }}
    >
        { props.children }
    </Box>
  )
}
