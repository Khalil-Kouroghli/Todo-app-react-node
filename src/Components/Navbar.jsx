import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
const Navbar = ({ handleAdd,handleView,handleSearch }) => {
const [search,setSearch]=useState("")

  return (
    <nav
      className="navbar navbar-expand-lg   bg-dark border-bottom border-body "
      data-bs-theme="dark"
    >
        
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" 
              onClick={(e)=>{e.preventDefault(); handleView("All")}}
              aria-current="page" 
              >
                All
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" onClick={(e)=>{e.preventDefault(); handleView("Add")}}>
                Add
                
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
            onChange={(e)=>setSearch(e.target.value)}
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-danger" type="submit" onClick={(e)=>{e.preventDefault();handleSearch(search)}}>
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
