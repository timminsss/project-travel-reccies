import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from './Navbar'
import Map from './Map'

const Destination = (props) => {
  const params = useParams();
  const navigate = useNavigate();
  const [destination, setDestination] = useState([]);

  useEffect(() => {
    const url = `/api/v1/destination/${params.id}`;
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((response) => setDestination(response))
      .catch(() => navigate("/destinations"));
  }, [params.id]);

  return (
    <>
      <Navbar/>
    <div className="container mx-auto">
      <div className="">
        <p>{destination.name}</p>
        <p>{destination.country}</p>
      </div>
      <img src={destination.image_url} alt="" width="300px" />
    </div>
      <Link to="/destinations" className="btn-secondary mt-6">
            Back
          </Link>
      <Map/>
    </>
  )
}

export default Destination
