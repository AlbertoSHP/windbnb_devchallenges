import { Stack, Grid, Box, Card, CardMedia, Typography } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';
import { StayData } from '../search';

export const StayView = (stayData: StayData) => {

  return (
    <Grid item md={4} xs={12}>
        <Box 
            className={ 'animate__animated animate__fadeIn' }
            sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
        >
            <Card elevation={0}>
                <CardMedia
                    width={'395px'}
                    height={'269px'}
                    component='img'
                    image={stayData.photo}
                    sx={{
                        borderRadius: '20px'
                    }}
                />
            </Card>
            <Stack direction={'column'} gap={'5px'} height={'60px'} justifyContent={'space-around'}>
                <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        {
                            stayData.superHost ?
                            <Box sx={{
                                width: '100px',
                                height: '28px',
                                display: 'flex',
                                border: '1px solid #4F4F4F',
                                color: '#4F4F4F',
                                borderRadius: '15px',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginRight: '5px'
                            }}>
                                <Typography color={'#4F4F4F'} variant='h6'>
                                    SUPER HOST
                                </Typography>
                            </Box>
                            : 
                            <></>
                        }
                        <Typography variant='h5' sx={{ color: '#828282' }}>
                            {stayData.type}
                        </Typography>
                        <Typography variant='h5' sx={{ color: '#828282' }}>
                            {
                                stayData.beds ?
                                (`. ${stayData.beds}` + (stayData.beds > 1 ? ' beds' : ' bed'))
                                : '' 
                            }
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <StarIcon sx={{ width: '18px', marginRight: '3px', color: (theme) => theme.palette.secondary.main }}/>
                        <Typography variant='h5'>
                            {stayData.rating}
                        </Typography>
                    </Box>
                </Stack>
                <Typography variant='h4'>{stayData.title}</Typography>
            </Stack>
        </Box>
    </Grid>
  )
}
