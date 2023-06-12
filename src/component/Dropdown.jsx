import React from "react";
import { useState } from "react";
import ArrowUp from "../assets/images/ArrowUp.svg";
import ArrowDown from "../assets/images/ArrowDown.svg";
import "../../src/assets/sass/components/_dropdown.scss";
const Dropdown = ({ content, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <section className="dropdown">
      <div className="dropdown__title" onClick={toggleDropdown}>
        <h2>{title}</h2>
        <button>
          <img src={isOpen ? ArrowUp : ArrowDown} />
        </button>
      </div>
      <div className="dropdown__content">
        {isOpen && typeof content === "string" && <p>{content}</p>}
        {isOpen && typeof content === "object" && (
          <ul>
            {content?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};
export default Dropdown;
