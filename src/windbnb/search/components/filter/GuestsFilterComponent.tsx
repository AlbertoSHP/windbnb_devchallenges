import { Box, Stack, Typography, IconButton } from '@mui/material'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useCallback, useContext } from 'react';
import { SearchContext } from '../..';
import { types } from '../../context/FilterTypes';

interface GuestsFilterComponentProp {
  filterSelected: string;
}

export const GuestsFilterComponent = ({ filterSelected }: GuestsFilterComponentProp) => {
  
  const { state: { adultGuests, childrenGuests }, setGuests } = useContext(SearchContext)
  
  const addGuest = useCallback((type: string) => (
    setGuests({type: type, payload: 1})
  // eslint-disable-next-line react-hooks/exhaustive-deps
  ), [adultGuests, childrenGuests])

  const removeGuest = (type: string) => {
    setGuests({type: type, payload: -1})
  }
  
  return (
    <>
      {
        (filterSelected === 'guests') && 
        <Box sx={{ marginLeft: '15px' }}>
            <Box  sx={{ marginBottom: '50px' }}>
                <Typography variant='body1'>Adults</Typography>
                <Typography variant='body2' sx={{color: '#bdbdbd', marginTop: '4px'}}>Ages 13 or above</Typography>
                <Stack direction={'row'} alignItems={'center'} sx={{ paddingTop: '15px' }}>
                    <IconButton onClick={() => removeGuest(types.updateAdultGuests)} sx={{ border: '1px solid #828282', borderRadius: 1, width: '27px', height: '27px' }}>
                        <RemoveIcon sx={{color: '#828282', fontSize: '15px'}}/>
                    </IconButton>
                    <Typography variant='body1' sx={{ paddingLeft: '15px', paddingRight: '15px' }}>{adultGuests}</Typography>
                    <IconButton onClick={() => addGuest(types.updateAdultGuests)} sx={{ border: '1px solid #828282', borderRadius: 1, width: '27px', height: '27px' }}>
                        <AddIcon sx={{color: '#828282', fontSize: '15px'}}/>
                    </IconButton>
                </Stack>
            </Box>
            <Box>
                <Typography variant='body1'>Children</Typography>
                <Typography variant='body2' sx={{color: '#bdbdbd', marginTop: '4px'}}>Ages 2 -12</Typography>
                <Stack direction={'row'} alignItems={'center'} sx={{ paddingTop: '15px' }}>
                    <IconButton onClick={() => removeGuest(types.updateChildrenGuests)} sx={{ border: '1px solid #828282', borderRadius: 1, width: '27px', height: '27px' }}>
                        <RemoveIcon sx={{color: '#828282', fontSize: '15px'}}/>
                    </IconButton>
                    <Typography variant='body1' sx={{ paddingLeft: '15px', paddingRight: '15px' }}>{childrenGuests}</Typography>
                    <IconButton onClick={() => addGuest(types.updateChildrenGuests)} sx={{ border: '1px solid #828282', borderRadius: 1, width: '27px', height: '27px' }}>
                        <AddIcon sx={{color: '#828282', fontSize: '15px'}}/>
                    </IconButton>
                </Stack>
            </Box>
        </Box>
    }
    </>
  )
}
