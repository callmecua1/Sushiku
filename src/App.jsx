import { useState, useRef, useEffect, startTransition } from "react";
import "./App.css";
import { Navbar } from "./components/navbar";
import "./components/customNavbar.css";
import Footer from "./components/footer";
import Menu from "./components/pages-components/menu";
import About from "./components/pages-components/about";
import Widget from "./components/pages-components/widget";
import Advertisment from "./components/pages-components/advertisment";
import Testimonials from "./components/pages-components/testimonials";
import Chefs from "./components/pages-components/chefs";
import Operationalday from "./components/pages-components/operationalday";
import FooterTagline from "./components/pages-components/footerTagline";
import FooterAds from "./components/pages-components/footerads";
import Form from "./components/pages-components/form";
import Contact from "./components/pages-components/contactBox";
import Bookingheader from "./components/pages-components/bookingheader";
import Header from "./components/pages-components/header";

function App() {
  // navbar start

  const openTab = () => {
    let openTabButton = document.querySelector(".openTab-btn");
    let navbarMenu = document.getElementById("navbar-tab");

    openTabButton.addEventListener("click", () => {
      navbarMenu.style.left = "0px";
    });
  };

  const closeTab = () => {
    let openButton = document.getElementById("open-tab-button");
    document.getElementById("navbar-tab").style.left = "1200px";
    setTimeout(() => {
      openButton.style.display = "block";
    }, 400);
  };

  // navbar end

  const reservationRef = useRef(null);
  const menuRef = useRef(null);
  const contactRef = useRef(null)

  const reservationScroll = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const menuScroll = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const contactScroll = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };



  return (
    <>
      <div className="navbar">
        <h2 className="navbar-title">Sushiku</h2>
        <img
          src="/src/assets/icon/settings.png"
          id="open-tab-button"
          className="openTab-btn"
          onClick={() => openTab()}
          alt="button"
        />
        <nav id="navbar-tab">
          <ul className=" lg:font-semibold">
            <li>Home</li>
            <li onClick={()=>menuScroll(menuRef.current)}>Menu</li>
            <li onClick={()=>reservationScroll(reservationRef.current)}>Reservation</li>
            <li onCanPlay={()=>contactScroll(contactRef.current)}>Contact Us</li>
            <li>Whats New?</li>
          </ul>
          <img
            src="/src/assets/icon/close (1).png"
            id="close-tab-button"
            className="closeTab-btn"
            onClick={() => closeTab()}
            alt="button"
          />
        </nav>
      </div>

      <div className="container w-full m-auto">
        <div className="header flex justify-center items-center flex-col">
          <Header />
          <div className="tagline-button text-white">
            <button
              onClick={() => reservationScroll(reservationRef.current)}
              id="reservation-button"
              className=" xl:text-xl"
            >
              Reservation
            </button>
            <button
              onClick={() => menuScroll(menuRef.current)}
              id="view-menu-button"
              className=" xl:text-xl"
            >
              View Menu
            </button>
          </div>
        </div>

        <div className="about-section w-full mt-10 md:flex justify-center items-center flex-col lg:flex-row ">
          <About />
        </div>

        <div className="widget-image w-full flex justify-center items-center flex-col mt-20 lg:flex-row lg:gap-5">
          <Widget />
        </div>

        <div className="menu-section w-full flex justify-center items-center flex-col mt-20 lg:mt-28">
          <div className="menu-section-textbox w-3/4 mt-4 xl:w-1/2 ">
            <h2
              ref={menuRef}
              className=" text-3xl md:text-4xl lg:text-3xl font-bold mb-4"
            >
              Featured Menu
            </h2>
            <p className=" md:text-xl lg:text-l xl:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>

          <div className="menu-table w-11/12 xl:w-10/12 mt-8 lg:flex lg:gap-5 ">
            <Menu />
          </div>
        </div>

        <div className=" booking-section w-full flex justify-center items-center flex-col mt-28">
          <Bookingheader />

          <div ref={contactRef} className=" lg:flex lg:gap-5 xl:justify-center xl:gap-10">
            <Contact />
            <div
              ref={reservationRef}
              className="booking-online w-full lg:w-1/2 xl:w-1/2 lg:mt-20 flex justify-center items-center flex-col mt-10 pb-3 md:mt-16 xl:mr-10 bg-slate-700"
            >
              <Form />
            </div>
          </div>
        </div>

        <Advertisment />
        <Testimonials />
        <Chefs />
        <Operationalday />
        <FooterTagline />
        <FooterAds />
      </div>
      <Footer />
    </>
  );
}

export default App;
