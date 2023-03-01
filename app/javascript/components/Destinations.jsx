import React, { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from './Navbar'
import Map from './Map'
import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1IjoidGltbWluc3MiLCJhIjoiY2w5eGZiNWh1MDB3YTNxcWl5ZGUwcTBrdyJ9.kOYvn6ec9_pMKvHYpeQgTQ';

const Destinations = (props) => {
  const navigate = useNavigate();
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const url = "/api/v1/destinations/index";
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((res) => setDestinations(res))
      .catch(() => navigate("/destinations"));
    }, []);

    const allDestinations = destinations.map((destination, index) => (
    <div key={index} className="my-5">
          <h5 className="my-4">{destination.name}</h5>
          <img src={destination.image_url} alt=""className="rounded-md w-64 h-48 bg-contain" />
          <Link to={`/destination/${destination.id}`} className="btn-primary">
            View Destination
          </Link>
    </div>
  ));

  const noDestination = (
    <div>
      <h4>
        No destinations yet. Why not <Link to="/new_destination">create one</Link>
      </h4>
    </div>
  );

  return (
    <>
    <Navbar/>
      <div className="text-center">
        <main className="mt-5">
          <div className="flex gap-4 justify-center">
          <Link to="/" className="btn-secondary">
            Home
          </Link>
            <Link to="/destination/create" className="btn-secondary">
              Create New Destination
            </Link>
          </div>
          <div className="flex gap-4 justify-center my-4">
            {destinations.length > 0 ? allDestinations : noDestination}
          </div>
        </main>
      </div>
    </>
  );
};

export default Destinations;
