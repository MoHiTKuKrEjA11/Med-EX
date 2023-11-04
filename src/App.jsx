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
      <SearchPage/>
      <Routes>
        <Route exact path='/hdetails' element={<Hdetails />} />
      </Routes>
    </Router>
  )
}

export default App
