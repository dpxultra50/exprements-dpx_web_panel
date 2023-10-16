import styled from 'styled-components';
import {Link, NavLink} from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MiscellaneousServicesOutlinedIcon from '@mui/icons-material/MiscellaneousServicesOutlined';
import FindInPageOutlinedIcon from '@mui/icons-material/FindInPageOutlined';
import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import MenuIcon from '@mui/icons-material/Menu';
import CallIcon from '@mui/icons-material/Call';

const Navbar = ({openSideBar}) => {
  return (
    <Menu>
      <MenuWraper>
        <Logo>
          <Link to="/">
            <img src="/images/layouts/datapollex_logo.png" alt="logo" />
          </Link>
        </Logo>
        <MenuBar onClick={openSideBar}>
          <MenuIcon />
        </MenuBar>
        <NavMenu>
          <NavLink to="/home">
            <span>Home</span>
            <HomeOutlinedIcon />
          </NavLink>
          <HeadLine>
            <span>Services</span>
            <MiscellaneousServicesOutlinedIcon />

            <SubMenu>
              <Link to="/service/mobile-app-development">
                <span>Mobile App</span>
                <KeyboardDoubleArrowRightIcon />
              </Link>
              <Link to="/service/web-development">
                <span>Web Development</span>
                <KeyboardDoubleArrowRightIcon />
              </Link>
              <Link to="/service/blockchain-development">
                <span>Blockchain</span>
                <KeyboardDoubleArrowRightIcon />
              </Link>
              <Link to="/service/ecommerce-development">
                <span>Ecommerce</span>
                <KeyboardDoubleArrowRightIcon />
              </Link>
              <Link to="/service/cyber-security">
                <span>Cyber Security </span>
                <KeyboardDoubleArrowRightIcon />
              </Link>
              <Link to="/service/artificial-intelligence-and-machine-learning">
                <span>AI & ML</span>
                <KeyboardDoubleArrowRightIcon />
              </Link>
              <Link to="/service/digital-marketing">
                <span>Digital marketing</span>
                <KeyboardDoubleArrowRightIcon />
              </Link>
              <Link to="/service/iot-development">
                <span>IoT & Embedded</span>
                <KeyboardDoubleArrowRightIcon />
              </Link>
              <Link to="/service/metaverse-development">
                <span>Metaverse</span>
                <KeyboardDoubleArrowRightIcon />
              </Link>
            </SubMenu>
          </HeadLine>
          <NavLink to="/industries">
            <span>Industries</span>
            <FindInPageOutlinedIcon />
          </NavLink>
          <NavLink to="/works">
            <span>Works</span>
            <HomeOutlinedIcon />
          </NavLink>
          <NavLink to="/about">
            <span>About</span>
            <ContactSupportOutlinedIcon />
          </NavLink>
          <NavLink to="/contactus/meeting/timedate">
            <span>contact</span>
            <ConnectWithoutContactOutlinedIcon />
          </NavLink>
        </NavMenu>
        <MenuRight>
          <CallAnyTime>
            <CallIco>
              <CallIcon />
            </CallIco>
            <Details>
              <p>Call Anytime</p>
              <h1>+880 1778578738</h1>
            </Details>
          </CallAnyTime>
          <Search>
            <SearchIco>
              <SearchOutlinedIcon />
            </SearchIco>
            <SearchText>
              <input placeholder="Search" />
            </SearchText>
          </Search>
          <Button>
            <Link to="/contactus/meeting/timedate">
              <ArrowCircleRightIcon />
              <span>free consultation</span>
            </Link>
          </Button>
        </MenuRight>
      </MenuWraper>
    </Menu>
  );
};

//MENU

const Menu = styled.div`
  position: relative;
  display: block;
  z-index: 1000;
  background-color: #151518;
  transform: translateY(0);
`;

const MenuWraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 300px;
  @media only screen and (min-width: 1400px) and (max-width: 1670px) {
    padding-left: 270px;
  }
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    padding-left: 210px;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    padding-left: 210px;
  }
  @media only screen and (min-width: 1200px) and (max-width: 1399px) {
    padding-left: 235px;
  }
  @media (max-width: 767px) {
    padding: 0px;
    justify-content: flex-end;
    padding-right: 30px;
  }
`;

//LOGO
const Logo = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  left: 20px;
  justify-content: flex-start;
  z-index: 10;
  margin-top: 8px;
  max-width: 13%;
  min-width: 180px;
  @media (max-width: 400px) {
    min-width: 160px;
  }
  img {
    width: 100%;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin: 0;
  padding: 0;

  a {
    padding: 25px 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &.active {
      span,
      svg {
        color: #ffffff;
      }

      &:before {
        height: 6px;
        visibility: visible;
        opacity: 1 !important;
      }
    }

    &:before {
      background-color: #ff4f47;
      bottom: 0px;
      content: '';
      height: 0px;
      width: 100% !important;
      left: 0px;
      opacity: 0;
      position: absolute;
      right: 0px;
      transform-origin: left center;
      transition: all 0.3s ease-in-out;
      visibility: hidden;
      display: block;
      width: 100%;
    }
    &:hover {
      &:before {
        height: 6px;
        visibility: visible;
        opacity: 1 !important;
      }
      span,
      svg {
        color: #ffffff;
      }

      div {
        opacity: 1;
        visibility: visible;
        transform: scaleY(1) translateZ(0px);
      }
    }

    span {
      color: #817e87;
      font-size: 16px;
      transition: all 500ms ease;
      font-weight: 600;
    }
    svg {
      color: #817e87;
      margin-left: 5px;
      font-size: 18px;
      transition: all 500ms ease;
      font-weight: 600;
    }
  }
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    display: none;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    display: none;
  }
  @media (max-width: 767px) {
    display: none;
  }
`;
const HeadLine = styled.div`
  padding: 25px 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:before {
    background-color: #ff4f47;
    bottom: 0px;
    content: '';
    height: 0px;
    width: 100% !important;
    left: 0px;
    opacity: 0;
    position: absolute;
    right: 0px;
    transform-origin: left center;
    transition: all 0.3s ease-in-out;
    visibility: hidden;
    display: block;
    width: 100%;
  }
  &:hover {
    &:before {
      height: 6px;
      visibility: visible;
      opacity: 1 !important;
    }
    span,
    svg {
      color: #ffffff;
    }

    div {
      opacity: 1;
      visibility: visible;
      transform: scaleY(1) translateZ(0px);
    }
  }

  span {
    color: #817e87;
    font-size: 16px;
    transition: all 500ms ease;
    font-weight: 600;
  }
  svg {
    color: #817e87;
    margin-left: 5px;
    font-size: 18px;
    transition: all 500ms ease;
    font-weight: 600;
  }
`;

const MenuBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    margin-left: 23px;
    font-size: 30px;
    color: #ff4f47;
    cursor: pointer;
    transition: all 500ms ease;
    &:hover {
      color: #ffffff;
    }
  }
  @media only screen and (min-width: 1400px) and (max-width: 1670px) {
    display: none;
  }
  @media only screen and (min-width: 1200px) and (max-width: 1399px) {
    display: none;
  }
  @media (max-width: 767px) {
    padding: 0px;
    justify-content: flex-end;
    padding: 25px 0px;
  }
`;

const MenuRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CallAnyTime = styled.div`
  display: flex;
  align-items: center;
  margin-right: 60px;
  padding: 5px 0;
  color: #ffffff;
  @media only screen and (min-width: 1400px) and (max-width: 1670px) {
    display: none;
  }
  @media only screen and (min-width: 1200px) and (max-width: 1399px) {
    display: none;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    display: none;
  }
  @media (max-width: 767px) {
    display: none;
  }
`;
const CallIco = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1c1b1f;
  transition: all 500ms ease;

  svg {
    color: #ff4f47;
    font-size: 30px;
    transition: all 500ms ease;
  }

  &:hover {
    background-color: #ff4f47;
    svg {
      color: #ffffff;
    }
  }
`;

const Details = styled.div`
  position: relative;
  margin-left: 10px;
  top: 2px;
  p {
    color: #817e87;
    font-size: 13px;
    line-height: 13px;
  }
  h1 {
    color: #ffffff;
    font-size: 16px;
    font-weight: 700;
    color: var(--roofsie-black);
    display: inline-block;
    transition: all 500ms ease;
  }
`;

const Search = styled.div`
  display: flex;
  align-items: center;
  background: rgb(32, 32, 32);
  border-radius: 24px;
  height: 40px;
  margin: 8px 0;
  min-width: 160px;
  width: 160px;
  position: relative;

  &::before {
    position: absolute;
    content: '';
    top: 7px;
    bottom: 7px;
    left: -30px;
    width: 1px;
    background-color: rgba(255, 255, 255, 0.1);
  }

  @media only screen and (min-width: 1200px) and (max-width: 1399px) {
    display: none;
  }
  @media (max-width: 767px) {
    display: none;
  }
`;
const SearchIco = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  height: 100%;
  margin: 13.62px;
  cursor: pointer;
`;
const SearchText = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;

  input {
    height: 100%;
    width: 100%;
    margin-right: 13.62px;
    background: transparent;
    outline: none;
    border: none;
    color: #ffffff;
  }
`;

const Button = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 30px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    color: #ffffff;
    font-size: 12px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    padding: 25px 25px 25px;
    overflow: hidden;
    transition: all 0.5s linear;
    position: relative;
    overflow: hidden;
    z-index: 1;

    span {
      z-index: 2;
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 180%;
      transition: all 0.5s linear;
      background: #ff4f47;
      z-index: 2;
      transition: 0.8s;
    }
    &:hover {
      color: #ff4f47;
      &::before {
        border-radius: 0% 0% 50% 50%;
        height: 0%;
      }
    }

    svg {
      margin-right: 4px;
      padding-left: 2px;
      font-size: 20px;
      z-index: 2;
    }
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

const SubMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 270px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  opacity: 0;
  visibility: hidden;
  transform-origin: top center;
  transform: scaleY(0) translateZ(100px);
  transition: opacity 500ms ease, visibility 500ms ease, transform 700ms ease,
    -webkit-transform 700ms ease;
  z-index: 99;
  overflow: hidden;
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 10px 39.2px 0.8px rgba(0, 0, 0, 0.1);
  padding: 31px 20px 31px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top: 2px solid #ff4f47;

  a {
    padding: 4px 20px 3px;
    line-height: 30px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    position: relative;
    transition: 300ms ease;
    border-radius: 5px;

    span {
      font-size: 16px;
      color: #6c6b6f !important;
    }

    svg {
      margin-top: 18px;
      transform: translateY(-50%) scale(0);
      font-size: 18px;
      transition: 300ms ease;
    }

    &:hover {
      background-color: rgb(244, 241, 238);

      span {
        color: #1c1b1f !important;
      }

      svg {
        transform: translateY(-50%) scale(1);
      }

      &::before {
        display: none;
      }
    }
  }
`;

export default Navbar;
