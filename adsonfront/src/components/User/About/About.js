import React from "react";
import profil from "../../../assets/images/profil1.jpg";
import "./About.css";

const About = ({ reff }) => {
  return (
    <section
      ref={reff}
      id="about"
      className="py-5"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="container">
        <h2 className="h1-responsive font-weight-bold text-center mb-5">
          About Us
        </h2>

        <div className="row">
          <div className="col-12 col-lg-4">
            <img className="d-block mx-auto mb-4" src={profil} alt="profil" />
          </div>
          <div className="col-lg-8">
            <p className="text-font text-justify">
            orem Ipsum is simply dummy text of the printing and 
            typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, when an unknown 
            printer took a galley of type and scrambled it to make a 
            type specimen book. It has survived not only five centuries,
             but also the leap into electronic typesetting, remaining 
             essentially unchanged. It was popularised in the 1960s 
             with the release of Letraset sheets containing Lorem 
             Ipsum passages, and more recently with desktop publishing 
             software like Aldus PageMaker including versions of Lorem 
             Ipsum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
