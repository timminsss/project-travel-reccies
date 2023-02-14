import React from 'react'
import { Link } from 'react-router-dom';
import { HiHome } from 'react-icons/hi';

const Navbar = () => {
  return (
    <nav className="bg-rose-200 flex justify-between my-4 p-6">
      <h3 className="text-lg text-slate-600 font-semibold">welcome </h3>
        <div className="flex gap-5">
          <Link to="/" role="button" className="text-slate-700 p-3 rounded-full hover:bg-white">
            <HiHome/>
          </Link>
          <Link to="/users/sign_in" role="button" className="text-slate-700 p-3 rounded-full hover:bg-white">
            Log in
          </Link>
          <Link to="/users/sign_up" role="button" className="text-slate-700 p-3 rounded-full hover:bg-white">
            Signup
          </Link>
          <Link to="#" role="button" className="text-slate-700 p-3 rounded-full hover:bg-white">
            My Destinations
          </Link>
          <Link to="#" role="button" className="text-slate-700 p-3 rounded-full hover:bg-white">
            My Reccies
          </Link>
        </div>

    </nav>
  )
}

export default Navbar
