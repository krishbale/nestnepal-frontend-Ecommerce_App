
import NavBar from './containers/NavBar'
import { Route, Routes } from 'react-router-dom'
import Product from './pages/Product'
import Products from './pages/Products'
function App() {


  return (
    <>
    <div className="container">

      <NavBar />
      <Routes>
      <Route exact path="/" element={<Products />} />
      <Route exact path='/details/:id' element={<Product />} />

      </Routes>

    </div>
    </>
  )
}

export default App
