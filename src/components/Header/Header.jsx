import React from "react";
import "../../App.css";
import { useNavigate } from "react-router";

const Header = ({ setGrid }) => {
  const navigate = useNavigate();

  return (
    <>
      <header>
        <div className="left">
          <a href="/">
            {" "}
            <h1>BIT People</h1>
          </a>
        </div>

        <div className="elements">
          <p onClick={() => navigate("/about")}>About</p>
          <p onClick={() => window.location.reload()}>
            <i className="material-icons">refresh</i>
          </p>
          <p onClick={() => setGrid((prevValue) => !prevValue)}>
            <i className="material-icons">view_module</i>
          </p>
        </div>
      </header>
    </>
  );
};

export default Header;
