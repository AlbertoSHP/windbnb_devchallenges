import { ReactNode, useReducer, useState } from 'react'
import { SearchContext, StayData, StayFilterModel, filterReducer, types } from '..'
import { staysData } from '../../../helpers/stays'

const initialValues: StayFilterModel = {
    location: '',
    adultGuests: 0,
    childrenGuests: 0
}

interface SearchProviderProp {
    children: ReactNode
}

export interface FilterAction {
    type: string,
    payload: string | number
}

export const SearchProvider = ({children}: SearchProviderProp) => {
    
    const [state, dispatch] = useReducer(filterReducer, initialValues)
    const [filteredStays, setFilteredStays] = useState<StayData[]>(staysData)
    const [open, setOpen] = useState(false)

    const toggleOpenSearch = () => {
        setOpen(!open)
    }
    
    const setLocation = (newValue: string) => {
        dispatch({type: types.updateLocation, payload: newValue})
    }
    
    const setGuests = (newValue: FilterAction) => {
        const { type, payload } = newValue
        dispatch({type, payload})
    }

    const searchByFilters = () => {
        let tempFilter = staysData.filter(
            stay => (
                (state.adultGuests + state.childrenGuests) <= stay.maxGuests))
        if ( state.location !== '' ){
            tempFilter = tempFilter.filter(
                stay => (
                    (stay.country === getCityAndCountry().country.trim() && stay.city === getCityAndCountry().city)))
        }
        console.log(tempFilter)
        setFilteredStays( tempFilter)
    }

    const getCityAndCountry = () => {
        const [ city , country ] = state.location.split(',')
        return { city, country}
    }

  return ( 
    <SearchContext.Provider value={ {
        state,
        open,
        toggleOpenSearch,
        filteredStays,
        searchByFilters,
        setLocation,
        setGuests
    }}>
        { children }
    </SearchContext.Provider>
  )
}
