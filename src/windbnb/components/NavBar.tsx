import { Box, Stack } from '@mui/material'
import { SearchComponent, SearchContext } from '../search'
import useWindowsResize from '../../hooks/useWindowsResize'
import { useContext } from 'react';

export const NavBar = () => {
  const { width } = useWindowsResize()
  const { open } = useContext(SearchContext)

  return (
    <Box
        sx={{ 
        position: 'fixed',
        width: '100%',
        paddingTop: width > 900 ? '33px' : '10px',
        backgroundColor: 'white',
        height: width > 900 ? ( open ? '460px' : '100px'): ( open ? '632px' : '130px'),
        zIndex: 2
      }}
    >
      <Stack
        justifyContent={ ' space-between' }
        alignItems={ width > 900 ? 'center' : 'flex-start' }
        direction={ width > 900 ? 'row' : 'column' }
        margin= {'0 '+( width > 900 ? '90px' : '10px' )}
        {...( width > 900 ? null :{ height: '100%' } )}
      >
        {!open && <img src='./logo.png' alt='image' />}
        <SearchComponent />
      </Stack>
    </Box>
  )
}
