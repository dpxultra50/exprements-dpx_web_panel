import styled from "styled-components";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState } from "react";
import { useEffect } from "react";

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    function handleScroll() {
      // show the button if it's scrolled into view
      if (window.scrollY > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    }

    // add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // remove the event listener when the component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function ScrollToTophandle() {
    // scroll to the top of the page
    window.scrollTo({ top: 0, duration: 5000000 });
  }
  return (
    <>
      <Button onClick={ScrollToTophandle} className={showButton ? "show" : ""}>
        <KeyboardArrowUpIcon />
      </Button>
    </>
  );
};
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background: #ff4f47;
  position: fixed;
  bottom: 40px;
  right: 40px;
  z-index: 99;
  text-align: center;
  transition: all 0.4s ease;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  border: none;
  box-shadow: 0 2px 6px 0 #121113;
  visibility: hidden;
  transition: visibility 0.3s ease-out;

  &.show {
    visibility: visible;
  }
  @media (max-width: 510px) {
    width: 30px;
    height: 30px;
    bottom: 30px;
    right: 30px;
  }
  svg {
    color: #ffffff;
    font-size: 32px;
    font-weight: 800;
    @media (max-width: 510px) {
      font-size: 25px;
    }
  }
`;
export default ScrollToTop;
