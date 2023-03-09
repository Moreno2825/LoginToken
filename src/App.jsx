import react from 'react'
import { HashRouter as Router, Routes, Route} from 'react-router-dom'
import Error404 from './pages/Error404'
import Home from './pages/Home'
import Login from './pages/Login'
import ProductDetail from './pages/ProductDetail'
import Productos from './pages/Productos'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='Login' element={<Login/>}/> 
        <Route path='Productos' element={<Productos/>}/>
        <Route path='Productos/:id' element={<ProductDetail/>}/> 
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<Error404/>}/>
      </Routes>
    </Router>
    </>

  )
}

export default App
