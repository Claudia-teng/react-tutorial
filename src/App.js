import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.css'
import Index from './pages/Index/Index'
import CheckList from './pages/CheckList/CheckList'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/checklist' element={<CheckList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
