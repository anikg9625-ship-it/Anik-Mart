import React from "react";
import "./Css/Navbar.css";
import AnikMartLogo from "../Images/AnikMartLogo.png";
import { ShoppingBag, UserKey } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = ({ cart }) => {
  const {
    isLoading,
    isAuthenticated,
    loginWithRedirect: login,
    logout: auth0Logout,
    user,
  } = useAuth0();

  const signup = () =>
    login({ authorizationParams: { screen_hint: "signup" } });

  const logout = () =>
    auth0Logout({ logoutParams: { returnTo: window.location.origin } });

  if (isLoading) return <p>Loading...</p>;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark py-2 sticky-top shadow">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={AnikMartLogo} alt="logo" style={{ height: "60px" }} />
        </Link>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
            <li className="nav-item"><Link to="/groceries" className="nav-link">Groceries</Link></li>
            <li className="nav-item"><Link to="/beauty" className="nav-link">Beauty</Link></li>
            <li className="nav-item"><Link to="/outfits" className="nav-link">Outfits</Link></li>
            <li className="nav-item"><Link to="/jewellery" className="nav-link">Jewellery</Link></li>
            <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
          </ul>

          <div className="d-flex gap-4 align-items-center">
            <Link to="/checkaddtocart">
              <button className="btn btn-outline-dark position-relative">
                <ShoppingBag color="white" size={22} />
                <span className="position-absolute top-0 start-100 translate-middle badge bg-white text-dark">
                  {cart.length}
                </span>
              </button>
            </Link>

            {isAuthenticated ? (
              <>
                <span className="text-white">{user?.email}</span>
                <button className="btn btn-danger" onClick={logout}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <UserKey
                  size={25}
                  style={{ cursor: "pointer" }}
                  onClick={login}
                />
                <button className="btn btn-warning" onClick={signup}>
                  Signup
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;