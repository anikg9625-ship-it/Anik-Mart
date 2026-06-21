import React, { useState, useEffect } from 'react';
import './Css/Productcard.css'
import { Link } from 'react-router-dom';

const Productcard = () => {
  const [Card, setCard] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/Products")
      .then((res) => res.json())
      .then((data) => setCard(data));
  }, []);

  return (
    <>
      <div className="container py-4">
         <div className="px-3" style={{background:"green", fontFamily:"times-new-roman", borderRadius:"20%"}}>
        <h2 className="text-center fw-bold mb-4 product-heading" style={{color:"white"}}>
          Product Category
        </h2>
        </div>

        <div className="row g-4">

          {Card.map((item) => (
            <div className="col-12 col-md-6 col-lg-4" key={item.id}>

              <div className="card product-card h-100">

                <div className="product-img">
                  <img 
                    src={item.image} 
                    alt={item.productName}
                  />
                </div>

                <div className="card-body text-center">
                  <h5 className="card-title">{item.productName}</h5>
                  <p className="card-text">{item.descriptions}</p>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

      <hr />
    </>
  );
};

export default Productcard;