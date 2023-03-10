import React, { useState , useEffect} from "react";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { useSelector  , useDispatch} from "react-redux";
import EditContact from "./Editcontact";
import Logo from "../images/2.png";
import verify from "../images/ver.png";
import edit from "../images/but1.png";
import card1 from "../images/card1.png";
import card2 from "../images/card2.png";
import card3 from "../images/card3.png";
import card4 from "../images/card4.png";
import card5 from "../images/card5.png";
import phone from "../images/phone.png";
import mail from "../images/mail.png";
import social1 from "../images/social1.png";
import social2 from "../images/social2.png";
import social3 from "../images/social3.png";
import social4 from "../images/social4.png";
import deletebut from "../images/but2.png";
import closeIcon from "../images/closeicon.png";
import {
  setSalesEmail,
  setSalesPhone,
  setMarketingEmail,
  setMarketingPhone,
} from "../store/actions/contact";


const Main = () => {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    isPaneOpen: false,
    isEdit: false,
    issales: false,
    type: "",
  });

  const { salesEmail, salesPhone, marketingEmail, marketingPhone } =
    useSelector((state) => state.contact);

    const [saleEmail , setSaleEmail] = useState(salesEmail);
    const [salePhone , setSalePhone] = useState(salesPhone);
    const [marketingMail , setMarektingMail] = useState(marketingEmail);
    const [marketingPhon , setMarektingPhon] = useState(marketingPhone);

    useEffect(() => {
      setSaleEmail(salesEmail);
      setSalePhone(salesPhone);
      setMarektingMail(marketingEmail)
      setMarektingPhon(marketingPhone)
    }, [salesEmail ,salesPhone, marketingEmail, marketingPhone]);

    const handleDelete = (type) => {
      if(type === 'sales'){
        setSaleEmail({})
        setSalePhone({})
      }else{
        setMarektingMail({})
        setMarektingPhon({})
      }
    }
    
    const isEmpty = (obj) =>  {
      return Object.keys(obj).length === 0;
  }

  const getLength = () => {
      return Object.keys(salesEmail).length  + Object.keys(salesPhone).length + Object.keys(marketingEmail).length + Object.keys(marketingPhone).length 
  }

  const handleSave = () => {
    dispatch(setSalesEmail(saleEmail))
    dispatch(setSalesPhone(salePhone))
    dispatch(setMarketingEmail(marketingMail))
    dispatch(setMarketingPhone(marketingPhon))
  }

  return (
    <>
      <div className="mainbody">
        <div className="upper">
          <h1 className="aboutheading">About Us</h1>
          <div className="logodiv">
            <img
              src={Logo}
              alt="react logo"
              className="mainlogo"
            />
            <div className="">
              <h2 className="upperhead">A.T Inks</h2>
              <h2 className="upperhead2">Digital Ink</h2>
            </div>
            <div className="verify">
              <img
                src={verify}
                alt="react logo"
                style={{ width: "20px", height: "20px" }}
              />
              <p className="verifytext">Verify Company</p>
            </div>
          </div>
          <div className="info">
            <p className="infoPara">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              vel luctus mauris. Sed vitae augue eu velit facilisis cursus.
              <br />
              Aliquam erat volutpa
            </p>
            <div className="infoedit">
              <img
                src={edit}
                alt="react logo"
                style={{ width: "20px", height: "20px" }}
              />
            </div>
          </div>
        </div>
        <div className="maintab">
          <h3 className="tabhead1">Info</h3>
          <h3 className="tabhead">FAQ</h3>
          <h3 className="tabhead">Complaints and feedback</h3>
          <h3 className="tabhead">Privacy Policy</h3>
          <h3 className="tabhead">Terms and Conditions</h3>
        </div>
        <div className="test"></div>


        <div className="Main">
          <div className="cards">
            <div className="cardupper">
              <img
                src={card1}
                alt="react logo"
                style={{ width: "30px", height: "30px" }}
              />
              <h2 className="cardheading">Contact</h2>
              <img
                src={edit}
                alt="react logo"
                style={{ width: "20px", height: "20px" }}
                className="cardedit"
                onClick={() => setState({ isPaneOpen: true })}
              />
            </div>
            <div className="cardcontent">
              <img
                src={mail}
                alt="react logo"
                style={{ width: "20px", height: "20px" }}
              />
             <p className="contactPara"> 
             {!isEmpty(salesEmail) ? 
             Object.values(salesEmail).slice(0, 2).map((item) => (
               <span className="contactMail"> {item} <br/></span>
             )) : 
             Object.values(marketingEmail).slice(0, 2).map((item) => (
              <span className="contactMail"> {item} <br/></span>
            )) 
             }
             </p>
            </div>
            <div className="cardcontent">
              <img
                src={phone}
                alt="react logo"
                style={{ width: "20px", height: "20px" }}
              />
             <p className="contactPara"> +91
             {!isEmpty(salesPhone) ? 
             Object.values(salesPhone).slice(0, 2).map((item) => (
              <span className="contactMail"> {item} </span>
            )) : 
            Object.values(marketingPhone).slice(0, 2).map((item) => (
              <span className="contactMail"> {item} </span>
            )) 
             }
             </p>
            </div>
            <div className="circle">+ {getLength()}</div>
          </div>
          <div className="cards">
          <div className="cardupper">
              <img
                src={card2}
                alt="react logo"
                style={{ width: "30px", height: "30px" }}
              />
              <h2 className="cardheading">Address</h2>
              <img
                src={edit}
                alt="react logo"
                style={{ width: "20px", height: "20px" }}
                className="cardedit"
              />
            </div>
            <p className="addresspara">C - 1 / 351 / 4, GCID Makarpur, <br/>
            Vadodra - 432021, Gujrat ,India</p>
           
          </div>
          <div className="cards">
          <div className="cardupper">
              <img
                src={card3}
                alt="react logo"
                style={{ width: "30px", height: "30px" }}
              />
              <h2 className="cardheading">House of operations</h2>
              <img
                src={edit}
                alt="react logo"
                style={{ width: "20px", height: "20px" }}
                className="cardedit"
              />
            </div>
            <p className="statmentpara">Monday to Friday - 9:00 AM To 6:00 PM</p>
           
          </div>
          <div className="cards">
          <div className="cardupper">
              <img
                src={card4}
                alt="react logo"
                style={{ width: "30px", height: "30px" }}
              />
              <h2 className="cardheading">Social Media and Links</h2>
              <img
                src={edit}
                alt="react logo"
                style={{ width: "20px", height: "20px" }}
                className="cardedit"
              />
            </div>
            <div className="socialItem">
           <div>
           <img
                src={social1}
                alt="react logo"
                className="socialImg"
              />
              <p className="socialText">website</p>
           </div>
           <div>
           <img
                src={social2}
                alt="react logo"
                className="socialImg"

              />
              <p className="socialText">Instagram</p>
           </div>
               
               <div>
               <img
                src={social3}
                alt="react logo"
                className="socialImg"

              />
              <p className="socialText">Facebook</p>
               </div>
               <div>
               <img
                src={social4}
                alt="react logo"
                className="socialImg"

              />
              <p className="socialText">Twitter</p>
               </div>
            </div>
           
          </div>
          <div className="cards">
          <div className="cardupper">
              <img
                src={card5}
                alt="react logo"
                style={{ width: "30px", height: "30px" }}
              />
              <h2 className="cardheading">Statment</h2>
              <img
                src={edit}
                alt="react logo"
                style={{ width: "20px", height: "20px" }}
                className="cardedit"
              />
            </div>
            <p className="statmentpara">You Think it we ink it</p>
            <div className="circle">+ 1</div>
           
          </div>
          
        </div>
        <div></div>

        
        <SlidingPane
          className="some-custom-class"
          overlayClassName="some-custom-overlay-class"
          isOpen={state.isPaneOpen}
          title="Contacts"
          closeIcon={<div>
             <img
                src={closeIcon}
                alt="react logo"
                style={{ width: "40px", height: "30px" }}
              />
          </div>}
          width="500px"
          onRequestClose={() => {
            setState({ isPaneOpen: false });
          }}
        >
          <div className="contactpara">Please provide company's email and Contact</div>
          <br />
          {!isEmpty(saleEmail) && 
           <div className="contactCard">
           <div className="cardupper contactmargin">
             <img
               src={card1}
               alt="react logo"
               style={{ width: "30px", height: "30px" }}
             />
             <h3 className="cardheading">Sales Team</h3>
             <img
               src={deletebut}
               alt="react logo"
               style={{ width: "30px", height: "30px" }}
               className="carddelete"
               onClick={() =>
                 handleDelete('sales')
               }
             />
             <img
               src={edit}
               alt="react logo"
               style={{ width: "20px", height: "20px" }}
               className="cardedit"
               onClick={() =>
                 setState({ isEdit: true, issales: true, type: "sales" })
               }
             />
           </div>
           <div className="cardcontent cardmargin">
             <img
               src={mail}
               alt="react logo"
               style={{ width: "20px", height: "20px" }}
             />

             <p className="contactPara contactemail">
             {Object.values(saleEmail).map((item) => (
               <span className="contactMail"> {item} </span>
             ))}
             </p>
           </div>
           <div className="cardcontent">
             <img
               src={phone}
               alt="react logo"
               style={{ width: "20px", height: "20px" }}
             />

             <p className="contactPara contactmobile"> +91
             {Object.values(salePhone).map((item) => (
               <span className="contactMail"> {item} </span>
             ))}
             </p>
           </div>
         </div>
          }
         {!isEmpty(marketingMail) &&   <div className="contactCard">
            <div className="cardupper carduppermargin">
              <img
                src={card1}
                alt="react logo"
                style={{ width: "30px", height: "30px" }}
              />
              <h3 className="cardheading">Marketing Team</h3>
              <img
                src={deletebut}
                alt="react logo"
                style={{ width: "30px", height: "30px" }}
                className="carddelete"
                onClick={() =>
                  handleDelete('marketing')
                }
              />
              <img
                src={edit}
                alt="react logo"
                style={{ width: "20px", height: "20px" }}
                className="cardedit"
                onClick={() =>
                  setState({ isEdit: true, issales: false, type: "marketing" })
                }
              />
            </div>
            <div className="cardcontent cardcontentmargin">
              <img
                src={mail}
                alt="react logo"
                style={{ width: "20px", height: "20px" }}
              />

              <p className="contactPara contactemail contactleftmargin">
              {Object.values(marketingMail).map((item) => (
                <span className="contactMail" > {item} </span>
              ))}
              </p>
            </div>
            <div className="cardcontent">
              <img
                src={phone}
                alt="react logo"
                style={{ width: "20px", height: "20px" }}
              />

              <p className="contactPara contactmobile"> +91
              {Object.values(marketingPhon).map((item) => (
                <span className="contactMail" > {item} </span>
              ))}
              </p>
            </div>
          </div>}
        

          <div className="contactsave">
            <button className="savebutton" onClick={() => {
               setState({ isPaneOpen: false });
               handleSave()
            }}>Save</button>
          </div> 
        </SlidingPane>
      </div>

      <EditContact
        setState={setState}
        isEdit={state.isEdit}
        issales={state.issales}
        type={state.type}
      />
    </>
  );
};

export default Main;
