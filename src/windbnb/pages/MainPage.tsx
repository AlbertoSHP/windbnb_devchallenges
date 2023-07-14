import { WindbnbLayout } from '../layout/WindbnbLayout'
import { NavBar, StaysListView } from '../components'
import { Footer } from '../../ui/Footer'
import { SearchProvider } from '../search'

export const MainPage = () => {
  return (
    <WindbnbLayout>
      <SearchProvider>
        <NavBar />
        <StaysListView />
        <Footer />
      </SearchProvider>
    </WindbnbLayout>
  )
}
