import { Box, Stack } from '@mui/material'
import { useContext } from 'react';
import { GuestsFilterComponent, LocationFilterComponent, SearchContext } from '../..';
import useWindowsResize from '../../../../hooks/useWindowsResize';

interface FilterComponentProp {
  filterSelected: string;
}

export const FilterComponent = ({ filterSelected }: FilterComponentProp) => {
  const { isMobile } = useWindowsResize()
  const { open } = useContext(SearchContext)
  
  return (
    <>{
        open && 
            <Stack direction={'row'}>
                <Box sx={{
                    width: isMobile ? (filterSelected === 'location' ? '100%' : '0%') : '38%'
                }}>
                  <LocationFilterComponent filterSelected={filterSelected} />
                </Box>
                <Box sx={{
                    flexGrow: 2,
                    height: '348px',
                    display: 'flex',
                    alignItems: 'center',
                    ...((filterSelected === 'guests' && isMobile) ? {justifyContent: 'center'} : null)
                }}>
                  <GuestsFilterComponent filterSelected={filterSelected}/>
                </Box>
            </Stack>
      }  
    </>
  )
}
