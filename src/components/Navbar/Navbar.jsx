import './Navbar.css'
const Navbar = () => {
  return (
    <div className='nav-container'>
      <nav className='main-nav'>
        <ul className='nav-ul'>
            <li className='nav-li'>Home</li>
            <li className='nav-li'>About</li>
            <li className='nav-li'>Contact Us</li>
            <li className='nav-li'>Extra 1</li>
            <li className='nav-li'>Extra 2</li>
        </ul>
          <button className='nav-btn'>Book Appointment</button>
      </nav>
    </div>
  )
}

export default Navbar
