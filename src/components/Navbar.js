import React from "react";
import { useDispatch } from "react-redux";
const { Link } = require("react-router-dom");

const Navbar = ({ isLoggedUser }) => {
  const dispatch = useDispatch();

  return (
    isLoggedUser && <nav style={{ textAlign: "center", marginTop: "20px" }}>
      <Link to="/home" style={{ padding: "10px" }}>
        Home
      </Link>
      <Link to="/mytask" style={{ padding: "10px" }}>
        My Task
      </Link>
      <Link to="/setup" style={{ padding: "10px" }}>
        Set up
      </Link>
      <Link to="/admin" style={{ padding: "10px" }}>
        Admin
      </Link>
      <Link onClick={() => {dispatch({type: "LOGOUT"})}} to="/" style={{ padding: "10px" }}>
        Logout
      </Link>
      </nav>
  );
};
export default Navbar;
