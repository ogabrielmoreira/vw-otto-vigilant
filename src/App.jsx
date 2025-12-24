import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import OttoVigilantPage from './pages/OttoVigilantPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/otto-vigilant" element={<OttoVigilantPage />} />
    </Routes>
  )
}

export default App

