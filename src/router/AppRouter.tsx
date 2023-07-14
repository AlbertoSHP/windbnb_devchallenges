import { Routes, Route, Navigate } from 'react-router-dom'
import { MainPage } from '../windbnb/pages/MainPage'

export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={ <MainPage /> } />
        <Route path='/*' element={ <Navigate  to="/"/> } />
    </Routes>
  )
}
