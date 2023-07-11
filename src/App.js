import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.css'
import Index from './pages/Index/Index'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
