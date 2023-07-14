import { createContext } from 'react'
import { FilterAction } from '..';

interface SearchContextModel {
    open: boolean
    toggleOpenSearch: () => void;
    filteredStays: StayData[];
    searchByFilters: () => void;
    state: StayFilterModel;
    setLocation: (newLocation: string) => void;
    setGuests: (value: FilterAction) => void;
}

export interface StayFilterModel {
    location: string;
    adultGuests: number,
    childrenGuests: number
}

export interface StayData {
    city: string
    country: string
    superHost: boolean
    title: string
    rating: number
    maxGuests: number
    type: string
    beds: number | null
    photo: string
}

export const SearchContext = createContext({} as SearchContextModel)