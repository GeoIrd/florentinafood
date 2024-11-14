import React from "react";
import "./Navbar.css";

const Navbar = ({ onCategoryChange, selectedCategory }) => {
  const handleCategoryClick = (category) => {
    onCategoryChange(category);
  };

  return (
    <nav>
      <ul className="links">
        <li
          onClick={() => handleCategoryClick("Toate")}
          className={selectedCategory === "Toate" ? "active" : ""}
        >
          <span>Toate</span>
          <img
            src="https://res.cloudinary.com/dsqwnuyiw/image/upload/v1730918458/florentinafood/Group_1541-min_gbnx6i.webp"
            alt="all food"
          />
        </li>
        <li
          onClick={() => handleCategoryClick("Lipie")}
          className={selectedCategory === "Lipie" ? "active" : ""}
        >
          <span>Lipie</span>
          <img
            src="https://res.cloudinary.com/dsqwnuyiw/image/upload/v1730918458/florentinafood/Group_1542-min_wqmkqa.webp"
            alt="wrap"
          />
        </li>
        <li
          onClick={() => handleCategoryClick("Burger")}
          className={selectedCategory === "Burger" ? "active" : ""}
        >
          <span>Burger</span>
          <img
            src="https://res.cloudinary.com/dsqwnuyiw/image/upload/v1730918458/florentinafood/Group_1543-min-1_lzmqap.webp"
            alt="burger"
          />
        </li>
        <li
          onClick={() => handleCategoryClick("Desert")}
          className={selectedCategory === "Desert" ? "active" : ""}
        >
          <span>Desert</span>
          <img
            src="https://res.cloudinary.com/dsqwnuyiw/image/upload/v1730918513/florentinafood/Group_1540-min_bkwug2.webp"
            alt="desert"
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
