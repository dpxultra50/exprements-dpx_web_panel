import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import { motion } from "framer-motion";
import { useState } from "react";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ServiceTechnologies = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const Mobile = [
    {
      name: "Android",
      image: "/images/services/android.svg",
    },
    {
      name: "ios",
      image: "/images/services/apple-icon.svg",
    },
    {
      name: "Flutter",
      image: "/images/services/flutter.svg",
    },
    {
      name: "React Native",
      image: "/images/services/react-native.svg",
    },
    {
      name: "Kotlin",
      image: "/images/services/kotlin.svg",
    },
    {
      name: "Ionic",
      image: "/images/services/ionic.svg",
    },
    {
      name: "Swift",
      image: "/images/services/swift-icon.svg",
    },
    {
      name: "Xamarin",
      image: "/images/services/xamarin.svg",
    },
    {
      name: "iPad",
      image: "/images/services/ipad.png",
    },
    {
      name: "Windows",
      image: "/images/services/windows.svg",
    },
    {
      name: "PhoneGap",
      image: "/images/services/phonegap.svg",
    },
    {
      name: "Augmented",

      image: "/images/services/augment-reality.svg",
    },
    {
      name: "Virtual",
      image: "/images/services/virtual-reality.svg",
    },
    {
      name: "Beacon",
      image: "/images/services/beacon.svg",
    },
    {
      name: "Wearables",
      image: "/images/services/wearable.svg",
    },
    {
      name: "Appcelerator",
      image: "/images/services/appcelerator-titanium.svg",
    },
  ];

  const Frontend = [
    {
      name: "Senchatouch",
      image: "/images/services/senchatouch.svg",
    },
    {
      name: "TypeScript",
      image: "/images/services/typescript.svg",
    },
    {
      name: "Angular JS",
      image: "/images/services/angular.svg",
    },
    {
      name: "Golang",
      image: "/images/services/golang.svg",
    },
    {
      name: "JavaScript",
      image: "/images/services/javascript.svg",
    },
    {
      name: "ReactJS",
      image: "/images/services/react-js.svg",
    },
  ];

  const Backend = [
    {
      name: "PHP",
      image: "/images/services/php.svg",
    },
    {
      name: "Yii",
      image: "/images/services/yii.svg",
    },
    {
      name: "CakePHP",
      image: "/images/services/cakephp.svg",
    },
    {
      name: "Java",
      image: "/images/services/java.svg",
    },
    {
      name: "Windows DotNet",
      image: "/images/services/windows-dotnet.svg",
    },
    {
      name: "C Sharp",
      image: "/images/services/csharp.svg",
    },
    {
      name: "Ruby on Rails",
      image: "/images/services/ruby-on-rails.svg",
    },
    {
      name: "CodeIgniter",
      image: "/images/services/codeigniter.svg",
    },
    {
      name: "Python",
      image: "/images/services/python.svg",
    },
    {
      name: "Laravel",
      image: "/images/services/laravel.svg",
    },
    {
      name: "Scala",
      image: "/images/services/scala.svg",
    },
    {
      name: "Symfony",
      image: "/images/services/symfony.svg",
    },
    {
      name: "Zend",
      image: "/images/services/zend.svg",
    },
    {
      name: "NodeJS",
      image: "/images/services/nodejs.svg",
    },
    {
      name: "Django",
      image: "/images/services/django.svg",
    },
    {
      name: "GraphQL API",
      image: "/images/services/graphqlapi.svg",
    },
    {
      name: "Parse",
      image: "/images/services/parse.svg",
    },
  ];

  const CMS = [
    {
      name: "WordPress",
      image: "/images/services/wordpress-icon.svg",
    },
    {
      name: "Magento",
      image: "/images/services/magento.svg",
    },
    {
      name: "Prestashop",
      image: "/images/services/prestashop.svg",
    },
    {
      name: "Joomla",
      image: "/images/services/joomla.svg",
    },
    {
      name: "BigCommerce",
      image: "/images/services/bigcommerce.svg",
    },
    {
      name: "Drupal",
      image: "/images/services/drupal.svg",
    },
    {
      name: "Ubercart",
      image: "/images/services/ubercart.svg",
    },
    {
      name: "Virtuemart",
      image: "/images/services/virtuemart.svg",
    },
    {
      name: "CS Cart",
      image: "/images/services/cs-cart.svg",
    },
    {
      name: "Sitecore",
      image: "/images/services/sitecore.svg",
    },
  ];

  return (
    <Container {...settings}>
      <Shape1></Shape1>
      <Shape2></Shape2>
      <Shape3
        as={motion.div}
        animate={{
          x: [-30, 5, -30],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}
      >
        <img src="/images/Industries-sape-2.png" alt="" />
      </Shape3>

      <h1 style={{ color: "#fff" }}>
        <AutoAwesomeMotionIcon
          sx={{ fontSize: "40px", zIndex: 10 }}
        ></AutoAwesomeMotionIcon>
        Technologies We Work On
      </h1>

      <Box sx={{ width: "100%" }} className="tecbox">
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            display: "flex",
            justifyContent: "center",
            mb: 3,
          }}
        >
          <Tabs
            TabIndicatorProps={{ style: { backgroundColor: "#ff4f47" } }}
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab
              sx={{ color: "white", fontWeight: "700" }}
              label="Mobile"
              {...a11yProps(0)}
            />
            <Tab
              sx={{ color: "white", fontWeight: "700" }}
              label="Frontend"
              {...a11yProps(1)}
            />
            <Tab
              sx={{ color: "white", fontWeight: "700" }}
              label="Backend"
              {...a11yProps(2)}
            />
            <Tab
              sx={{ color: "white", fontWeight: "700" }}
              label="CMS"
              {...a11yProps(3)}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <ImgBox as={motion.div} initial={{ x: 200 }} animate={{ x: 0 }}>
            {Mobile.map((mob, index) => (
              <MapBox key={index}>
                <img height={60} src={mob.image} alt="brands" />
                <p>{mob.name}</p>
                <p>{mob.title}</p>
              </MapBox>
            ))}
          </ImgBox>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ImgBox as={motion.div} initial={{ x: 200 }} animate={{ x: 0 }}>
            {Frontend.map((front, index) => (
              <MapBox key={index}>
                <img height={60} src={front.image} alt="brands" />
                <p>{front.name}</p>
              </MapBox>
            ))}
          </ImgBox>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <ImgBox as={motion.div} initial={{ x: 200 }} animate={{ x: 0 }}>
            {Backend.map((back, index) => (
              <MapBox key={index}>
                <img height={60} src={back.image} alt="brands" />
                <p>{back.name}</p>
              </MapBox>
            ))}
          </ImgBox>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <ImgBox as={motion.div} initial={{ x: 200 }} animate={{ x: 0 }}>
            {CMS.map((cms, index) => (
              <MapBox key={index}>
                <img height={60} src={cms.image} alt="brands" />
                <p>{cms.name}</p>
              </MapBox>
            ))}
          </ImgBox>
        </TabPanel>
      </Box>
    </Container>
  );
};

const Container = styled.div`
  background-color: #1c1b1f;
  position: relative;
  display: block;
  padding: 80px 35px 80px 35px;
  overflow: hidden;
  z-index: 1;
  margin-bottom: 40px;
  .tecbox {
    .css-9z1bus-MuiButtonBase-root-MuiTab-root.Mui-selected {
      color: #ff4f47;
    }
  }
  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ff4f47;
    margin-bottom: 40px;
    font-size: 40px;
    line-height: 48px;
    gap: 10px;
    @media (max-width: 767px) {
      font-size: 20px;
      line-height: 30px;
      margin-bottom: 10px;
    }
  }
  @media (max-width: 480px) {
    padding: 40px 15px 80px 15px;
  }
  @media (max-width: 404px) {
    .css-19kzrtu {
      padding: 0px;
    }
  }
`;

const ImgBox = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
  justify-items: center;
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    justify-items: center;
  }

  @media (max-width: 404px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    justify-items: center;
  }
`;

const MapBox = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p {
    color: white;
    display: flex;
    justify-content: center;
    margin-top: 8px;
  }
`;

const Shape1 = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  mix-blend-mode: luminosity;
  opacity: 0.01;
  background-image: url(/images/industries-bg.jpg);
  z-index: -200 !important;
`;
const breatheAnimation = keyframes`
  from {translate: 0px;}
  50%  {translate: -35px;} 
  to   {translate:  0px}
`;

const Shape2 = styled.div`
  z-index: -200 !important;
  position: absolute;
  top: -335px;
  right: 309px;
  animation-name: ${breatheAnimation};
  animation-duration: 3s;
  animation-iteration-count: infinite;

  @media (max-width: 450px) {
    right: 120px;
  }
  background-image: -moz-linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgb(255, 79, 71) 100%
  );
  background-image: -webkit-linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgb(255, 79, 71) 100%
  );
  background-image: -ms-linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgb(255, 79, 71) 100%
  );
  opacity: 0.502;
  width: 98px;
  height: 765px;
  transform: rotate(-45deg);
  z-index: 1;
  @keyframes glowing {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
const Shape3 = styled.div`
  position: absolute;
  top: 0;
  right: -30px;
  z-index: -1 !important;
  img {
    width: auto;
    vertical-align: middle;
  }
  @media (max-width: 450px) {
    right: -190px;
  }
`;

export default ServiceTechnologies;
