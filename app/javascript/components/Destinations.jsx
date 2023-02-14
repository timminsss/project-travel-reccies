import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

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
      .catch(() => navigate("/"));
  }, []);

  const allDestinations = destinations.map((destination, index) => (
    <div key={index}>
          <h5>{destination.name}</h5>
          <Link to={`/destination/${destination.id}`}>
            View Destination hereeeee
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
      <div className="text-right">
        <main className="">
            <Link to="/destination">
              Create New Destination
            </Link>
          <div>
            {destinations.length > 0 ? allDestinations : noDestination}
          </div>
          <Link to="/">
            Home
          </Link>
        </main>
      </div>
    </>
  );
};

export default Destinations;
