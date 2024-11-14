import React from "react";

import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <header>
      <div className="content">
        <h1>
          Bun bun bun <br /> si ieftin!
        </h1>
        <p>
          Dacă lucrezi la birou și vrei să te bucuri de o masă gustoasă, fără să
          cheltuiești mult, această aplicație este soluția perfectă pentru tine!
        </p>
        <Link to="/products">
          <div className="btn">Vezi produsele</div>
        </Link>
      </div>
    </header>
  );
};

export default Home;
