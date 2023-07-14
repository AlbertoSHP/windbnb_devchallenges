import { Stack, Typography, useTheme } from '@mui/material'

export const Footer = () => {
  const theme = useTheme()

  return (
    <Stack sx={{ padding: '30px 0', textAlign: 'center' }}>
      <Typography variant='h5' color={theme.palette.text.secondary}>
        created by <b><u>Alberto Sánchez-Heredero Pérez</u></b> - devChallenges.io
      </Typography>
    </Stack>
  )
}
