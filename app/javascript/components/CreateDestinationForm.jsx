import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from './Navbar'

const CreateDestinationForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState({});
  const [city, setCity] = useState({});
  const [country, setCountry] = useState({});
  const [image, setImage] = useState({});


  const onChange = (event, setFunction) => {
    setFunction(event.target.value);
  };

  const handleChangeImage = e => {
    e.persist();
    setImage(e.target.files[0]);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const url = "/api/v1/destinations/create";


    if (name.length === 0 || city.length === 0 || country.length === 0 || image.length === 0)
      return;

      const body = {
        name,
        city,
        country,
        image
      };

      const token = document.querySelector('meta[name="csrf-token"]').content;
      console.log(token)
    fetch(url, {
      method: "POST",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        console.log(response)
        throw new Error("Network response was not ok.");
      })
      .then((response) => navigate(`/destination/${response.id}`))
      .catch((error) => console.log(error.message));
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
      <form onSubmit={onSubmit} className="px-6 container justify-center">
      {/* <form onSubmit={handleSubmit} className="px-6 container justify-center"> */}
      {/* <form className="px-6 container justify-center"> */}
        <h1 className="my-5">Add a new destination</h1>
        <label> Name</label>
          <input type="text"
                  name="name"
                  placeholder="Name"
                  required
                  onChange={(event) => onChange(event, setName)}
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-md focus:outline-none
                  focus:ring-rose-300 focus:border-rose-300 focus:z-10 sm:text-sm"/>
        <label> City</label>
          <input type="text"
                  name="city"
                  placeholder="City"
                  required
                  onChange={(event) => onChange(event, setCity)}
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-md focus:outline-none
                  focus:ring-rose-300 focus:border-rose-300 focus:z-10 sm:text-sm"/>
        <label> Country</label>
          <input type="text"
                  name="country"
                  placeholder="Country"
                  required
                  onChange={(event) => onChange(event, setCountry)}
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-md focus:outline-none
                  focus:ring-rose-300 focus:border-rose-300 focus:z-10 sm:text-sm"/>
        <label>Upload an image</label>
          <input type="file"
                  name="image"
                  onChange={handleChangeImage} />
        <button type="submit" className="btn-primary mt-3">
              Submit
            </button>
      </form>
    </>
  )
}

export default CreateDestinationForm
