import logo from "../images/1.png";
import cart from "../images/4.png";
import user from "../images/3.png";
import drop from "../images/5.png";
const Header = () => {
  return (
    <>
      <div className="header">
        <div className="logo">
          <img src={logo} alt="react logo" />
        </div>
        <div className="search-container">
          <input type="text" id="search-bar" placeholder="Search..." />
          <a href="#">
            <img
              className="search-icon"
              src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"
            />
          </a>
        </div>
        <div className="checkout">
          <button className="checkout-btn">
            <img src={cart} alt="react logo" />
            <span className="checkout-btn__text">Checkout (200)</span>
          </button>
        </div>
        <div className="user">
          <img src={user} alt="react logo" />
          <span style={{ margin: "8px" }}>User Admin</span>
          <img src={drop} alt="react logo" />
        </div>
      </div>
    </>
  );
};

export default Header;
