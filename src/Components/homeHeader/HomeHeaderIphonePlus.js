import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Style from "./homeHeaderIphonePlus.module.css";
export default function HomeHeaderIphonePlus(props) {
  let [dropMenu, setDropMenu] = useState(false);
  return (
    <nav className={Style["navHeader"]}>
      <div className="row align-items-center justify-content-between">
        <label className={Style["labelHeader"]}>
          <NavLink to="/">
            <span className={Style["fiverChange"]}>fiverr</span>
            <span className={Style["docChange"]}>.</span>
          </NavLink>
        </label>

        <i
          style={{
            fontSize: 20,
            lineHeight: "30px",
            color: "#144d7e",
          }}
          className="fas fa-plus-circle"
          onClick={() => {
            setDropMenu(!dropMenu);
          }}
        ></i>
      </div>
      <div
        className={
          dropMenu ? Style["dropMenu-bar-active"] : Style["dropMenu-bar"]
        }
      >
        <ul className={dropMenu ? Style["ulHeader-active"] : Style["ulHeader"]}>
          <li className={Style["liHeader"]}>
            <NavLink to="/">Become a Seller</NavLink>
          </li>
          <li className={Style["liHeader"]}>
            <NavLink to="/">Sign in</NavLink>
          </li>
          <li className={Style["liHeader"]}>
            <NavLink to="/">
              <span className={Style["joinStyle"]}>Join</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
