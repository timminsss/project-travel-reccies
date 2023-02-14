import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navbar'
import { SiRubyonrails, SiReact } from 'react-icons/si';
// import image from '../../assets/images/nusa-penida.png'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <div className="my-5">
        <Link
            to="/destinations"
            role="button"
            className="rounded-full border p-3"
          >
            View Destinations
          </Link>
      </div>

      <footer className="text-rose-500 bg-slate-200 flex gap-4">
        <p >Ⓒ app created by shelley timmins with rails</p>
        <SiRubyonrails/>
        <small> and react</small>
        <SiReact/>
      </footer>
      </div>
  )
}

export default Home
