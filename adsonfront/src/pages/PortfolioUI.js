import React, { useState, useEffect, useRef } from "react";
import Contacts from "../components/User/Contacts/Contacts";


import About from "../components/User/About/About";
import Footer from "../components/User/Footer/Footer";
import PageIntro from "../components/User/PageIntro/PageIntro";
import Projects from "../components/User/Projects/Projects";

import isLogin from "../shared/authorization";
import { useSelector } from "react-redux";
import Navbar from "../components/User/Navbar/Navbar";

const PortfolioUI = () => {
  const [isLogged, setIsLogged] = useState(isLogin);
  const login = useSelector((state) => state.login.isLogin);
  const projectSection = useRef(null);
  
  
  const contactSection = useRef(null);
  const homeSection = useRef(null);
  const aboutSection = useRef(null);

  useEffect(() => {
    setIsLogged(isLogin);
  }, [login]);

  const scrollUtil = (section) => {
    window.scrollTo({
      top: section.current.offsetTop,
      behavior: "smooth",
    });
  };
  const onLinkClick = (section) => {
    switch (section) {
      case "projectSection":
        scrollUtil(projectSection);
        break;
        case "aboutSection":
          scrollUtil(aboutSection);
          break;
      
      
      case "contactSection":
        scrollUtil(contactSection);
        break;
      case "homeSection":
        scrollUtil(homeSection);
        break;
      default:
        scrollUtil(homeSection);
    }
  };

  return (
    <div>
      {!isLogged && <Navbar onLinkClick={onLinkClick} />}
      <PageIntro reff={homeSection} />
      <About reff={aboutSection}/>
      
      <Projects reff={projectSection} />
      <Contacts reff={contactSection} />
      <Footer onLinkClick={onLinkClick} />
    </div>
  );
};

export default PortfolioUI;
