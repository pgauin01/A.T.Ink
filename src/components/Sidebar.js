import logo from "../images/2.png";
import dash1 from "../images/dash1.png";
import dash2 from "../images/dash2.png";
import dash3 from "../images/dash3.png";
import dash4 from "../images/dash4.png";
import dash5 from "../images/dash5.png";
import dash6 from "../images/dash6.png";
import dash7 from "../images/dash7.png";
import dash8 from "../images/dash8.png";
import dash9 from "../images/dash9.png";

const Sidebar = () => {
  return (
    <div id="sidebar">
      <header className="header">
        <img src={logo} alt="react logo" />
        <p className="headername">A.T Inks</p>
      </header>
      <ul className="nav">
        <li className="list">
          <img src={dash1} alt="react logo" />
          <a href="#" className="listheading">
            Dashboard
          </a>
        </li>
        <li className="list">
          <img src={dash2} alt="react logo" />
          <a href="#" className="listheading">
            Orders
          </a>
        </li>
        <li className="list">
          <img src={dash3} alt="react logo" />
          <a href="#" className="listheading">
            Team Members
          </a>
        </li>
        <li className="list">
          <img src={dash4} alt="react logo" />
          <a href="#" className="listheading">
            Partners
          </a>
        </li>
        <li className="list">
          <img src={dash5} alt="react logo" />
          <a href="#" className="listheading">
            Product Listing
          </a>
        </li>
        <li className="list">
          <img src={dash6} alt="react logo" />
          <a href="#" className="listheading">
            Award and Honours
          </a>
        </li>
        <li
          className="list last"
        >
          <img src={dash7} alt="react logo" />
          <a
            href="#"
            id="about"
            className="listheading about"
          >
            About Us
          </a>
        </li>
        <li className="list">
          <img src={dash8} alt="react logo" />
          <a href="#" className="listheading">
            Payment Info
          </a>
        </li>
      </ul>

      <div className="help">
        <img src={dash9} alt="react logo" style={{ width: "50px" }} />
        <p className="helpheading">Need help?</p>
        <p>our support team is at your disposal</p>
        <div style={{ marginLeft: "15px" }}>
          <button className="checkout-btn">
            <span className="checkout-btn__text">Get Help</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
