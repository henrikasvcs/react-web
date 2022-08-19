import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
              dolor repudiandae explicabo incidunt, nisi consectetur quos minus
              in veniam amet debitis dolores hic deserunt vitae deleniti, libero
              dolorem neque ipsum!
            </p>
          </div>
          <div className="col-md-4">
            <h1>Kontaktai</h1>
            <p>
              Tel.nr.: 865555555 <br /> el.paštas: info@puslapis.lt <br />{" "}
              adresas: Vilnius, Vilniaus g.1
            </p>
          </div>
          <div className="col-md-4">
            <div className="centered">
              <h1>Sekite mus:</h1>
            </div>
            <div className="centered">
              <a href="https://instagram.com/">
                <InstagramIcon />
              </a>
              <a href="https://facebook.com">
                <FacebookIcon />
              </a>
            </div>
          </div>
        </div>
        <div className="centered">
          <p>Visos teises saugomos &copy; 2022</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
