import styled from 'styled-components';
import {Link} from 'react-router-dom';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import {useEffect} from 'react';
import {useState} from 'react';
import Navbar from './Navbar';
import {useSelector} from 'react-redux';

const Header = ({openSideBar}) => {
  const [showNav, setShowNav] = useState(false);

  const {isAuthenticated} = useSelector(state => state.user);

  useEffect(() => {
    function handleScroll() {
      // show the navbar if it's scrolled into view
      if (window.scrollY > 200) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    }

    // add the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // remove the event listener when the component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Container>
      <Top>
        <TopWraper>
          <TopLeft>
            <ul>
              <li>
                <PhoneInTalkOutlinedIcon />
                <p>+880 1963431045 +880 1778578738</p>
              </li>
              <li>
                <EmailIcon />
                <p>care@datapollex.com</p>
              </li>
            </ul>
          </TopLeft>
          <TopRight>
            <TopMenu>
              <ul>
                {isAuthenticated ? (
                  <li>
                    <Link to="/account">Profile</Link>
                  </li>
                ) : null}

                <li>
                  <Link to="/contactus/meeting/timedate">Contact</Link>
                </li>
                {isAuthenticated ? null : (
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                )}
              </ul>
            </TopMenu>
            <Social>
              <a href="https://www.facebook.com/datapollex/" target="blank">
                <FacebookIcon />
              </a>
              <a href="https://www.facebook.com/datapollex/" target="blank">
                <TwitterIcon />
              </a>
              <a
                href="https://www.linkedin.com/company/datapollex/"
                target="blank">
                <LinkedInIcon />
              </a>
              <a href="https://www.facebook.com/datapollex/" target="blank">
                <InstagramIcon />
              </a>
            </Social>
          </TopRight>
        </TopWraper>
      </Top>
      <Navbar openSideBar={openSideBar} />
      <PopUpNav className={showNav ? 'show' : ''}>
        <Navbar openSideBar={openSideBar} />
      </PopUpNav>
    </Container>
  );
};

const Container = styled.div`
  display: block;
  width: 100%;
  background: transparent;
  transition: all 500ms ease;
  z-index: 99;
  position: relative;
`;

//TOP
const Top = styled.div`
  position: relative;
  display: block;
  background-color: #1c1b1f;
  padding-right: 60px;
  padding-top: 5px;
  padding-bottom: 5px;
  @media only screen and (min-width: 1200px) and (max-width: 1399px) {
    padding-right: 30px;
  }
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    padding-right: 30px;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    display: none;
  }
  @media (max-width: 767px) {
    display: none;
  }
`;

const TopWraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 300px;
  @media only screen and (min-width: 1400px) and (max-width: 1670px) {
    padding-left: 270px;
  }
  @media only screen and (min-width: 1200px) and (max-width: 1399px) {
    padding-left: 235px;
  }
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    padding-left: 210px;
  }
`;

const TopLeft = styled.div`
  display: block;

  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 16px;
      margin-left: 25px;

      svg {
        color: #ff4f47;
        font-size: 16px;
      }

      p {
        margin-left: 10px;
        font-size: 16px;
      }
    }
  }
`;

const TopRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TopMenu = styled.div`
  display: block;
  position: relative;
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;

    li {
      margin-left: 30px;
      position: relative;
      display: flex;
      align-items: center;

      &::before {
        position: absolute;
        top: 10px;
        bottom: 8px;
        right: -14px;
        content: '';
        width: 1px;
        background-color: #86838c;
        transform: rotate(15deg);
      }

      a {
        font-size: 14px;
        color: #86838c;
        font-weight: 400;
        transition: all 500ms ease;

        &:hover {
          color: #ff4f47;
        }
      }
    }
  }
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    display: none;
  }
`;

const Social = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 35px;

  a {
    display: flex;
    align-items: flex-end;
    font-size: 15px;
    -webkit-transition: all 500ms ease;
    transition: all 500ms ease;
    margin-left: 35px;
    color: #ffffff;

    &:nth-child(1) {
      margin: 0px;
    }

    svg {
      font-size: 16px;
      font-weight: 400;
      transition: all 500ms ease;
      &:hover {
        color: #ff4f47;
      }
    }
  }
`;

//POP UP NAV
const PopUpNav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transform: translateY(-100%);
  transition: transform 0.2s ease-out;
  &.show {
    transform: translateY(0);
    transition: transform 0.3s ease-in;
  }
`;
export default Header;
