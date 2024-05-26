import logo from "../../assets/Landsacpe.png";
import {
  BsFacebook,
  BsLinkedin,
  BsTwitterX,
  BsInstagram,
} from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <div className="grid mt-6 p-6 has-text-primary-light">
        <div className="cell">
          <img src={logo} alt="" />
          <p>
            We prioritize customer satisfaction and strive for excellence in
            every aspect of our operations.
          </p>

          <p className="mt-4">© Baba Theme 2024</p>
        </div>
        <div className="cell ml-6">
          <h2 className="mb-6">COMPANY</h2>
          <ul style={{ listStyle: "none" }}>
            <li>We strive for excellence in every aspect of our business.</li>
          </ul>
        </div>
        <div className="cell">
          <h2 className="mb-6">SERVICES</h2>
          <ul style={{ listStyle: "none" }}>
            <li>Our team is dedicated to delivering high-quality results.</li>
          </ul>
        </div>
        <div className="cell">
          <h2 className="mb-6">RESOURCES</h2>
          <ul style={{ listStyle: "none" }}>
            <li>Our platform provides access to valuable industry insights.</li>
          </ul>
        </div>

        <div className="cell has-text-centered">
          <div className="icons is-flex mb-6 is-justify-content-space-around">
            <BsFacebook />
            <BsLinkedin />
            <BsTwitterX />
            <BsInstagram />
          </div>
          <select name="language" id="lang">
            <option value="Eng">English-En</option>
            <option value="Kiny">Kinyarwanda</option>
            <option value="Fr">French</option>
            <option value="Sp">Spanish</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Footer;
