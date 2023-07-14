import { Box, Grid, Stack, Typography } from '@mui/material'
import { StayView } from '.'
import useWindowsResize from '../../hooks/useWindowsResize'
import { useContext } from 'react'
import { SearchContext } from '../search'

export const StaysListView = () => {
  const { width } = useWindowsResize()
  const { open, filteredStays, state: { location }, toggleOpenSearch } = useContext(SearchContext)

  return (
    <Box sx={{
        marginTop: width > 900 ? '148px' : '180px',
        marginLeft:  width > 900 ? '90px' : '10px',
        marginRight:  width > 900 ? '90px' : '10px',
        marginBottom: 0,
      }}>
        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
          <Typography variant='h1' sx={{ marginBottom: '30px' }}>
            {'Stays '+ (location ? `in ${location.split(',')[0]}` : '')}
          </Typography>
          <Typography variant='h5' sx={{ marginBottom: '30px' }}>
            { filteredStays.length > 12 ? `12+ stays` : `${filteredStays.length} stays`}
          </Typography>
        </Stack>
        { 
          filteredStays.length > 0 ?
            <Grid container spacing={4}>
              {
                filteredStays.map( (stay, index) => {
                  return (
                    <StayView key={index} {...stay}/>)
                })
              }
            </Grid>
            :
            <Stack alignItems={'center'}>
              <Typography>No results</Typography>
            </Stack>
        }
        <Box
          onClick={toggleOpenSearch}
          sx={{
          ...( open && {
            position: 'fixed',
            width: '100%',
            height: '100%',
            backgroundColor: '#4f4f4f52',
            top: 0,
            left: 0
          })
        }}></Box>
    </Box>
  )
}
