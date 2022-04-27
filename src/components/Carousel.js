import React from "react";
import { Carousel, Image } from "react-bootstrap";
import ogf from "../img/ogf.png";
import crypto from "../img/crypto.png";
import user from "../img/user.png";
import rn from "../img/rn.png";
import rc from "../img/rc.png";
import poptikr from "../img/poptikr.png";
import bs from "../img/bs.png";
import cg from "../img/cg.png";
import fl from "../img/fl.png";

const CarouselContainer = () => {
  return (
    <Carousel
      keyboard={true}
      nextLabel=""
      prevLabel=""
      indicators={false}
      variant="dark"
      fade
      className="carousel"
    >
      <Carousel.Item
        onClick={() =>
          window.open(
            "https://www.algonquincollege.com/arie/2021/03/ottawa-grassroots-app/",
            "_blank"
          )
        }
        className="carou-link"
        interval={5000}
      >
        <div className="dark-overlay"></div>
        <div
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            className="d-block w-100 carou-img img-fluid"
            src={ogf}
            alt="Ottawa Grassroots Application"
          />
        </div>
        <Carousel.Caption>
          <h3 className="body-text carou-item">
            Ottawa Grassroots Application
          </h3>
          <p className="secondary-text carou-sitem">
            Working as <b>Dev Lead</b> for team KHAT Development. The
            Application was built using <b>React Native, Firebase</b> and won
            First Prize at the <b>RE/ACTION Showcase 2021</b>.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item
        onClick={() =>
          window.open(
            "https://www.algonquincollege.com/arie/2022/03/pop-tikr-shop-tour-local/",
            "_blank"
          )
        }
        className="carou-link"
        interval={5000}
      >
        <div className="dark-overlay"></div>
        <div
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            className="d-block w-100 carou-img"
            src={poptikr}
            alt="First slide"
          />
        </div>
        <Carousel.Caption>
          <h3 className="body-text carou-item">POP TikR – Shop & Tour Local</h3>
          <p className="secondary-text carou-sitem">
            Working as <b>Mobile Application Developer</b> for KaniTech. The
            Application was built using <b>React Native, Expo</b> and won
            multiple prizes at the <b>RE/ACTION Showcase 2021 & 2022</b>.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item
        onClick={() =>
          window.open("https://nostalgic-carson-1dea39.netlify.app/", "_blank")
        }
        className="carou-link"
        interval={5000}
      >
        <div className="dark-overlay"></div>
        <Image
          className="d-block w-100 carou-img"
          src={crypto}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 className="body-text carou-item">Crypto List PWA</h3>
          <p className="secondary-text carou-sitem">
            Crypto List is a <b>Progressive Web Application</b> with skeleton
            loaders, offline capability and installable. Pair Programming with
            my friend Jesse. You can view Top 10 cryptocurrencies, refresh 3
            times for install prompt. Made with <b>ReactJS</b>.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item
        onClick={() =>
          window.open(
            "https://vuon0029.github.io/mad9135-react-gh-pages/#/",
            "_blank"
          )
        }
        className="carou-link"
        interval={5000}
      >
        <div className="dark-overlay"></div>
        <Image
          className="d-block w-100 carou-img"
          src={user}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3 className="body-text carou-item">React Router Example</h3>
          <p className="secondary-text carou-sitem">
            View list of Users, Posts and Comments with data from{" "}
            <b>JSONPlaceholder API</b>. You can also view the posts that the
            users commented on and view user information. Made with{" "}
            <b>ReactJS</b>.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item
        onClick={() =>
          window.open(
            "https://expo.io/@vuon0029/projects/mad9135-f20-p2-react-native-yelp",
            "_blank"
          )
        }
        className="carou-link"
        interval={5000}
      >
        <div className="dark-overlay"></div>
        <Image
          className="d-block w-100 carou-img"
          src={rn}
          alt="Fourth slide"
        />
        <Carousel.Caption>
          <h3 className="body-text carou-item">
            React Native Yelp Restaurants
          </h3>
          <p className="secondary-text carou-sitem">
            This is a simple app to look-up nearby restaurants using the{" "}
            <b> Yelp Fusion API - Business Search</b>. Built using{" "}
            <b>React Native</b>, by my friend Bharti and I.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item
        onClick={() =>
          window.open(
            "https://github.com/vuon0029/mad9135-f20-p1-react-crud-list",
            "_blank"
          )
        }
        className="carou-link"
        interval={5000}
      >
        <div className="dark-overlay"></div>
        <Image className="d-block w-100 carou-img" src={rc} alt="Sixth slide" />
        <Carousel.Caption>
          <h3 className="body-text carou-item">React CRUD Example</h3>
          <p className="secondary-text carou-sitem">
            Website built using <b>React</b> with
            <b> CRUD</b> abilities. Allow you to Create & Edit a list of card
            games, with information of the card game's Name, its Author and
            Where to Buy it.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item
        onClick={() =>
          window.open(
            "https://xd.adobe.com/view/8d849f4e-f06d-4d43-bbe9-07ff9dd83c0a-d8d7/?fullscreen",
            "_blank"
          )
        }
        className="carou-link"
        interval={5000}
      >
        <div className="dark-overlay"></div>
        <Image
          className="d-block w-100 carou-img"
          src={cg}
          alt="Seventh slide"
        />
        <Carousel.Caption>
          <h3 className="body-text carou-item">CareGuy UX/UI Design</h3>
          <p className="secondary-text carou-sitem">
            UX/UI Design for <b>CareGuy</b>, an application to seek for
            Caregivers. Made from <b>Adobe XD</b>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item
        onClick={() =>
          window.open(
            "https://xd.adobe.com/view/3f715092-7578-40e9-51bd-046e7deae00a-4940/",
            "_blank"
          )
        }
        className="carou-link"
        interval={5000}
      >
        <div className="dark-overlay"></div>
        <Image
          className="d-block w-100 carou-img"
          src={fl}
          alt="Seventh slide"
        />
        <Carousel.Caption>
          <h3 className="body-text carou-item">Flower App Checkout Sequence</h3>
          <p className="secondary-text carou-sitem">
            UX/UI Design for <b>Flower App</b>. Checkout sequence made from{" "}
            <b>Adobe XD</b>.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselContainer;
