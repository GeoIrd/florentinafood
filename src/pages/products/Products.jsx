import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import "./Products.css";

// Dummy data for the products
export const PRODUCTSLIST = [
  {
    id: 1,
    categorie: "Lipie",
    titlu: "Lipie cu Somon",
    greutate: "315gr",
    imagine:
      "https://res.cloudinary.com/dsqwnuyiw/image/upload/v1730834470/florentinafood/somon.jpg",
    descriere:
      "Lipie cu somon proaspăt, cremă de brânză și salată, bogată în Omega-3 și grăsimi sănătoase. Ușor călită în unt pentru un gust mai intens.",
    pret: "10 ron",
    proteine: "30g",
    grasimi: "15g",
    calorii: "415 kcal",
    carbohidrati: "40g",
    zaharuri: "10gr",
    sare: "1gr",
  },
  {
    id: 2,
    categorie: "Lipie",
    titlu: "Lipie cu Ton",
    greutate: "310gr",
    imagine:
      "https://res.cloudinary.com/dsqwnuyiw/image/upload/v1731185631/florentinafood/main-header_tjhyut.webp",
    descriere:
      "Lipie gustoasă cu ton, cremă de brânză și salată proaspătă, ideală pentru o masă echilibrată. Calită în unt pentru o savoare deosebită.",
    pret: "10 ron",
    proteine: "28g",
    grasimi: "10g",
    calorii: "362 kcal",
    carbohidrati: "40g",
    zaharuri: "10gr",
    sare: "1gr",
  },
  {
    id: 3,
    categorie: "Lipie",
    titlu: "Lipie cu Mușchi",
    greutate: "320gr",
    imagine:
      "https://res.cloudinary.com/dsqwnuyiw/image/upload/v1731185825/florentinafood/15011t5_ursbxs.webp",
    descriere:
      "Lipie cu mușchi de porc suculent, cașcaval topit și salată crocantă, perfectă pentru iubitorii de carne. Călită ușor în unt pentru un plus de savoare.",
    pret: "10 ron",
    proteine: "32g",
    grasimi: "18g",
    calorii: "458 kcal",
    carbohidrati: "42g",
    zaharuri: "10gr",
    sare: "1gr",
  },
  {
    id: 4,
    categorie: "Burger",
    titlu: "Burger cu Bacon",
    greutate: "330gr",
    imagine:
      "https://res.cloudinary.com/dsqwnuyiw/image/upload/v1731186032/florentinafood/lunch-dinner_burgers_bacon-cheeseburger_xf5oez.jpg",
    descriere:
      "Burger suculent cu carne de vită, bacon crocant, brânză topită și legume proaspete. Gust intens și o textură irezistibilă.",
    pret: "10 ron",
    proteine: "35g",
    grasimi: "25g",
    calorii: "545 kcal",
    carbohidrati: "45g",
    zaharuri: "10gr",
    sare: "1gr",
  },
];

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Toate");

  const navigate = useNavigate();

  const filteredProducts = PRODUCTSLIST.filter(
    (product) =>
      (selectedCategory === "Toate" ||
        product.categorie === selectedCategory) &&
      product.titlu.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleProductClick = (product) => {
    const productUrl = `/products/${product.titlu
      .toLowerCase()
      .replace(/\s+/g, "-")}`;
    navigate(productUrl);
  };

  return (
    <section className="products">
      <div className="content">
        <div className="title">
          <h1>
            Ești pregătit <br /> să economisești?
          </h1>
          <img
            className="logo"
            src="https://res.cloudinary.com/dsqwnuyiw/image/upload/v1731612088/florentinafood/logo-min_j2w6ab.webp"
            alt="logo"
          />
        </div>
      </div>

      {/* Search */}
      <div className="search">
        <input
          type="text"
          placeholder="Ce produs cauți?"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      {/* All */}
      <div className="all">
        <h2>
          {selectedCategory === "Toate" ? "Toate Produsele" : selectedCategory}
        </h2>
        <Navbar
          onCategoryChange={handleCategoryChange}
          selectedCategory={selectedCategory}
        />

        <div className="product-list">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                className="product-card"
                key={product.id}
                onClick={() => handleProductClick(product)}
              >
                <img src={product.imagine} alt={product.titlu} />
                <div className="text">
                  <h3 className="title">{product.titlu}</h3>
                  <p className="price">{product.pret}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="empty-category">
              <img
                src="https://example.com/sorry.jpg"
                alt="Niciun produs momentan"
              />
            </div>
          )}
        </div>
      </div>

      {/* Weekly */}
      <div
        className="weekly"
        onClick={() => navigate(`/products/lipie-cu-somon`)}
      >
        <h2>Produsul săptămânii</h2>
        <div className="weekly-product">
          <h3>Sandviș cu Somon</h3>
          <span className="price">10 ron</span>
        </div>
      </div>
    </section>
  );
};

export default Products;
