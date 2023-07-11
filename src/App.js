import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.css'
import Index from './pages/Index/Index'
import Weather from './pages/Weather/Weather'
import Culture from './pages/Culture/Culture'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/weather' element={<Weather />} />
        <Route path='/culture' element={<Culture />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
