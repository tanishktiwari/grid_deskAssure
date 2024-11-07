import React from "react";
import { useState } from "react";
import "./components.css";
import "./default.css";
import "./grid-en.css";
import "./normalize.css";

const GridComponent = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div>
      <div id="MENU-EN" className="navbar-logo-left">
        <div className="text-block-16">
          <div className="web-element element-header" id="element-id-header">
            <div className="element-header-wrapper">
              <div className="element-header-logo">
                <img
                  src="./Logo.png"
                  className="logo_image"
                  alt="Logo"
                  onClick={() =>
                    (window.location.href = "https://www.deskassure.com/")
                  }
                  style={{ cursor: "pointer" }}
                />
              </div>

              <nav className="element-header-nav" role="navigation">
                <div className="element-header-nav-container">
                  <div className="element-header-nav-list-container">
                    <div className="element-header-nav-list-wrapper">
                      <ul className="element-header-nav-list" role="list">
                        <li className="element-header-nav-item">
                          <a
                            className="web-button web-button-theme bg-gradient-to-bl from-yellow-500 via-orange-500 to-red-500"
                            href="http://console.deskassure.com"
                            rel="nofollow noopener noreferrer"
                            target="_blank"
                          >
                            Go to Console
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <a
                  className="element-header-nav-button bg-gradient-to-bl from-yellow-500 via-orange-500 to-red-500 w-[100%] web-button web-button-theme"
                  href="http://console.deskassure.com"
                  rel="nofollow noopener noreferrer"
                  target="_blank"
                  role="button"
                ></a>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="section-2 black">
        <div className="container-10 map nog-border w-container">
          <div>
            <div
              className="web-element element-search-bar search-bar"
              id="element-id-search-bar"
            >
              <div className="search-bar">
                <div className="search-bar-grid" id="search-form">
                  <div className="filter-destination">
                    <input
                      className="input-destination"
                      id="destination"
                      maxLength="255"
                      placeholder="Enter Ticket Number"
                      type="text"
                      defaultValue=""
                    />
                  </div>
                  <div className="border-one"></div>
                  <div className="filter-engineer mt-2 text-lg">
                    <select className="input-engineer" id="engineer-select">
                      <option value="">-- Select Engineer --</option>
                      <option value="engineer1">Engineer 1</option>
                      <option value="engineer2">Engineer 2</option>
                      <option value="engineer3">Engineer 3</option>
                      <option value="engineer4">Engineer 4</option>
                      {/* Add more engineers as needed */}
                    </select>
                  </div>

                  <div className="border-two"></div>
                  <div className="filter-available">
                    <label className="label-available" htmlFor="available">
                      Ticket Status
                    </label>
                    <label className="input-available">
                      <input
                        type="checkbox"
                        id="available-toggle"
                        name="available-toggle"
                      />
                      <span
                        className="input-available-switch"
                        data-on="Yes"
                        data-off="Closed"
                      ></span>
                    </label>
                  </div>
                  <div className="filter-buttons">
                    <button className="input-button" type="button">
                      &nbsp;
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="section-5">
        <div className="w-layout-grid grid-5">
          <div
            id="w-node-d00632f3-03fb-2032-d93a-9f5d59610c6d-117adce6"
            className="div-block-16 _2"
          >
            <div className="container-10 header w-container qwerty">
              <h2 className="title header raise">You raise service ticket</h2>
              <h3 className="heading-5 green centre">
                we give you all updates until the ticket is resolved
              </h3>
              <p className="paragraph-7 white map">
                Stay informed at every step of the way. With Deskassure, you'll
                receive timely updates via WhatsApp and email about the progress
                of your service ticket. Our automated process will keep you
                informed until your issue is completely resolved, ensuring
                transparency, convenience and peace of mind.
              </p>
              <a
                href=""
                className="button-primary w-button bg-gradient-to-bl from-yellow-500 via-orange-500 to-red-500 raise button"
              >
                Interested in DeskAssure?{" "}
                <strong className="text-white">Watch a Demo Video</strong>.
              </a>
            </div>
          </div>
          <div
            id="w-node-d00632f3-03fb-2032-d93a-9f5d59610c77-117adce6"
            className="div-block-16 image zoek hello-block"
          ></div>
          <div
            id="w-node-d00632f3-03fb-2032-d93a-9f5d59610c78-117adce6"
            className="div-block-16 image zoek-unique" // Updated class name
          >
            <img
              src="https://grid.com/web/images/SEARCH.webp"
              alt="Search"
              className="search-image" // Keep the class for styling
            />
          </div>

          <div
            id="w-node-d00632f3-03fb-2032-d93a-9f5d59610c79-117adce6"
            className="div-block-16 wit"
          >
            <div className="container-10 bg-gradient-to-bl from-yellow-500 via-orange-500 to-red-500 w-container">
              <div>
                <h1 className="title">Locate your service captains</h1>
                <h2 className="heading-5">around you</h2>
              </div>
              <div>
                <p className="paragraph-7">
                  Looking for a service captain near you? Easily locate our
                  service professionals using Deskassure. Simply enter your
                  Ticket number, and we'll provide you with a list of all the
                  open tickets are assigned captains ready to assist you.
                </p>
              </div>
              <a href="" className="button-primary on-green w-button">
                <b>Track your Service Agent</b>
              </a>
            </div>
          </div>
          <div
            id="w-node-d00632f3-03fb-2032-d93a-9f5d59610c85-117adce6"
            className="div-block-16 image detail"
          ></div>
          <div
            id="w-node-d00632f3-03fb-2032-d93a-9f5d59610c86-117adce6"
            className="rahul container-10 _2 w-container bg-gradient-to-bl from-yellow-500 via-orange-500 to-red-500"
          >
            <h2 className="title zwart now">Now enjoy Zero Downtime</h2>
            <h3 className="heading-5 white">With DeskAssure ZERO</h3>
            <p className="paragraph-7 black font-bold">
              Experience personalized support like never before. Our
              customizable support console allows you to tailor your
              interactions with customers, making them feel valued and
              understood. From personalized greetings to tailored
              recommendations, we'll help you create a truly unique and
              satisfying support experience.
            </p>
          </div>
          <div
            id="w-node-d00632f3-03fb-2032-d93a-9f5d59610c8d-117adce6"
            className="unique-div-voorkeur"
          ></div>

          <div
            id="w-node-d00632f3-03fb-2032-d93a-9f5d59610c8e-117adce6"
            className="container-10 groen w-container bg-gradient-to-bl from-yellow-500 via-orange-500 to-red-500"
          >
            <h2 className="title">Knowledgebase & FAQs</h2>
            <h3 className="heading-5">
              and a lot of DIY stuff at your fingertips
            </h3>
            <p className="paragraph-7">
              Empower yourself with our personalized knowledgebase and DIY
              videos. Access tailored solutions and step-by-step guides designed
              to help you resolve common issues independently. Learn at your own
              pace and find the answers you need to get the most out of your
              Deskassure Learning.
            </p>
          </div>
        </div>
      </section>
      <div className="section-2 black clear qaz">
        <div className="container-10 map w-container">
          <a
            href=""
            target="_blank"
            className="link-block-5 w-inline-block"
            rel="noopener noreferrer"
          >
            <div className="div-block-17">
              <h2 className="title header">Go to DeskAssure Live Locator</h2>
              <img
                src="https://grid.com/web/images/np_up_1581624_0DBC81.svg"
                width="58"
                alt=""
                className="image-16 arrow-image"
                style={{
                  filter:
                    "invert(56%) sepia(76%) saturate(389%) hue-rotate(6deg) brightness(97%) contrast(93%)",
                }}
              />
            </div>
          </a>
          <div className="div-block-18">
            <p className="paragraph-7 white map centre">
              With one simple click, we connect and give your visibility to the
              nearest service captains in your area. No more hassle with endless
              searching and guessing and waiting for help. Our integrated map
              feature puts you in control and lets you quickly find the solution
              to all your problems.
            </p>
            <a
              href="http://console.deskassure.com"
              rel="nofollow noopener noreferrer"
              target="_blank"
            >
              <strong className="text-white ideal">
                Open your first Deskassure Ticket now
              </strong>
            </a>
          </div>
        </div>
      </div>
      <section className="section6">
        <div className="w-layout-grid grid-5 _4-blocks">
          <div
            id="w-node-fa78de3b-bb1f-9f6d-38d5-51cb56632550-117adce6"
            className="div-block-16 image koffie bg-gradient-to-bl from-yellow-500 via-orange-500 to-red-500"
          ></div>
          <div
            id="w-node-_596b18d4-2bc5-7cc5-0ef0-38855c1ced5f-117adce6"
            className="div-block-16 wit"
          >
            {/* <div className="container-10 w-container">
              <div>
                <h2 className="title">Fancy a coffee?</h2>
                <h3 className="heading-5">or a place to recharge yourself?</h3>
              </div>
              <div>
                <p className="paragraph-7">
                  Recharge yourself with a delicious cup of coffee and discover
                  the perfect restaurants and stores near your favorite charging
                  station. Don&#x27;t just charge your car, make your charging
                  moment an opportunity to enjoy all that the area has to offer.
                </p>
              </div>
              <a
                href="https://app.grid.com"
                target="_blank"
                className="button-primary on-green w-button"
                rel="noopener noreferrer"
              >
                view amenities nearby
              </a>
            </div> */}
          </div>
          <div
            id="w-node-f54bfbb0-2421-5312-840b-3ecae3303885-117adce6"
            className="unique-div-background"
          >
            <img
              src="./desk_assure_3.gif"
              alt="Descriptive Alt Text"
              className="overlay-image"
            />
          </div>

          <div
            id="w-node-_81fae34e-2068-60c8-1384-3531e3285d04-e3285d04"
            className="container-10 _5 w-container bg-gradient-to-bl from-yellow-500 via-orange-500 to-red-500"
          >
            <h2 className="title zwart Download">
              Download the DeskAssure app
            </h2>
            <h3 className="heading-5 red left solutions">
              Raise Ticket, find solutions, get notified in real time and chat
              with the live agents
            </h3>
            <p className="paragraph-7 black">
              Experience seamless service requests with Deskassure. Raise
              tickets, track progress, and get real-time updates. Connect with
              live agents for personalized support. Explore our knowledgebase
              and find trusted professionals near you. Simplify your service
              needs with Deskassure.
            </p>
            {/* <div className="div-block-40">
              <a
                href=""
                target="_blank"
                className="w-inline-block"
                rel="noopener noreferrer"
              >
                <img
                  src="https://grid.com/web/images/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
                  loading="lazy"
                  alt=""
                />
              </a>
              <a
                href=""
                target="_blank"
                className="google-play w-inline-block"
                rel="noopener noreferrer"
              >
                <img
                  src="https://grid.com/web/images/en_badge_web_generic.png"
                  alt=""
                  className="image-29"
                />
              </a>
            </div> */}
          </div>
        </div>
      </section>

      <div className="footer">
        <div className="padding-global"></div>
        <div className="text-block-17">
          <div className="web-element element-footer" id="element-id-footer">
            <div className="element-footer-wrapper">
              <div className="element-footer-top">
                <div className="element-footer-logo">
                  <a href=""></a>
                </div>
                <div className="element-footer-nav">
                  <ul className="element-footer-nav-list">
                    <li className="element-footer-nav-item">
                      <a
                        href="http://console.deskassure.com"
                        rel="nofollow noopener noreferrer"
                        target="_blank"
                      >
                        Go to Console
                      </a>
                    </li>

                    <li className="element-footer-nav-item">
                      <a href="">Blogs</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="element-footer-bottom">
                <div className="element-footer-reserved">
                  © 2024 DeskAssure All rights reserved.
                </div>
                <ul className="element-footer-legal-links">
                  <li className="element-footer-legal-links-item">
                    <a href="">Terms and conditions</a>
                  </li>
                  <li className="element-footer-legal-links-item">
                    <a href="">Privacy &amp; cookie policy</a>
                  </li>
                  <li className="element-footer-legal-links-item element-language-selector">
                    <div className="language-selector-wrapper">
                      <div className="language-selector-label">
                        Selected language:
                      </div>
                      <div
                        className="language-selector-button language-selector-flag"
                        style={{
                          "--background-image":
                            "url('https://grid.com/images/flags/US.png')",
                        }}
                      >
                        English
                      </div>
                      <div
                        id="language-selector-popup"
                        className="language-selector-popup"
                      >
                        <div className="language-selector-popup-wrapper">
                          <div className="language-selector-popup-close"></div>
                          <div className="language-selector-popup-title">
                            Select country or language
                          </div>
                          <div className="language-selector-popup-description">
                            Current language:{" "}
                            <span
                              className="language-selector-popup-current"
                              lang="en-us"
                            >
                              English
                            </span>
                          </div>
                          <div className="language-selector-popup-list">
                            <div
                              className="language-selector-popup-option language-selector-popup-option-active language-selector-flag"
                              style={{
                                "--background-image":
                                  "url('https://grid.com/images/flags/US.png')",
                              }}
                              lang="en-us"
                            >
                              <a href="">English</a>
                            </div>
                            <div
                              className="language-selector-popup-option language-selector-flag"
                              style={{
                                "--background-image":
                                  "url('https://grid.com/images/flags/NL.png')",
                              }}
                              lang="nl-nl"
                            >
                              <a href="">Nederlands</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridComponent;
