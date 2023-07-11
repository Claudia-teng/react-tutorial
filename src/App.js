import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.css'
import Index from './pages/Index/Index'
import Counter from './pages/Counter/Counter'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/counter' element={<Counter />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
