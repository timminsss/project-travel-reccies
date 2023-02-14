import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navbar'
// import image from '../../assets/images/nusa-penida.png'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Link
          to="/destinations"
          role="button"
        >
          View Destinations
        </Link>

      <footer>
        <p className="text-rose-700">app created by shelley timmins</p>
      </footer>
      </div>
  )
}

export default Home
