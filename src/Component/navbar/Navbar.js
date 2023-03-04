import "../navbar/navbar.style.css";
import { useState } from "react";
import Container from "./Container";
import Button from "../Button";
function Navbar() {
  const [isLogin, setIsLogin] = useState(false);
  const [color, setColor] = useState(false);
  // const isLogin = false;
  const handleClick = () => {
    setIsLogin(!isLogin);
    setColor(!color);
    // alert("clicked");
  };
  return (
    <div>
      <nav className="flex bg-darkperpule shadow ">
        <Container>
          <div className="flex justify-between items-center h-16">
            <p className=" text-gray-50 text-lg">website</p>

            <ul className="flex justify-between items-center text-gray-50 text-lg">
              <a href="#home" className="hover:border-b-2 hover:text-gray-50 ">
                Home
              </a>
              <a className="hover:border-b-2 hover:text-gray-50" href="#about">
                About
              </a>
              <a
                className="hover:border-b-2 hover:text-gray-50"
                href="#contact"
              >
                Contact
              </a>
            </ul>
            <Button
              isTrue={color}
              onClick={handleClick}
              text={isLogin ? "logout" : "login"}
            />
          </div>
        </Container>
      </nav>
    </div>
  );
}

export default Navbar;
