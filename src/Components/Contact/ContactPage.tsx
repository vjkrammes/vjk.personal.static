import { MdHome } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "./ContactPage.css";

export default function ContactPage() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="header">
        <div className="heading">Contact Me</div>
        <button
          className="primarybutton headerbutton-left"
          onClick={() => navigate("/")}
        >
          <span>
            <MdHome /> Home
          </span>
        </button>
      </div>
      <div className="content">
        <div className="cp__body">
          <div className="cp__heading">You can contact me via</div>
          <div className="cp__items">
            <div className="cp__item">
              <div className="cp__label">US Mail</div>
              <div className="cp__content">
                <p>V. James Krammes</p>
                <p>823 NW 113th Terrace</p>
                <p>Gainesville, FL, 32606</p>
              </div>
            </div>
            <div className="cp__item">
              <div className="cp__label">Email</div>
              <div className="cp__content">
                <p>
                  <a href="mailto:krammes@comcast.net">krammes@comcast.net</a>
                </p>
              </div>
            </div>
            <div className="cp__item">
              <div className="cp__label">Phone</div>
              <div className="co__content">
                <p>(615)&nbsp;751&mdash;7604</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
