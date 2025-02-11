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
import { LaundryWritePage } from './pages/LaundryWrite'
import { TaxiWritePage } from './pages/TaxiWrite'
import { GongguWritePage } from './pages/GongguWrite'
import FloatingIcon from './components/FloatingIcon'
import { LoginPage } from './pages/Login'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/laundry' element={<LaundryPage />} />
        <Route path='/taxi' element={<TaxiPage />} />
        <Route path='/gonggu' element={<GongguPage />} />
        <Route path='/trip' element={<TripPage />} />
        <Route path='/user' element={<UserPage />} />
        <Route path='/user/:id' element={<TicketPage />} />
        <Route path='/laundry/write' element={<LaundryWritePage />} />
        <Route path='/taxi/write' element={<TaxiWritePage />} />
        <Route path='/gonggu/write' element={<GongguWritePage />} />
      </Routes>
      <FloatingIcon />
    </Router>
  )
}

export default App
