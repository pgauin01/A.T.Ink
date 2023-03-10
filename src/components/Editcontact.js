import React, { useState, useEffect } from "react";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { useSelector, useDispatch } from "react-redux";
import {
  setSalesEmail,
  setSalesPhone,
  setMarketingEmail,
  setMarketingPhone,
} from "../store/actions/contact";
import plus from "../images/plus.png";
import closeIcon from "../images/closeicon.png";

const Main = (props) => {
  const dispatch = useDispatch();

  const { salesEmail, salesPhone, marketingEmail, marketingPhone } =
    useSelector((state) => state.contact);

  const emailVal = props.issales ? salesEmail : marketingEmail;
  const phoneVal = props.issales ? salesPhone : marketingPhone;

  const [email, setEmailValues] = useState(emailVal);
  const [phone, setPhoneValues] = useState(phoneVal);
  const [emailcounter, setEmailCounter] = useState(1);
  const [phoneCounter, setPhoneCounter] = useState(1);

  useEffect(() => {
    setEmailValues(emailVal);
    setPhoneValues(phoneVal);
  }, [props.issales]);

  const handleEmailChange = (e) => {
    const abc = {};
    abc[e.target.className] = e.target.value;
    setEmailValues({ ...email, ...abc });
  };

  const handlePhoneChange = (e) => {
    const abc = {};
    abc[e.target.className] = e.target.value;
    setPhoneValues({ ...phone, ...abc });
  };

  const handleClick = (e) => {
    e.preventDefault();
    setEmailCounter(emailcounter + 1);
  };

  const handleClick2 = (e) => {
    e.preventDefault();
    setPhoneCounter(phoneCounter + 1);
  };

  const saveHandler = (e) => {
    e.preventDefault();

    if (props.type === "sales") {
      dispatch(setSalesEmail(email));
      dispatch(setSalesPhone(phone));
    } else {
      dispatch(setMarketingEmail(email));
      dispatch(setMarketingPhone(phone));
    }
    props.setState({ isPaneOpen: true });
  };

  return (
    <>
      <div>
        <SlidingPane
          className="some-custom-class"
          overlayClassName="some-custom-overlay-class"
          isOpen={props.isEdit}
          title="Contacts"
          closeIcon={
            <div>
              <img
                src={closeIcon}
                alt="react logo"
                style={{ width: "40px", height: "30px" }}
              />
            </div>
          }
          width="500px"
          onRequestClose={() => {
            props.setState({ isEdit: false, isPaneOpen: true });
          }}
        >
          <p className="contactpara">
            Please provide company's email and Contact
          </p>
          <br />
          <form>
            <label htmlFor="email" className="label">
              Email ID
            </label>
            {Array.from(Array(emailcounter)).map((c, index) => {
              return (
                <input
                  onChange={handleEmailChange}
                  key={c}
                  className={
                    index +
                    Object.keys(
                      props.type === "sales" ? salesEmail : marketingEmail
                    ).length
                  }
                  type="email"
                  placeholder="eg.salesteam@br.in"
                ></input>
              );
            })}

            <button className="addmore" onClick={handleClick}>
              <img src={plus} />
              Add more
            </button>
            <label htmlFor="phone" className="label">
              Contact Number
            </label>
            {Array.from(Array(phoneCounter)).map((c, index) => {
              return (
                <input
                  onChange={handlePhoneChange}
                  key={c}
                  className={
                    index +
                    Object.keys(
                      props.type === "sales" ? salesPhone : marketingPhone
                    ).length
                  }
                  type="number"
                  pattern="[0-9]*"
                  inputmode="numeric"
                  placeholder="eg.7652431256"
                  // value={!isEmpty(phone) ? phone[index] : '' }
                ></input>
              );
            })}
            <button className="addmore" onClick={handleClick2}>
              <img src={plus} />
              Add more
            </button>

            <div style={{ margin: "auto" }}>
              <button className="savebutton" onClick={saveHandler}>
                Save
              </button>
            </div>
          </form>
        </SlidingPane>
      </div>
    </>
  );
};

export default Main;
