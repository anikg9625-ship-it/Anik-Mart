import React from 'react'

const CheckAddToCart = ({cart, RemoveFromCart}) => {
    const ByNow=()=>{
        alert("Your order has been placed successfully.")
    }
  return (
    <>
     <div className="container">

            <hr />
            <div className="h2 text-center">Your Add To cart Product</div>
            <hr />
    
            <div className="row px-3">

              {
              cart.length === 0 ? (
  <h3 className="text-center mt-5 fs-1" style={{background:"green", color:"white",borderRadius:"20px"}}>Your cart is empty</h3>
) : (cart.map((item) => (
                <div className="col-12 col-md-6 col-lg-3 mb-4" key={item.id}>
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
                        <div className="d-flex gap-2">
    
                        <button className="btn btn-success w-100 mt-2" onClick={ByNow}>
                          Buy Now
                        </button>
                        <button className="btn btn-danger w-100 mt-2" style={{ whiteSpace: "nowrap" }} onClick={()=>RemoveFromCart(item.id)}>
                          Remove From Cart
                        </button>
                        </div>
                        
                        
                        
                      </div>
                    </div>
                  </div>
                </div>
              )))}
            </div>
          </div>
    
    </>
  )
}

export default CheckAddToCart
