import { MdHome } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import DemoItem from "../Widgets/DemoItem/DemoItem";
import "./DemosPage.css";

export default function DemosPage() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="header">
        <div className="heading">Demos</div>
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
        <div className="dp__body">
          <div className="dp__heading">Demonstration Projects</div>
          <div className="dp__tagline">Click on an item to see the details</div>
          <div className="dp__items">
            <div className="dp__item">
              <DemoItem
                title="Beans"
                blurb="Game modeling a commodities exchange"
                backgroundImage="/images/beans-demo.png"
                link="/Beans"
              />
            </div>
            <div className="dp__item">
              <DemoItem
                title="JimCo Retailers"
                blurb="Three web sites for fictional retailer"
                backgroundImage="/images/jimco-demo.png"
                link="/JimCo"
              />
            </div>
            <div className="dp__item">
              <DemoItem
                title="VJK Solutions"
                blurb="Web site for a consulting company"
                backgroundImage="/images/vjk-demo.png"
                link="/VJK"
              />
            </div>
            <div className="dp__item">
              <DemoItem
                title="Ledger"
                blurb="Desktop app for tracking bill payments and online identities"
                backgroundImage="/images/ledger-demo.png"
                link="/Ledger"
              />
            </div>
            <div className="dp__item">
              <DemoItem
                title="Xtrakr"
                blurb="Desktop app for tracking company expenses"
                backgroundImage="/images/xtrakr-demo.png"
                link="/Xtrakr"
              />
            </div>
            <div className="dp__item">
              <DemoItem
                title="Catalist"
                blurb="Native Android categorized to-do list app"
                backgroundImage="/images/catalist-demo.jpg"
                link="/Catalist"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
