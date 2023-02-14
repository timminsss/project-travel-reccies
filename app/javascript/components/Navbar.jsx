import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <h3>welcome </h3>
          <Link
            to="/users/sign_in"
            role="button"
          >
            Log in
          </Link>
          <Link
            to="/users/sign_up"
            role="button"
          >
            Signup
          </Link>
    </nav>
  )
}

export default Navbar
