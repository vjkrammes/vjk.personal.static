import { useState } from "react";
import {
  MdComputer,
  MdContactMail,
  MdHome,
  MdOutlineDescription,
  MdPages,
} from "react-icons/md";
import "./Header.css";

export default function Header() {
  const [state, setState] = useState<boolean>(false);
  return (
    <div className="h__container">
      <a className="h__logo" href="/">
        <img
          className="h__logoimage"
          src="/images/logo-64.png"
          alt="VJK Solutions Logo"
        />
        <span className="h__title">V. James Krammes</span>
      </a>
      <input
        type="checkbox"
        className="h__navtoggle"
        id="nav-toggle"
        checked={state}
        onChange={() => setState(!state)}
      />
      <nav>
        <ul>
          <li>
            <a href="/">
              <span>
                <MdHome /> Home
              </span>
            </a>
          </li>
          <li>
            <a href="/Resume">
              <span>
                <MdOutlineDescription /> Résumé
              </span>
            </a>
          </li>
          <li>
            <a href="/Demos">
              <span>
                <MdPages /> Demos
              </span>
            </a>
          </li>
          <li>
            <a href="/Skills">
              <span>
                <MdComputer /> Skills
              </span>
            </a>
          </li>
          <li>
            <a href="/Contact">
              <span>
                <MdContactMail /> Contact
              </span>
            </a>
          </li>
        </ul>
      </nav>
      <label htmlFor="nav-toggle" className="h__navtogglelabel">
        <span></span>
      </label>
    </div>
  );
}
