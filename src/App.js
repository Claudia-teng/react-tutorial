import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.sass'
import Index from './pages/Index/Index'
import Product from './pages/Product/Product'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/product' element={<Product />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
