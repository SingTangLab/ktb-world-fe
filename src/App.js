import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { Laundry } from './pages/Laundry'
import { Taxi } from './pages/Taxi'
import { Gonggu } from './pages/Gonggu'
import { Trip } from './pages/Trip'
import { User } from './pages/User'
import { Ticket } from './pages/Ticket'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/laundry' element={<Laundry />} />
        <Route path='/taxi' element={<Taxi />} />
        <Route path='/gonggu' element={<Gonggu />} />
        <Route path='/trip' element={<Trip />} />
        <Route path='/user' element={<User />} />
        <Route path='/user/:id' element={<Ticket />} />
      </Routes>
    </Router>
  )
}

export default App
