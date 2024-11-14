import React from "react";
import { Link, useParams } from "react-router-dom";
import "./ProductDetail.css";

// Import PRODUCTSLIST for product details
import { PRODUCTSLIST } from "../products/Products";

const ProductDetail = () => {
  const { productName } = useParams();

  // Find product by title
  const product = PRODUCTSLIST.find(
    (prod) => prod.titlu.toLowerCase().replace(/\s+/g, "-") === productName
  );

  if (!product) {
    return <p>Produsul nu a fost găsit.</p>;
  }

  return (
    <div className="product-detail">
      <div className="photo">
        <div className="profile">
          <div className="name">
            <img
              src="https://res.cloudinary.com/dsqwnuyiw/image/upload/v1731612088/florentinafood/logo-min_j2w6ab.webp"
              alt="icon"
            />
            <span>Florentina.food</span>
          </div>
          <div className="follow">
            <Link to={"https://www.instagram.com/florentina.food/?hl=en"}>
              <span>Follow +</span>
            </Link>
          </div>
        </div>
        <img src={product.imagine} alt={product.titlu} />
      </div>
      <div className="content">
        <h2>
          {product.titlu} - {product.greutate}
        </h2>
        <p className="descr">{product.descriere}</p>
        <div className="macro">
          <div className="title">
            <h3>Macronutienti</h3>
            <span className="kcal">({product.calorii})</span>
          </div>
          <div className="item">
            <div className="icon">
              <img
                src="https://res.cloudinary.com/dsqwnuyiw/image/upload/v1731184387/florentinafood/image_10_nlx4ix.webp"
                alt="grasimi"
              />
              <span>Grasimi</span>
            </div>
            <p>{product.grasimi}</p>
          </div>
          <div className="item">
            <div className="icon">
              <img
                src="https://res.cloudinary.com/dsqwnuyiw/image/upload/v1731183650/florentinafood/carbo_glsqr4.webp"
                alt="carbohidrati"
              />
              <span>Carbohidrati</span>
            </div>
            <p>{product.carbohidrati}</p>
          </div>
          <div className="item">
            <div className="icon">
              <img
                src="https://res.cloudinary.com/dsqwnuyiw/image/upload/v1731183650/florentinafood/zahar_mfh2ek.webp"
                alt="Zaharuri"
              />
              <span>Zaharuri</span>
            </div>
            <p>{product.zaharuri}</p>
          </div>
          <div className="item">
            <div className="icon">
              <img
                src="https://res.cloudinary.com/dsqwnuyiw/image/upload/v1731183650/florentinafood/proteina_xfeonq.webp"
                alt="proteina"
              />
              <span>Proteine</span>
            </div>
            <p>{product.proteine}</p>
          </div>
          <div className="item">
            <div className="icon">
              <img
                src="https://res.cloudinary.com/dsqwnuyiw/image/upload/v1731184682/florentinafood/image_12_zqrku7.webp"
                alt="sare"
              />
              <span>Sare</span>
            </div>
            <p>{product.sare}</p>
          </div>
        </div>
        <div className="disclaimer">
          <p>
            Valorile macronutrienților sunt estimative și pot varia ușor în
            funcție de ingredientele utilizate în fiecare comandă.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
