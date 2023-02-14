import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from './Navbar'

const CreateDestinationForm = () => {
  return (
    <>
      <Navbar/>
      <form className="px-6 container justify-center">
        <h1 className="my-5">Add a new destination</h1>
        <label> Name
          <input type="text" name="name" placeholder="Name"
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-md focus:outline-none
                  focus:ring-rose-300 focus:border-rose-300 focus:z-10 sm:text-sm"/>
        </label>
        <label> City
          <input type="text" name="city" placeholder="City"
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-md focus:outline-none
                  focus:ring-rose-300 focus:border-rose-300 focus:z-10 sm:text-sm"/>
        </label>
        <label> Country
          <input type="text" name="country" placeholder="Country"
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-md focus:outline-none
                  focus:ring-rose-300 focus:border-rose-300 focus:z-10 sm:text-sm"/>
        </label>
        <input type="submit" value="Submit" placeholder="Name" className="btn-primary mt-5" />
      </form>
    </>
  )
}

export default CreateDestinationForm
