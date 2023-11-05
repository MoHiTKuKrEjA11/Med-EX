import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero'
import SearchPage from './components/SearchPage/SearchPage'
import Hdetails from './components/Hdetails/Hdetails'
import { BrowserRouter as Router,Routes ,Route } from 'react-router-dom'

function App() {
 

  return (
    <Router>
      <Navbar/>
      <Hero/>
      {/* <Hdetails/> */}
      {/* <SearchPage/> */}
      <Routes>
        <Route exact path='/hdet' element={<Hdetails />} />
        <Route exact path='/' element={<SearchPage />} />
      </Routes>
    </Router>
  )
}

export default App
