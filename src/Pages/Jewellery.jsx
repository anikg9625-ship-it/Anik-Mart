import React from "react";

const Jewellery = ({cart, setCart}) => {
  const JwelleryProducts=[
    {
      id:1,
      img:"https://jayeevagmi.com/wp-content/uploads/2026/03/p16-327x327.webp",
      name:"Golden Hoop Earrings",
      price:"₹2999"
    },
    {
      id:2,
      img:"https://jayeevagmi.com/wp-content/uploads/2026/03/p19-327x327.webp",
      name:"Golden Hoop Earrings",
      price:"₹4999"

    },
    {
      id:3,
      img:"https://jayeevagmi.com/wp-content/uploads/2026/03/p18-327x327.webp",
       name:"Golden Hoop Earrings",
      price:"₹1099"

    }
    ,
    {
      id:4,
      img:"https://jayeevagmi.com/wp-content/uploads/2026/03/p17-327x327.webp",
       name:"Golden Hoop Earrings",
      price:"₹3999"

    }
  ]
const AddToCart=(item)=>{
 setCart([...cart,item])
}

  
  return (
    <>
      <div className="container-fluid p-0">
        <div
          id="carouselExampleControlsNoTouching"
          className="carousel slide"
          data-bs-touch="false"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw5d177254/homepage/HeroBanner/ge-desktop-13-5-26.jpg"
                className="d-block w-100"
                alt=""
                style={{ height: "400px", objectFit: "cover" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwb3ca7843/homepage/HeroBanner/dailywear-desktop1.jpg"
                className="d-block w-100"
                alt=""
                style={{ height: "400px", objectFit: "cover" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwb64b5a41/homepage/HeroBanner/gemstone-desktop.jpg"
                className="d-block w-100"
                alt=""
                style={{ height: "400px", objectFit: "cover" }}
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControlsNoTouching"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControlsNoTouching"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>

      <div className="container mt-5">
        <div
          className="fw-bold text-center mb-4 fs-1 text-success"
          style={{ fontFamily: "times-new-roman" }}
        >
          Our Spritual Products
        </div>
        <div style={{ borderRadius: "20px", overflow: "hidden" }}>
          <div className="row justify-content-center text-center">
            <div className="col-12 col-lg-3 col-md-6 mb-3">
              <img
                src="https://jayeevagmi.com/wp-content/uploads/2026/03/Rudrakha.webp"
                className="img-fluid"
                alt=""
              />
              <div className="fw-bold fs-5 mt-2">Rudraksha</div>
            </div>
            <div className="col-12 col-lg-3 col-md-6 mb-3">
              <img
                src="https://jayeevagmi.com/wp-content/uploads/2026/03/Tulsi.webp"
                className="img-fluid"
                alt=""
              />
              <div className="fw-bold fs-5 mt-2">Tulsi</div>
            </div>
            <div className="col-12 col-lg-3 col-md-6 mb-3">
              <img
                src="https://jayeevagmi.com/wp-content/uploads/2026/03/Rudrakha-Pen1.webp"
                className="img-fluid"
                alt=""
              />
              <div className="fw-bold fs-5 mt-2">Pendant</div>
            </div>
            <div className="col-12 col-lg-3 col-md-6 mb-3">
              <img
                src="https://jayeevagmi.com/wp-content/uploads/2026/03/p1-1.webp"
                className="img-fluid"
                alt=""
              />
              <div className="fw-bold fs-5 mt-2">Earring</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="mt-4 px-3"></div>

        <div className="fw-normal text-uppercase fs-5 text-center">
          WINTER SALE
        </div>

        <div className="text-uppercase fs-1 text-center text-success mb-4">
          FOR ALL WALKS OF LIFE
        </div>
{/* This is car section */}
        <div className="row g-4 justify-content-center">
          {
            JwelleryProducts.map((item)=>(
          <div className="col-12 col-lg-3 col-md-6 d-flex justify-content-center" key={item.id}>
            <div className="card shadow-sm" style={{ width: "18rem" }}>
              <img
                src={item.img}
                className="card-img-top"
                alt=""
              />
              <div className="card-body">
                <div className="fs-6 fw-bold">{item.name}</div>
                <div className="d-flex gap-2">
                  <span className="text-decoration-line-through text-muted">
                    ₹3634
                  </span>
                  <span className="fw-bold text-success">{item.price}</span>
                </div>
                <button className="btn btn-success mt-2" onClick={()=>AddToCart(item)}>Add To Cart</button>
              </div>
            </div>
          </div>
            ))
}
          </div>
        </div>

        <div className="mt-5"></div>

        <div
          className="fw-bold fs-1 text-success text-center mb-4"
          style={{ fontFamily: "times-new-roman" }}
        >
          Silver & Gold Products
        </div>

        <div className="row g-4">
          <div className="col-12 col-lg-6">
            <img
              src="https://i.pinimg.com/originals/27/f9/ba/27f9ba2388a11648b2bdf9b5e840f334.jpg"
              className="img-fluid rounded"
              alt=""
              style={{
                height: "500px",
                width: "100%",
                objectFit: "cover",
                boxShadow: "0px 2px 8px rgba(0,0,0,0.2)",
              }}
            />
          </div>
          <div className="col-12 col-lg-6">
            <img
              src="https://tse3.mm.bing.net/th/id/OIP.cyZTY6J62KvszlfLVo2qbQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
              className="img-fluid rounded"
              alt=""
              style={{
                height: "500px",
                width: "100%",
                objectFit: "cover",
                boxShadow: "0px 2px 8px rgba(0,0,0,0.2)",
              }}
            />
          </div>
        </div>
      
    </>
  );
};

export default Jewellery;
