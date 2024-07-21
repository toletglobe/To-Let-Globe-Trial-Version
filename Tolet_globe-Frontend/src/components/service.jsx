import React from "react";
import "../style/service.css";
import Image1 from "../assets/image/service/image18.png";
import Image2 from "../assets/image/service/image21.png";
import Image3 from "../assets/image/service/image23.png";
import Image4 from "../assets/image/service/image25.png";
import Image5 from "../assets/image/service/image27.png";
import Image6 from "../assets/image/service/image29.png";
// import { Footer } from './footer'

export const Service = () => {
  return (
    <>
      <div className="serviceouterdiv">
        <div className="serviced2">
          <p className="serviceh1">Services</p>
          <p className="serviceh2">
            SKIP THE MIDDLEMAN : RENT OR LEASE DIRECTLY ON TO-LET GLOBE
          </p>
        </div>

        <div className="row-container">
          <div className="serviced1">
            <div className="box1">
              <div className="box12">
                <img className="servicepageimage" src={Image1} alt=""></img>
              </div>
              <div className="box13">
                <p className="servicepagetext">Paying Guest</p>
                <div className="box14">
                  Find budget-frinedly and Convient paying guest accomadations
                  for a Comfortable stay away from home
                </div>
              </div>
            </div>

            <div className="box1">
              <div className="box12">
                <img className="servicepageimage" src={Image2} alt="" />
              </div>
              <div className="box23">
                <p className="servicepagetext">Flat</p>
                <div className="box14">
                  Discover a diverse range of apartments for rent, customize to
                  suit your lifestyle and budget
                </div>
              </div>
            </div>

            <div className="box1">
              <div className="box12">
                <img className="servicepageimage" src={Image3} alt=""></img>
              </div>
              <div className="box13">
                <p className="servicepagetext">House</p>
                <div className="box14">
                  Search for your dream home, available for rent or sale,
                  tailored to your lifestyle and preferences
                </div>
              </div>
            </div>
          </div>
          <div className="serviced1">
            <div className="box1">
              <div className="box12">
                <img className="servicepageimage" src={Image4} alt=""></img>
              </div>
              <div className="box23">
                <p className="servicepagetext">Shop</p>
                <div className="box14">
                  Explore a variety of retail spaces and shops available for
                  lease, ideal for growing your business
                </div>
              </div>
            </div>

            <div className="box1">
              <div className="box12">
                <img className="servicepageimage" src={Image5} alt=""></img>
              </div>
              <div className="box13">
                <p className="servicepagetext">Office</p>
                <div className="box14">
                  Elevate your workspace and productivity with modern office
                  spaces for ent, designed for success
                </div>
              </div>
            </div>
            <div className="box1">
              <div className="box12">
                <img className="servicepageimage" src={Image6} alt=""></img>
              </div>
              <div className="box23">
                <p className="servicepagetext">Warehouse</p>
                <div className="box14">
                  Secure the perfect godwon space for rent, offering ample
                  storage and logistics solutions
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Footer/> */}
      </div>
    </>
  );
};
