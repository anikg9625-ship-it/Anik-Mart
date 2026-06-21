import React from "react";

const CardSlider = () => {
  return (
    <div className="container-fluid my-4">

      <div className="text-center mb-3">
        
        <h2 className="fw-bold text-success">
          Trusted Brand Collaborations
        </h2>
        <p className="text-dark">
          Partnering with Top Brands to Deliver Quality Products
        </p>
      </div>
<hr />
      <marquee scrollamount="6" behavior="scroll" direction="left">
        <div className="d-flex align-items-center gap-4 bg-">

          <img src="https://www.dabur.com/static/images/android-icon-72x72.png" alt="" style={{height:"80px", width:"150px", objectFit:"contain", background:"white", border:"2px solid green", borderRadius:"10px", padding:"5px"}} />

          <img src="https://prod-assets.nike.in/NIKE/nes-nike-reloaded-svc/static/assets/images/nike-logo-192x192.svg" alt="" style={{height:"80px", width:"150px", objectFit:"contain", background:"white", border:"2px solid green", borderRadius:"10px", padding:"5px"}} />

          <img src="https://amul.com/header/logo.svg" alt="" style={{height:"80px", width:"150px", objectFit:"contain", background:"white", border:"2px solid green", borderRadius:"10px", padding:"5px"}} />

          <img src="https://levi.in/cdn/shop/files/logo_his_res.png?v=1697785388&width=68" alt="" style={{height:"80px", width:"150px", objectFit:"contain", background:"white", border:"2px solid green", borderRadius:"10px", padding:"5px"}} />

          <img src="https://cdn04.nnnow.com/web-images/master/navtree_metaData/5f098caae4b098854718099b/1594999309969/LH-Logo.png" alt="" style={{height:"80px", width:"150px", objectFit:"contain", background:"white", border:"2px solid green", borderRadius:"10px", padding:"5px"}} />

          <img src="https://mdhspices.com/wp-content/themes/mdhspices/img/logo.png" alt="" style={{height:"80px", width:"150px", objectFit:"contain", background:"white", border:"2px solid green", borderRadius:"10px", padding:"5px"}} />

          <img src="https://www.haldiramsonline.com/media/wysiwyg/new_haldiram_logo.png" alt="" style={{height:"80px", width:"150px", objectFit:"contain", background:"white", border:"2px solid green", borderRadius:"10px", padding:"5px"}} />

          <img src="https://www.nestle.in/themes/custom/da_vinci_code/logo.svg" alt="" style={{height:"80px", width:"150px", objectFit:"contain", background:"white", border:"2px solid green", borderRadius:"10px", padding:"5px"}} />

          <img src="https://www.patanjaliayurved.net/media/images/logo.svg" alt="" style={{height:"80px", width:"150px", objectFit:"contain", background:"white", border:"2px solid green", borderRadius:"10px", padding:"5px"}} />

          <img src="https://www.dettol.co.in/images/Dettol_new_logo.svg" alt="" style={{height:"80px", width:"150px", objectFit:"contain", background:"white", border:"2px solid green", borderRadius:"10px", padding:"5px"}} />

          <img src="https://media.britannia.co.in/Britannia_Logo_fcce3225c0.png" alt="" style={{height:"80px", width:"150px", objectFit:"contain", background:"white", border:"2px solid green", borderRadius:"10px", padding:"5px"}} />

        </div>
      </marquee>
      <hr />

    </div>
  );
};

export default CardSlider;