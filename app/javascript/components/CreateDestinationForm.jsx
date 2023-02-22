import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from './Navbar'

const CreateDestinationForm = () => {
  const [image, setImage] = useState({});

  const handleChange = e => {
    e.persist();
    setImage(e.target.files[0]);
  };

  // console.log(image)

  const handleSubmit = e => {
    e.preventDefault();
    const data = new FormData();
    data.append('name', e.target.elements.name.value);
    data.append('city', e.target.elements.city.value);
    data.append('country', e.target.elements.country.value);
    data.append('image', image);
    console.log(data)

    fetch('http://localhost:3000/photos', {
      method: 'POST',
      body: data,
    })
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    });
  };

  return (
    <>
      <Navbar/>
      <form onSubmit={handleSubmit} className="px-6 container justify-center">
      {/* <form className="px-6 container justify-center"> */}
        <h1 className="my-5">Add a new destination</h1>
        <label> Name</label>
          <input type="text" name="name" placeholder="Name"
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-md focus:outline-none
                  focus:ring-rose-300 focus:border-rose-300 focus:z-10 sm:text-sm"/>
        <label> City</label>
          <input type="text" name="city" placeholder="City"
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-md focus:outline-none
                  focus:ring-rose-300 focus:border-rose-300 focus:z-10 sm:text-sm"/>
        <label> Country</label>
          <input type="text" name="country" placeholder="Country"
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-md focus:outline-none
                  focus:ring-rose-300 focus:border-rose-300 focus:z-10 sm:text-sm"/>
        <label>Upload an image</label>
          <input type="file" name="image" onChange={handleChange} />
        <input type="submit" className="btn-primary mt-5" />
      </form>
    </>
  )
}

export default CreateDestinationForm
