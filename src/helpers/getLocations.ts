import { staysData } from "./stays";



export const getStaysLocation = () => {
    return staysData.filter((stay, index, array) => {
        const stayIndex = array.findIndex((s) => stay.city === s.city);
        return index === stayIndex;
      })
      .map((location) => (location.city+', '+location.country));
}