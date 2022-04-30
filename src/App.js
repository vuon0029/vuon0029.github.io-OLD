import "./App.css";
import React, { useRef, useEffect } from "react";
import CarouselContainer from "./components/Carousel";
import Keyboard from "./components/Keyboard";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import {
  SiFirebase,
  SiCss3,
  SiHtml5,
  SiAmazonaws,
  SiExpo,
  SiNodedotjs,
  SiFigma,
  SiGithub,
} from "react-icons/si";
import { useForm, ValidationError } from "@formspree/react";
import useOnScreen from "./helpers/useOnScreen";

function App() {
  const homeRef = useRef();
  const portfolioRef = useRef();
  const contactRef = useRef();
  const aboutRef = useRef();

  const keyboard = document.getElementById("keyboard");
  const isVisible = useOnScreen(contactRef);

  useEffect(() => {
    if (keyboard) {
      if (isVisible) {
        keyboard.classList.add("keyboard-on");
      } else {
        keyboard.classList.remove("keyboard-on");
      }
    }
  }, [isVisible]);

  const scrollRef = (ref, where) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: where,
      inline: "nearest",
    });
  };

  useEffect(() => {
    const script = document.createElement("script");
    const github = document.createElement("script");

    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    script.async = true;
    script.defer = true;
    const about = document.getElementById("about");

    about.appendChild(script);

    github.src = "//cdn.jsdelivr.net/github-cards/latest/widget.js";
    github.async = true;
    github.defer = true;
    const contact = document.getElementById("github");

    contact.appendChild(github);

    return () => {
      about.removeChild(script);
      contact.removeChild(github);
    };
  }, []);
  const [state, handleSubmit] = useForm("mqkarobp");
  if (state.succeeded) {
    return <p>Thanks for sending!</p>;
  }

  return (
    <div className="App">
      <div className="bottom-left">
        <div
          onClick={() => {
            scrollRef(homeRef, "end");
          }}
          className="nav-text"
        >
          home
        </div>
        <div className="line"></div>
        <div
          onClick={() => {
            scrollRef(portfolioRef, "start");
          }}
          className="nav-text"
        >
          portfolio
        </div>
      </div>
      <div className="bottom-right">
        <div
          onClick={() => {
            scrollRef(aboutRef, "start");
          }}
          className="nav-text"
        >
          about
        </div>
        <div className="line"></div>
        <div
          onClick={() => {
            scrollRef(contactRef, "start");
          }}
          className="nav-text"
        >
          contact
        </div>
      </div>

      <header className="App-header">
        {/* HOME */}
        <div className="container">
          <div className="border"></div>
          <div className="banner"></div>

          <div ref={homeRef} className="centered content">
            <div className="text first">kiet</div>
            <div className="text second">tuan</div>
            <div className="text third">vuong</div>
          </div>
        </div>

        {/* PORTFOLIO */}
        <div className="container">
          {/* BG IMAGE */}
          <div className="banner2"></div>
          <div className="content skills-holder">
            <div ref={portfolioRef} className="skills-header">
              skills
            </div>

            {/* DEVELOPMENT */}
            <div className="dev-holder">
              <div className="icon">
                <SiJavascript color="#f0d81d" size={45} />
                {/* <p className="secondary-text">2 years of experience</p> */}
              </div>
              <div className="icon">
                <FaReact color="#61dbfc" size={45} />
                {/* <p className="secondary-text">1 year of experience</p> */}
              </div>
              <div className="icon">
                <SiFirebase color="orange" size={45} />
                {/* <p className="secondary-text">less than 1 year of experience</p> */}
              </div>
              <div className="icon">
                <SiCss3 color="#2196f3" size={45} />
                {/* <p className="secondary-text">2 years of experience</p> */}
              </div>
              <div className="icon">
                <SiHtml5 color="#ff5722" size={45} />

                {/* <p className="secondary-text">2 years of experience</p> */}
              </div>
              <div className="icon">
                <SiAmazonaws color="#f68e08" size={45} />
                {/* <p className="secondary-text">less than 1 year of experience</p> */}
              </div>
              <div className="icon">
                <SiExpo color="white" size={45} />
                {/* <p className="secondary-text">less than 1 year of experience</p> */}
              </div>
              <div className="icon">
                <SiNodedotjs color="#8bc500" size={45} />
                {/* <p className="secondary-text">less than 1 year of experience</p> */}
              </div>
              <div className="icon">
                <SiFigma color="#f24e1e" size={45} />
                {/* <p className="secondary-text">less than 1 year of experience</p> */}
              </div>
              <div className="icon">
                <SiGithub color="white" size={45} />
                {/* <p className="secondary-text">less than 1 year of experience</p> */}
              </div>
            </div>
          </div>

          <div className="content portfolio-holder">
            <div className="skills-header">projects</div>

            {/* PROJECT CAROUSEL */}
            <div className="carousel-container">
              <CarouselContainer />
            </div>
          </div>
        </div>

        {/* ABOUT */}
        <div className="container">
          <div className="banner3"></div>

          <div ref={aboutRef} className="content about-header">
            about me
          </div>

          <div className="content about-holder">
            <p className="about-text">
              Hey! I'm Kiet. I am a full-stack developer with a passion for
              creating interactive, intuitive and responsive user interfaces. My
              background includes working on mobile applications and websites.
              In my spare time, I enjoy building keyboards and exploring new
              technologies.
            </p>
          </div>

          <div id="about" className="linkedin">
            <div
              class="badge-base LI-profile-badge"
              data-locale="en_US"
              data-size="large"
              data-theme="dark"
              data-type="HORIZONTAL"
              data-vanity="vuong-tuan-kiet"
              data-version="v1"
            />
            <div id="github">
              <div
                class="github-card"
                data-github="vuon0029"
                data-width="400"
                data-height="318"
                data-theme="medium"
              />
            </div>
            <iframe
              className="insta-card"
              width="400"
              height="318"
              src="https://www.instagram.com/p/Cc7B9uEuDma/embed/"
              frameborder="0"
            ></iframe>
          </div>

          <div ref={contactRef} className="content contact-header">
            contact me
          </div>
          <div className="content contact">
            <Form method="POST" onSubmit={handleSubmit} className="form">
              <div className="textarea-holder">
                <Form.Group
                  className="mb-3 textarea-holder"
                  controlId="formBasicEmail"
                >
                  <Form.Control
                    className="email"
                    name="email"
                    type="email"
                    placeholder="Email address"
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3 textarea-holder"
                  controlId="formBasicName"
                >
                  <Form.Control
                    className="email"
                    type="name"
                    name="name"
                    placeholder="Name"
                  />
                </Form.Group>

                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>

              <Form.Group
                className="mb-3 textarea-holder"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Text className="contact-text">
                  Send me a message!
                </Form.Text>
                <Form.Control
                  className="textarea"
                  name="textarea"
                  placeholder="Type your message here"
                  as="textarea"
                  rows={8}
                />
              </Form.Group>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              <Button
                type="submit"
                disabled={state.submitting}
                className="submitButton"
                variant="primary"
              >
                Send
              </Button>
            </Form>
          </div>
          <div className="mobile-nav-bottom">
            <div className="nav-text-mobile">about</div>
            <div className="nav-text-mobile">contact</div>
          </div>
          <div className="mobile-nav-top">
            <div className="nav-text-mobile">home</div>
            <div className="nav-text-mobile">portfolio</div>
          </div>
          <div
            onClick={() => {
              if (contactRef.current) {
                scrollRef(contactRef, "start");
              } else {
                alert("NO");
              }
            }}
            id="keyboard"
            className="keyboard-holder"
          >
            <Keyboard />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
