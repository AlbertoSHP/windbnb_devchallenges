import { Box, Stack, useTheme, Divider, Typography, Button
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import useWindowsResize from '../../../hooks/useWindowsResize';
import { useContext, useEffect, useState } from 'react';
import { FilterComponent, SearchContext } from '..';

export const SearchComponent = () => {
    const theme = useTheme()
    const { searchByFilters, toggleOpenSearch, state: { location, adultGuests, childrenGuests }, open } = useContext(SearchContext)
    const { width, isMobile } = useWindowsResize()

    const [filterSelected, setFilterSelected] = useState('')

    const filterClicked = (filter: string) => {
        if (!open){
            toggleOpenSearch()
            setFilterSelected('')
        }
        setFilterSelected(filter)
    }

    const searchStays = () => {
        toggleOpenSearch()
        setFilterSelected('')
        searchByFilters()
    }

    useEffect(() => {
      if (!open){
        setFilterSelected('')
      }
    }, [open])
    

  return (
    <Box sx={{
        ...(width > 900 ? null : {
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            flexDirection: open ? 'column' : 'row',
            paddingTop: '55px',
        }),
        ...( open && { width: '100%', ...( isMobile ? { paddingTop: '20px' } : { paddingTop: '55px' })  })
    }}>
        { (isMobile && open) &&
            <Stack direction={'row'} justifyContent={'space-between'}>
                <Typography sx={{ marginBottom: '20px' }}>Edit your search</Typography>
                <CloseIcon sx={{cursor: 'pointer'}} onClick={ toggleOpenSearch } />
            </Stack>
        }
        <Stack
            direction={ (isMobile && open ) ? 'column' : 'row'}
            width={ open ? '100%' : isMobile ? '90%' :'297px'}
            height={ (isMobile && open ) ? '113px' : '55px' }
            justifyContent= 'space-evenly'
            alignItems= 'center'
            border={'1px solid #F2f2f2'}
            borderRadius={ '16px' }
            boxShadow={'0px 0px 12px 1px #F2f2f2;'}
        >
            <Box 
                onClick={ () => filterClicked('location') }
                sx={{
                    flexGrow: 1,
                    display: 'flex',
                    height: '100%',
                    flexShrink: 'auto',
                    alignItems: open ? 'left' : 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    flexDirection: 'column',
                    ...( open && { alignItems: 'flex-start',  width: isMobile ? '100%' : '30%' }),
                    ...( filterSelected === 'location' && { border: '1px solid #333333', borderRadius: '16px' } )
                }}
            >
                { open && <Typography sx={{ paddingLeft: '35px', }} variant='subtitle1'>LOCATION</Typography>}
                <Typography
                    variant='h3'
                    sx={{
                        textTransform: 'capitalize',
                        textAlign: 'center',
                        color: location ? 'inherit' : theme.palette.info.main,
                        ...( open &&  { paddingLeft: '35px', paddingTop: '5px'})
                    }}
                >
                    {location ? location : 'Add location'}
                </Typography>
            </Box>
            <Divider orientation='vertical' sx={{color: '#F2f2f2', display: (isMobile && open) ? 'none' : null}}/>
            <Box 
                onClick={ () => filterClicked('guests')  }
                sx={{
                    flexGrow: 1,
                    display: 'flex',
                    height: '100%',
                    flexShrink: 'auto',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    flexDirection: 'column',
                    ...( open &&  { alignItems: 'flex-start', width: isMobile ? '100%' : '30%' }),
                    ...( filterSelected === 'guests' && { border: '1px solid #333333', borderRadius: '16px' } )
            }}>
                { open && <Typography sx={{ paddingLeft: '35px', }} variant='subtitle1'>GUESTS</Typography>}
                <Typography
                    variant='h3'
                    sx={{
                        textTransform: 'capitalize',
                        textAlign: 'center' ,
                        color: (adultGuests || childrenGuests) ? 'inherit' : theme.palette.info.main,
                        ...( open &&  { paddingLeft: '35px', paddingTop: '5px'})
                    }}>
                    {(adultGuests || childrenGuests) ? ((adultGuests + childrenGuests).toString()+' guests ') : 'Add guests'}
                </Typography>
            </Box>
            {   
                <>
                    <Divider orientation='vertical' sx={{color: '#F2f2f2', display: (isMobile && open) ? 'none' : null}}/>
                    <Box sx={{
                            flexGrow: 1,
                            display: isMobile && open ? 'none' : 'flex',
                            height: '100%',
                            flexShrink: 'auto',
                            alignItems: 'center',
                            justifyContent: 'center',
                            ...( open &&  { width: '20%' }),
                    }}>
                        { open ? 
                            <Button onClick={ searchStays } variant='contained' size='large' color='secondary' sx={{ boxShadow: 'none' ,borderRadius: '15px', textTransform:'capitalize' }} startIcon={ <SearchIcon /> }>
                                Search
                            </Button>
                            :
                            <SearchIcon onClick={ toggleOpenSearch } sx={{color: theme.palette.secondary.main, cursor: 'pointer'}}></SearchIcon>
                        }
                    </Box>
                </>
            }
        </Stack>
        <FilterComponent filterSelected={filterSelected} />
        <Stack justifyContent={'center'} alignItems={'center'}>
            {
                isMobile && open &&
                <Button onClick={ searchStays } variant='contained' size='large' color='secondary' sx={{ StackShadow: 'none' ,borderRadius: '15px', textTransform:'capitalize' }} startIcon={ <SearchIcon /> }>
                    Search
                </Button>
            }
        </Stack>
           
    </Box>
  )
}
