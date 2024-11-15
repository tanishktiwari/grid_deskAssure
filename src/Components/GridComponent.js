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
                            className="web-button web-button-theme "
                            href="http://console.deskassure.com"
                            rel="nofollow noopener noreferrer"
                            target="_blank"
                            style={{
                              backgroundColor: "transparent", // Corrected syntax for background-color
                              backgroundImage: "url(/new_image_1.svg)", // Corrected string syntax for background image
                              padding: "0 5px 10px",
                              backgroundRepeat: "no-repeat",
                              backgroundPosition: "50%",
                              backgroundSize: "150% 100%",
                              color: "var(--main-dark)",
                            }}
                          >
                            <span className="text-textcolor">
                              Go to Console
                            </span>
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
                      className="input-destination font-poppins"
                      id="destination"
                      maxLength="255"
                      placeholder="Enter Ticket Number"
                      type="text"
                      defaultValue=""
                    />
                  </div>
                  <div className="border-one"></div>
                  <div className="filter-engineer mt-2 text-lg font-poppins">
                    <select
                      className="input-engineer"
                      id="engineer-select"
                      disabled
                    >
                      <option value="">Select Engineer</option>
                      <option value="engineer1">Engineer 1</option>
                      <option value="engineer2">Engineer 2</option>
                      <option value="engineer3">Engineer 3</option>
                      <option value="engineer4">Engineer 4</option>
                    </select>
                  </div>

                  <div className="border-two"></div>
                  <div className="filter-available font-poppins">
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
            style={{ marginBottom: "4%" }}
          >
            <div className="container-10 header w-container  qwerty font-poppins">
              <h2
                className="font-poppins text-center mb-4 text-gray-600 tracking-tight"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "600",
                  color: "#49527b",
                  fontSize: "53px",
                  letterSpacing: "1%",
                }}
              >
                You raise service ticket
              </h2>
              <h3
                className="heading-5 green centre font-poppins"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "400",
                  fontSize: "20px",
                  textAlign: "center",
                  backgroundColor: "transparent", // Transparent background to allow image
                  padding: "10px 20px", // Adjust padding to increase height and width to match the text size
                  color: "#49527b", // Text color
                  display: "inline-block", // Ensure button aligns properly
                  textDecoration: "none", // Remove underline for the link
                  borderRadius: "8px", // Optional: Rounded corners
                  position: "relative", // Allow positioning of pseudo-element
                  overflow: "hidden", // Prevent background image from overflowing the button area
                }}
              >
                We give you all updates until the ticket is resolved
                <style>
                  {`
      h3::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: url(/new_image_1.svg); /* Path to your image */
        background-repeat: no-repeat;
        background-position: center;
        background-size: 25%; /* Adjust size as needed */
        transform: rotate(356deg); /* Rotate the background image */
        z-index: -1; /* Ensure text stays on top */
      }
    `}
                </style>
              </h3>

              <p
                className="paragraph-7 white map"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "200",
                  color: "#49527b",
                  fontSize: "15px",
                  textAlign: "center",
                  marginLeft: "12%",
                  marginRight: "12%",
                }}
              >
                Stay informed at every step of the way. With Deskassure, you'll
                receive timely updates via WhatsApp and email about the progress
                of your service ticket. Our automated process will keep you
                informed until your issue is completely resolved, ensuring
                transparency, convenience and peace of mind.
              </p>
              <a
                href=""
                className="button-primary w-button bg-gradient-to-bl from-yellow-500 via-orange-500 to-red-500 raise button"
                style={{
                  backgroundColor: "transparent", // Transparent background to allow image
                  backgroundImage: "url()", // Path to the background image
                  padding: "10px 20px", // Adjust padding to increase height and width to match the text size
                  backgroundRepeat: "no-repeat", // No repeating background
                  backgroundPosition: "center", // Center the image within the button
                  backgroundSize: "92%", // Cover the entire area of the button with the image
                  color: "var(--main-dark)", // Text color
                  display: "inline-block", // Ensure button aligns properly
                  textDecoration: "none", // Remove underline for the link
                  borderRadius: "8px", // Optional: Rounded corners
                  textAlign: "center", // Center the text inside the button
                  lineHeight: "1.5", // Adjust line height for better text alignment
                }}
              >
                Interested in DeskAssure?{""}
                <strong
                  className=""
                  style={{
                    backgroundColor: "transparent", // Transparent background to allow image
                    backgroundImage: "url(/new_image_2.svg)", // Path to the background image
                    padding: "10px 20px", // Adjust padding to increase height and width to match the text size
                    backgroundRepeat: "no-repeat", // No repeating background
                    backgroundPosition: "center", // Center the image within the button
                    backgroundSize: "92%", // Cover the entire area of the button with the image
                    color: "#49527b", // Text color
                    display: "inline-block", // Ensure button aligns properly
                    textDecoration: "none", // Remove underline for the link
                    borderRadius: "8px", // Optional: Rounded corners
                    textAlign: "center", // Center the text inside the button
                    lineHeight: "1.5", // Adjust line height for better text alignment
                  }}
                >
                  Watch a Demo Video
                </strong>
                .
              </a>
            </div>
          </div>
          <div
            id="w-node-d00632f3-03fb-2032-d93a-9f5d59610c77-117adce6"
            className="div-block-16 image zoek hello-block"
            style={{
              height: "350px", // Set a fixed height for the image container
              width: "100%", // Ensure it takes up the full width
              backgroundImage: "url(/desk_assure_laptop.gif)", // Add a background image (optional)
              backgroundSize: "70%", // Cover the entire div with the image
              backgroundPosition: "center", // Center the image
              backgroundRepeat: "no-repeat", // Prevent the image from repeating
              display: "flex", // Use flexbox to center content
              justifyContent: "center", // Horizontally center content
              alignItems: "center", // Vertically center content
            }}
          ></div>

          <div
            id="w-node-d00632f3-03fb-2032-d93a-9f5d59610c78-117adce6"
            className=""
            style={{
              height: "500px", // Set the height to 300px for both divs
              width: "100%", // Ensure full width
              display: "flex", // Flexbox to center content
              justifyContent: "center", // Center horizontally
              alignItems: "center", // Center vertically
              overflow: "hidden", // Hide anything that overflows
              backgroundColor: "#C1F11D", // Background color
              backgroundImage: "url('./image_lap_4.gif')", // Set the background image
              backgroundSize: "50%", // Set the background size to 50% of the div
              backgroundRepeat: "no-repeat", // Prevent background image from repeating
              backgroundPosition: "center", // Center the background image
              borderRadius: "15px",
            }}
          >
            <img
              src="./image_lap_4.gif"
              alt="Search"
              className="search-image"
              style={{
                maxWidth: "100%", // Ensure the image does not exceed the width of the div
                maxHeight: "100%", // Ensure the image does not exceed the height of the div
                width: "auto", // Maintain aspect ratio
                height: "auto", // Maintain aspect ratio
              }}
            />
          </div>

          <div
            id="w-node-d00632f3-03fb-2032-d93a-9f5d59610c79-117adce6"
            className="div-block-16 wit"
            style={{
              height: "350px", // Set the same height as the first div
              backgroundColor: "transparent", // Transparent background for the text container
              display: "flex", // Use flexbox for layout
              flexDirection: "column", // Stack elements vertically
              justifyContent: "center", // Center the text vertically
              alignItems: "center", // Center the text horizontally
              textAlign: "center", // Center align the text content
            }}
          >
            <div className="container-10 w-container font-poppins">
              <div>
                <h1
                  className="title font-poppins"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: "600",
                    color: "#49527b",
                    fontSize: "53px",
                    letterSpacing: "-2px",
                  }}
                >
                  Locate your service captains
                </h1>
                <h2
                  className="heading-5 font-poppins"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: "400",
                    fontSize: "20px",
                    color: "#49527b",
                  }}
                >
                  around you
                </h2>
              </div>
              <div>
                <p
                  className="paragraph-7 font-poppins"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: "200",
                    color: "#49527b",
                    fontSize: "15px",
                  }}
                >
                  Looking for a service captain near you? Easily locate our
                  service professionals using Deskassure. Simply enter your
                  Ticket number, and we'll provide you with a list of all the
                  open tickets assigned to captains ready to assist you.
                </p>
              </div>
              <a
                href=""
                className="button-primary on-green w-button font-poppins"
                style={{
                  backgroundColor: "transparent", // Transparent background to allow image
                  backgroundImage: "url(/1.svg)", // Path to the background image
                  padding: "10px 20px", // Adjust padding to match the button size
                  backgroundRepeat: "no-repeat", // No repeating background image
                  backgroundPosition: "center", // Center the image inside the button
                  backgroundSize: "120%", // Increase the background image size
                  color: "var(--main-dark)", // Text color
                  display: "inline-block", // Ensure the button is aligned properly
                  textDecoration: "none", // Remove underline
                  borderRadius: "8px", // Optional: Add rounded corners
                  textAlign: "center", // Center the text inside the button
                  lineHeight: "1.5", // Adjust line height for better text alignment
                }}
              >
                <span className="text-customcolor font-semibold tracking-tight">
                  <span className="uppercase">T</span>rack your Service Agent
                </span>
              </a>
            </div>
          </div>

          <div
            id="w-node-d00632f3-03fb-2032-d93a-9f5d59610c8d-117adce6"
            className="unique-div-voorkeur"
          ></div>

          <div
            id="w-node-d00632f3-03fb-2032-d93a-9f5d59610c8e-117adce6"
            className="container-10 groen w-container"
            style={{
              height: "500px", // Set the same height as the first div
              display: "flex", // Flexbox for centering content
              flexDirection: "column", // Stack content vertically
              justifyContent: "center", // Center content vertically
              alignItems: "center", // Center content horizontally
              padding: "10px", // Optional padding
            }}
          >
            <h2
              className="title font-poppins"
              style={{
                textAlign: "center",
                fontFamily: "Poppins, sans-serif",
                fontWeight: "600",
                color: "#49527b",
                fontSize: "43px",
              }}
            >
              Knowledgebase & FAQs
            </h2>
            <h3
              className="heading-5 font-poppins"
              style={{
                textAlign: "center",
                fontSize: "20px",
                fontWeight: "400",
                color: "#49527b",
              }}
            >
              and a lot of DIY stuff at your fingertips
            </h3>
            <p
              className="paragraph-7 font-poppins"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "200",
                color: "#49527b",
                fontSize: "13px",
                textAlign: "center",
                paddingLeft: "4.5%",
                paddingRight: "4.5%",
                paddingTop: "2%",
              }}
            >
              Empower yourself with our personalized knowledgebase and DIY
              videos. Access tailored solutions and step-by-step guides designed
              to help you resolve common issues independently. Learn at your own
              pace and find the answers you need to get the most out of your
              Deskassure Learning.
            </p>
          </div>
        </div>
      </section>
      <div
        className="section-2 black clear qaz"
        style={{
          backgroundImage: "url('/tag.svg')", // Path to your SVG image
          backgroundSize: "28%", // Ensure the image covers the entire background
          backgroundPosition: "center", // Center the background image
          backgroundRepeat: "no-repeat", // Prevent the background image from repeating
          height: "50vh",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div className="container-10 map w-container">
          <a
            href=""
            target="_blank"
            className="link-block-5 w-inline-block"
            rel="noopener noreferrer"
          >
            <div
              className="div-block-17"
              style={{ paddingLeft: "0", marginLeft: "0" }}
            >
              <h2
                className="title header font-poppins"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "600",
                  color: "#49527b",
                  fontSize: "53px",
                  textAlign: "center",
                }}
              >
                Go to DeskAssure Live Locator
              </h2>
              <img
                src="https://grid.com/web/images/np_up_1581624_0DBC81.svg"
                width="58"
                alt=""
                className="image-16 arrow-image"
                style={{
                  filter:
                    "invert(48%) sepia(91%) saturate(640%) hue-rotate(57deg) brightness(94%) contrast(91%)",
                }}
              />
            </div>
          </a>

          <div
            className="div-block-18"
            style={{ paddingLeft: "0", marginLeft: "0" }}
          >
            <p
              className="paragraph-7 white map centre font-poppins"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "200",
                color: "#49527b",
                fontSize: "15px",
                textAlign: "center",
                marginLeft: "12%",
                marginRight: "12%",
              }}
            >
              With one simple click, we connect and give your visibility to the
              nearest service captains in your area. No more hassle with endless
              searching and guessing and waiting for help. Our integrated map
              feature puts you in control and lets you quickly find the solution
              to all your problems.
            </p>
            <div style={{ marginBottom: "10%" }}>
              <a
                href="http://console.deskassure.com"
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                <strong
                  className="ideal font-poppins"
                  style={{ color: "rgb(73, 82, 123)" }}
                >
                  Open your first Deskassure Ticket now
                </strong>
              </a>
            </div>
          </div>
        </div>
      </div>

      <section className="section6" style={{ marginTop: "25px" }}>
        <div className="">
          <div
            id="w-node-_81fae34e-2068-60c8-1384-3531e3285d04-e3285d04"
            className="container-10 _5 w-container"
            style={{
              backgroundColor: "#fffee9", // Background color (optional)
              backgroundImage: "url(/tick.svg)", // Path to your image
              backgroundRepeat: "no-repeat", // Prevent image from repeating
              backgroundPosition: "center", // Center the image
              backgroundSize: "80% 80%", // Reduce the image size (30% width and 30% height)
              height: "80vh", // Set height to 80% of the viewport height
              marginBottom: "0px", // Optional: Adjust margin as needed
            }}
          >
            <h2
              className="title zwart Download pl-3 pr-3"
              style={{
                textAlign: "center",
                fontSize: "53px",
                fontWeight: "600",
                marginTop: "15%",
              }}
            >
              Download the DeskAssure app
            </h2>

            <h3
              className="heading-5 red left solutions font-poppins pl-3 pr-3"
              style={{
                textAlign: "center",
                fontSize: "25px",
                marginLeft: "15.85%",
                marginRight: "15.85%",
              }}
            >
              Raise Ticket, find solutions, get notified in real time and <br />
              chat with the live agents
            </h3>
            <p
              className="paragraph-7 black font-poppins pl-3 pr-3"
              style={{ textAlign: "right" }}
            ></p>

            {/* Added Company Numbers Section Below */}
            <div
              className="company-numbers-wrap"
              style={{
                backgroundColor: "#0000",
                borderRadius: "2em",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                display: "flex",
              }}
            >
              <div
                className="number-wrap"
                style={{
                  gridColumnGap: ".5em",
                  gridRowGap: ".5em",
                  flexFlow: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  paddingLeft: "2em",
                  paddingRight: "2em",
                  display: "flex",
                }}
              >
                <h1
                  className="number-title font-poppins"
                  style={{
                    fontSize: "4em",
                    fontWeight: "700",
                    color: "#49527b",
                  }}
                >
                  5000
                </h1>
                <div
                  className="number-text"
                  style={{
                    color: "var(--color--black)",
                    textAlign: "center",
                    maxWidth: "300px",
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "1em",
                    fontWeight: "300",
                    lineHeight: "1.5",
                    marginTop: "-7%",
                    color: "#49527b",
                  }}
                >
                  Tickets raised per month
                  <br />
                  companies
                </div>
              </div>
              <div
                className="number-wrap"
                style={{
                  gridColumnGap: ".5em",
                  gridRowGap: ".5em",
                  flexFlow: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  paddingLeft: "2em",
                  paddingRight: "2em",
                  display: "flex",
                }}
              >
                <h1
                  className="number-title font-poppins"
                  style={{
                    fontSize: "4em",
                    fontWeight: "700",
                    color: "#49527b",
                  }}
                >
                  100+
                </h1>
                <div
                  className="number-text"
                  style={{
                    color: "var(--color--black)",
                    textAlign: "center",
                    maxWidth: "300px",
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "1em",
                    fontWeight: "300",
                    lineHeight: "1.5",
                    marginTop: "-7%",
                    color: "#49527b",
                  }}
                >
                  Organisations Registered
                </div>
              </div>
              <div
                className="number-wrap"
                style={{
                  gridColumnGap: ".5em",
                  gridRowGap: ".5em",
                  flexFlow: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  paddingLeft: "2em",
                  paddingRight: "2em",
                  display: "flex",
                }}
              >
                <h1
                  className="number-title font-poppins"
                  style={{
                    fontSize: "4em",
                    fontWeight: "700",
                    color: "#49527b",
                  }}
                >
                  20000
                </h1>
                <div
                  className="number-text"
                  style={{
                    color: "var(--color--black)",
                    textAlign: "center",
                    maxWidth: "300px",
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "1em",
                    fontWeight: "300",
                    lineHeight: "1.5",
                    marginTop: "-7%",
                    color: "#49527b",
                  }}
                >
                  Whatsapp API hits per week
                </div>
              </div>
            </div>
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
                        className="font-poppins"
                        style={{
                          backgroundColor: "transparent", // Corrected syntax for background-color
                          backgroundImage: "url(/new_image_1.svg)", // Corrected string syntax for background image
                          padding: "0 5px 10px",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "50%",
                          backgroundSize: "100% 100%",
                          color: "var(--main-dark)",
                        }}
                      >
                        <span className="text-textcolor ">Go to Console</span>
                      </a>
                    </li>

                    <li className="element-footer-nav-item font-poppins">
                      <a
                        href=""
                        style={{
                          backgroundColor: "transparent", // Corrected syntax for background-color
                          backgroundImage: "url(/new_image_1.svg)", // Corrected string syntax for background image
                          padding: "0 5px 10px",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "50%",
                          backgroundSize: "150% 100%",
                          color: "var(--main-dark)",
                        }}
                      >
                        <span className="text-textcolor">Blogs</span>
                      </a>
                    </li>
                    <li className="element-footer-nav-item font-poppins">
                      <a
                        href=""
                        style={{
                          backgroundColor: "transparent", // Corrected syntax for background-color
                          backgroundImage: "url(/new_image_1.svg)", // Corrected string syntax for background image
                          padding: "0 5px 10px",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "50%",
                          backgroundSize: "150% 100%",
                          color: "var(--main-dark)",
                        }}
                      >
                        <span className="text-textcolor ">Subscribe</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="element-footer-bottom">
                <div className="element-footer-reserved font-poppins">
                  © 2024 DeskAssure All rights reserved.
                </div>
                <ul className="element-footer-legal-links">
                  <li className="element-footer-legal-links-item font-poppins">
                    <a
                      href=""
                      style={{
                        backgroundColor: "transparent", // Corrected syntax for background-color
                        backgroundImage: "url(/new_image_2.svg)", // Corrected string syntax for background image
                        padding: "0 5px 10px",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "50%",
                        backgroundSize: "80% 300%",
                        color: "var(--main-dark)",
                      }}
                    >
                      <span className="text-textcolor">
                        Terms and conditions
                      </span>
                    </a>
                  </li>
                  <li className="element-footer-legal-links-item font-poppins">
                    <a
                      href=""
                      style={{
                        backgroundColor: "transparent", // Corrected syntax for background-color
                        backgroundImage: "url(/new_image_2.svg)", // Corrected string syntax for background image
                        padding: "0 5px 10px",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "50%",
                        backgroundSize: "80% 300%",
                        color: "var(--main-dark)",
                      }}
                    >
                      <span className="text-textcolor">
                        Privacy &amp; cookie policy
                      </span>
                    </a>
                  </li>
                  <li className="element-footer-legal-links-item element-language-selector">
                    <div className="language-selector-wrapper">
                      <div className="language-selector-label font-poppins">
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
                          <div className="language-selector-popup-title font-poppins">
                            Select country or language
                          </div>
                          <div className="language-selector-popup-description font-poppins">
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
                              className="language-selector-popup-option language-selector-popup-option-active language-selector-flag font-poppins"
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
                              <a href="" className="font-poppins">
                                Nederlands
                              </a>
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
