import { getStaysLocation } from '../../../../helpers/getLocations';
import PlaceIcon from '@mui/icons-material/Place';
import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { useContext } from 'react';
import { SearchContext } from '../..';


interface LocationFilterComponentProp {
    filterSelected: string;
  }

export const LocationFilterComponent = ({ filterSelected }: LocationFilterComponentProp) => {
    const { setLocation } = useContext(SearchContext)
     
  const handleListItemClick = (value: string) => {
    //setFilters({key: 'location', value: value});
    setLocation(value)
  };

  return (
    <>
    {
        (filterSelected === 'location') &&
        <List component={'ul'}>
            {
                getStaysLocation().map( (location, index) => (
                    <ListItemButton
                        key={index}
                        onClick={ () => handleListItemClick(location)}
                        sx={{ marginTop: '15px', fontWeight: 400 }}
                    >
                        <ListItemIcon>
                            <PlaceIcon />
                        </ListItemIcon>
                        <ListItemText primary={location} disableTypography/>
                    </ListItemButton>
                ))
            }
        </List>
    }
    </>
  )
}
