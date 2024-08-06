import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header'
import { HomePage } from './pages/Home'
import { LaundryPage } from './pages/Laundry'
import { TaxiPage } from './pages/Taxi'
import { GongguPage } from './pages/Gonggu'
import { TripPage } from './pages/Trip'
import { UserPage } from './pages/User'
import { TicketPage } from './pages/Ticket'
import { TripListPage } from './pages/TripList'
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/laundry' element={<LaundryPage />} />
        <Route path='/taxi' element={<TaxiPage />} />
        <Route path='/gonggu' element={<GongguPage />} />
        <Route path='/trip' element={<TripPage />} />
        <Route path='/user' element={<UserPage />} />
        <Route path='/user/:id' element={<TicketPage />} />
        <Route path='/trip/:id' element={<TripListPage />} />
      </Routes>
    </Router>
  )
}

export default App
