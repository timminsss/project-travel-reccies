import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { HiHome, HiSearch } from 'react-icons/hi';
import axios from 'axios';
import PropTypes from 'prop-types';

const Navbar = ({ path }) => {
  // const [user, setUser] = useState({});

  // useEffect(() => {
  //   // axios.get('http:localhost:3000/users/sessions')
  //   // .then(response => {
  //   //   console.log(response.data);
  //   // })
  //   // .catch(error => {
  //   //   console.error(error);
  //   // });


  // //   axios.get('/users/current')
  // // .then(response => {
  // //   // console.log(response.data);
  // // })
  // // .catch(error => {
  // //   // console.error(error);
  // // });

  // fetch('/sessions/current_user')
  //     .then(response => response.json())
  //     .then(data => setUser(data));
  //   }, []);


    const navigate = useNavigate();
    const [user, setUser] = useState({});

  useEffect(() => {
    const url = "/sessions/current_user";
    fetch(url)
      .then((res) => {
        if (res.ok) {
          // console.log(res)
          return res.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((res) => setUser(res))
      .catch(() => navigate("/"));
  }, []);



  return (
    <nav className="bg-rose-200 flex justify-between my-4 p-6">
      {/* {user ? ( */}
        <h3 className="text-lg text-slate-600 font-semibold">welcome to travel reccies {user.email}</h3>
        <h1>{user.email}</h1>
      {/* ) : ( */}
        {/* <h3 className="text-lg text-slate-600 font-semibold">welcome to travel reccies</h3> */}
      {/* )} */}
        <div className="flex gap-5">
          <Link to="/" role="button" className="text-slate-700 p-3 rounded-full hover:bg-white">
            <HiHome/>
          </Link>
          <Link to="#" role="button" className="text-slate-700 p-3 rounded-full hover:bg-white">
            <HiSearch/>
          </Link>
          <Link to="/users/sign_in" role="button" className="text-slate-700 p-3 rounded-full hover:bg-white">
            Log in
          </Link>
          <Link to="/users/sign_up" role="button" className="text-slate-700 p-3 rounded-full hover:bg-white">
            Signup
          </Link>
          <Link to="my_destinations" role="button" className="text-slate-700 p-3 rounded-full hover:bg-white">
            My Destinations
          </Link>
          <Link to="#" role="button" className="text-slate-700 p-3 rounded-full hover:bg-white">
            My Reccies
          </Link>
          <Link to={ path }>Log out</Link>
        </div>

    </nav>
  )
}

export default Navbar
