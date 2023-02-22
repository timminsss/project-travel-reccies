// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Home from "../components/Home";
// import Destinations from "../components/Destinations";
// import UserDestinations from "../components/UserDestinations";
// import Destination from "../components/Destination";
// import CreateDestinationForm from "../components/CreateDestinationForm";

// export default (
//   <Router>
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/destinations" element={<Destinations />} />
//       {/* <Route path="/my_destinations" element={<UserDestinations />} />
//       <Route path="/destination/:id" element={<Destination />} />
//       <Route path="/destination/create" element={<CreateDestinationForm />} /> */}
//     </Routes>
//   </Router>
// );

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../components/Home";
import Destinations from "../components/Destinations";
import Destination from "../components/Destination";
import CreateDestinationForm from "../components/CreateDestinationForm";

export default (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/destinations" element={<Destinations />} />
      <Route path="/destination/:id" element={<Destination />} />
      <Route path="/destination/create" element={<CreateDestinationForm />} />
    </Routes>
  </Router>
);
