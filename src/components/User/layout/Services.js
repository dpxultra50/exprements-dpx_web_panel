import styled from 'styled-components';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import ServiceCard from '../Cards/ServiceCard';
import Slider from 'react-slick';

const Services = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: false,
        },
      },
    ],
  };
  const cardData = [
    {
      title: 'Mobile App Development',
      imgsrc: '/images/icons/mobile-icon.svg',
      link: '/service/mobile-app-development',

      technologies: [
        {
          name: 'Android App',
          icon: '/images/technologies/android.svg',
        },
        {
          name: 'iOS App',
          icon: '/images/technologies/apple-icon.svg',
        },
        {
          name: 'Flutter',
          icon: '/images/technologies/flutter.svg',
        },
        {
          name: 'React Native',
          icon: '/images/technologies/react-native.svg',
        },
        {
          name: 'Kotlin',
          icon: '/images/technologies/kotlin.svg',
        },
        {
          name: 'Swift',
          icon: '/images/technologies/swift.svg',
        },
      ],
    },
    {
      title: 'Web Development',
      imgsrc: '/images/icons/web-development.svg',
      link: '/service/web-development',

      technologies: [
        {
          name: 'React',
          icon: '/images/technologies/react-native.svg',
        },
        {
          name: 'NodeJs',
          icon: '/images/technologies/nodejs.svg',
        },
        {
          name: 'MongoDB',
          icon: '/images/technologies/mongodb.svg',
        },
        {
          name: 'Wordpress',
          icon: '/images/technologies/wordpress.svg',
        },
        {
          name: 'Django',
          icon: '/images/technologies/django.svg',
        },
        {
          name: 'Laravel',
          icon: '/images/technologies/laravel.svg',
        },
      ],
    },
    {
      title: 'Blockchain Development',
      imgsrc: '/images/icons/blockchain-development.svg',
      link: '/service/blockchain-development',

      technologies: [
        {
          name: 'Ethereum',
          icon: '/images/technologies/ethereum-eth.svg',
        },
        {
          name: 'Hyperledger',
          icon: '/images/technologies/hyperledger.svg',
        },
        {
          name: 'Smart Contract',
          icon: '/images/technologies/smart-contract.svg',
        },
        {
          name: 'Private Blockchain',
          icon: '/images/technologies/private-blockchain.svg',
        },
        {
          name: 'Nft Marketplace',
          icon: '/images/technologies/nft-marketplace.svg',
        },
        {
          name: 'Web 0.3',
          icon: '/images/technologies/web3.svg',
        },
      ],
    },
    {
      title: 'Ecommerce Development',
      imgsrc: '/images/icons/ecommerce-development.svg',
      link: '/service/ecommerce-development',

      technologies: [
        {
          name: 'Shopify',
          icon: '/images/technologies/shopify.svg',
        },
        {
          name: "Javascript Framework's",
          icon: '/images/technologies/javascript.svg',
        },
        {
          name: "Python Framework's",
          icon: '/images/technologies/python.svg',
        },
        {
          name: 'Ubercart',
          icon: '/images/technologies/ubercart.svg',
        },
        {
          name: 'Magento',
          icon: '/images/technologies/magento.svg',
        },
        {
          name: 'Bigcommerce',
          icon: '/images/technologies/bigcommerce.svg',
        },
      ],
    },
    {
      title: 'Cyber Security',
      imgsrc: '/images/icons/cyber-security.png',
      link: '/service/cyber-security',

      technologies: [
        {
          name: 'Application Security',
          icon: '/images/technologies/ApplicationSecurity.png',
        },
        {
          name: 'Data Security',
          icon: '/images/technologies/DataSecurity.png',
        },
        {
          name: 'Network Security',
          icon: '/images/technologies/networksecurity.png',
        },
        {
          name: 'Iot Security',
          icon: '/images/technologies/IotSecurity.png',
        },
        {
          name: 'Cloud Security',
          icon: '/images/technologies/cis.png',
        },
        {
          name: 'Endpoint Security',
          icon: '/images/technologies/EndpointSecurity.png',
        },
      ],
    },
    {
      title: 'AI & ML',
      imgsrc: '/images/icons/ai-and-ml-development.svg',
      link: '/service/artificial-intelligence-and-machine-learning',

      technologies: [
        {
          name: 'Text To Speech',
          icon: '/images/technologies/text-to-speech.svg',
        },
        {
          name: 'Data Analytics.',
          icon: '/images/technologies/data-analytics.svg',
        },
        {
          name: 'Data Forecasting',
          icon: '/images/technologies/data-forecasting-new.svg',
        },
        {
          name: 'Business Intelligence',
          icon: '/images/technologies/business-intelligence.svg',
        },
        {
          name: 'Natural Language Processing',
          icon: '/images/technologies/natural-language-processing.svg',
        },
        {
          name: 'Alexa Skills Development',
          icon: '/images/technologies/alexa-skills-development.svg',
        },
      ],
    },
    {
      title: 'Digital Marketing',
      imgsrc: '/images/icons/digitalmarketing.png',
      link: '/service/digital-marketing',

      technologies: [
        {
          name: 'Search Engine Optimization',
          icon: '/images/technologies/seo.png',
        },
        {
          name: 'Social Media Marketing(SMM)',
          icon: '/images/technologies/smm.png',
        },
        {
          name: 'Content Marketing',
          icon: '/images/technologies/ContentMarketing.png',
        },
        {
          name: 'Email Marketing',
          icon: '/images/technologies/EmailMarketing.png',
        },
        {
          name: 'Web Analytics',
          icon: '/images/technologies/webanalytics.png',
        },
        {
          name: 'Marketing Automation',
          icon: '/images/technologies/data-analytics.svg',
        },
      ],
    },
    {
      title: 'IoT & Embedded',
      imgsrc: '/images/icons/iot-and-embedded-development.svg',
      link: '/service/iot-development',

      technologies: [
        {
          name: 'IoT Apps',
          icon: '/images/technologies/iot-apps.svg',
        },
        {
          name: 'Embedded Software',
          icon: '/images/technologies/embedded-software.svg',
        },
        {
          name: 'IoT Hardware Prototyping',
          icon: '/images/technologies/iot-hardware-prototyping.svg',
        },
        {
          name: 'IoT Dashboard and Analytics',
          icon: '/images/technologies/iot-dashboard-and-analytics.svg',
        },

        {
          name: 'Firmware Development',
          icon: '/images/technologies/Firmware.png',
        },
      ],
    },
    {
      title: 'Metaverse Development',
      imgsrc: '/images/icons/Metaverse.png',
      link: '/service/metaverse-development',

      technologies: [
        {
          name: 'Unity 3d',
          icon: '/images/technologies/unity-3d.svg',
        },
        {
          name: 'Augmented Reality',
          icon: '/images/technologies/augmented-reality.svg',
        },
        {
          name: 'Virtual Reality',
          icon: '/images/technologies/virtual-reality-v2.svg',
        },
        {
          name: 'Casual Games',
          icon: '/images/technologies/casual-games.svg',
        },

        {
          name: 'Metaverse Deployment',
          icon: '/images/technologies/metaverse-new.svg',
        },
      ],
    },
  ];

  return (
    <Container>
      <Shape1></Shape1>
      <ServicesTop>
        <Title>
          <p>
            <CheckBoxOutlineBlankIcon />
            Services
          </p>
          <h1>Services We Offer</h1>
        </Title>
        <Details>
          <DetailsBox>
            <p>
              Here, we make almost every genre of applications. You name it and
              we build it.
            </p>
          </DetailsBox>
        </Details>
      </ServicesTop>
      {window.screen.availWidth > 1119 ? (
        <ServicesBottom>
          <CardBox>
            {cardData &&
              cardData.map((data, index) => (
                <ServiceCard
                  key={index}
                  title={data.title}
                  imgsrc={data.imgsrc}
                  technologies={data.technologies}
                  link={data.link}
                />
              ))}
          </CardBox>
        </ServicesBottom>
      ) : null}
      {window.screen.availWidth <= 1119 ? (
        <Slide {...settings}>
          {cardData &&
            cardData.map((data, index) => (
              <ServiceCard
                key={index}
                title={data.title}
                imgsrc={data.imgsrc}
                technologies={data.technologies}
                link={data.link}
              />
            ))}
        </Slide>
      ) : null}
    </Container>
  );
};

const Container = styled.div`
  background-color: #1c1b1f;
  position: relative;
  display: block;
  margin-top: 50px;
  padding: 80px 35px 80px 35px;
  overflow: hidden;
  z-index: 1;
  @media (max-width: 450px) {
    padding: 120px 0 90px;
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
  background-image: url(/images/service-back-01.png);
  z-index: -1;
`;
const ServicesTop = styled.div`
  padding-top: 35px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.div`
  p {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    color: #ff4f47;
    font-weight: 800;
    line-height: 26px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 10px;
    @media (max-width: 767px) {
      font-size: 16px;
    }
    svg {
      margin-right: 10px;
    }
  }
  h1 {
    font-size: 48px;
    line-height: 50px;
    font-weight: 800;
    color: #ffffff;
    @media (max-width: 767px) {
      font-size: 26px;
      line-height: 34px;
    }
  }
`;
const Details = styled.div``;
const DetailsBox = styled.div`
  margin-top: 26px;

  @media (max-width: 767px) {
    padding: 0px 15px;
    text-align: center;
    margin-bottom: 26px;
  }
`;
const ServicesBottom = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;
const CardBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  height: 100%;
`;
const Slide = styled(Slider)`
  padding: 0px 15px;
  .slick-dots {
    padding-right: 40px;
    bottom: -60px;
  }
  .slick-dots li {
    margin: 0 1px;
    color: rgb(150, 158, 171);
  }
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }
  li.slick-active button:before {
    color: #ff4f47;
    font-size: 15px;
    transition: all 500ms ease;
  }
  .slick-prev {
    position: absolute;
    top: -20px;
    left: 87%;
    z-index: 1;
    margin-left: 5px;
    @media (max-width: 510px) {
      top: -30px;
    }
    &::before {
      content: '';
      border: solid #ff4f47;
      border-width: 0 4px 4px 0;
      display: inline-block;
      padding: 4px;
      transform: rotate(-45deg);
    }
    @media (max-width: 600px) {
      left: 83%;
    }
  }
  .slick-next {
    position: absolute;
    top: -20px;
    right: 13%;
    z-index: 1;
    margin-right: 5px;
    @media (max-width: 510px) {
      top: -30px;
    }
    &::before {
      content: '';
      border: solid #ff4f47;
      border-width: 0 4px 4px 0;
      display: inline-block;
      padding: 4px;
      transform: rotate(135deg);
    }
    @media (max-width: 600px) {
      right: 17%;
    }
  }
`;

export default Services;
