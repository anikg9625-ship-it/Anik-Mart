import React, { useEffect, useState } from "react";
import grocerycard from "../Images/grocerycard.webp";

const GroceriesPage = ({cart,setCart}) => {
  const [card, updateCard] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => updateCard(data));
  }, []);
  const AddToCart=(item)=>{
    setCart([...cart, item])

  }

  return (
    <>
      <div className="container">
        <div className="row m-3 g-3">
          <div className="col-12 col-md-6">
            <img className="img-fluid rounded" src={grocerycard} alt="" />
          </div>
          <div className="col-12 col-md-6">
            <img className="img-fluid rounded" src={grocerycard} alt="" />
          </div>
        </div>
        <hr />
        <div className="h2 text-center">Our Products</div>
        <hr />

        <div className="row gap-3 justify-content-center">
          {card.map((item) => (
            <div className="col-12 col-md-6 col-lg-2 mb-4" key={item.id} style={{border:"1px solid green", borderRadius:"20px"}}>
              <div className="card h-100 shadow-sm border-0">
                <img
                  src={item.image}
                  className="card-img-top p-3"
                  style={{ height: "200px", objectFit: "contain" }}
                  alt=""
                />

                <div className="card-body d-flex flex-column">
                  <h6 className="card-title fw-bold">
                    {item.title.slice(0, 40)}...
                  </h6>

                  <p className="card-text text-muted small">
                    {item.description.slice(0, 60)}...
                  </p>

                  <div className="mt-auto">
                    <h5 className="text-success fw-bold">₹{item.price}</h5>

                    <button className="btn btn-success w-100 mt-2" onClick={()=>AddToCart(item)}>
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GroceriesPage;
