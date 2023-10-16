import styled from 'styled-components';
import Slider from 'react-slick';
import {motion} from 'framer-motion';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import ProductCard from '../Cards/ProductCard';

const ServiceHome = () => {
  const serviceData = [
    {
      title: 'Full Stack Website',
      description:
        'End-to-end website development expertise at your fingertips.',
      imgsrc: '/images/digitalproduct/full-stack-wedbsite-development.png',
      iconsrc: '/images/technologies/www.png',
    },
    {
      title: 'Hybrid App Development',
      description:
        'Seamless cross-platform mobile apps, crafted with expertise.',
      imgsrc: '/images/digitalproduct/hybrid-app-development.jpg',
      iconsrc: '/images/technologies/hybridapp.png',
    },
    {
      title: 'MERN Stack Website',
      description: 'Experience the power of MERN Stack with our MERN expertise',
      imgsrc: '/images/digitalproduct/mern-stack-wedbsite-development.png',
      iconsrc: '/images/technologies/javascripticoon.png',
    },
    {
      title: 'Android & iOS App ',
      description:
        'Unleash the power of mobile with our Android & iOS app development.',
      imgsrc: '/images/digitalproduct/android-and-ios-app.jpg',
      iconsrc: '/images/technologies/play-store.png',
    },
    {
      title: 'Ecommerce Website',
      description:
        'Transform your business with our expert e-commerce development.',
      imgsrc: '/images/digitalproduct/ecommerce-website-development.jpg',
      iconsrc: '/images/technologies/ecom.png',
    },
    {
      title: 'Mobile App Development',
      description: 'Transforming ideas into innovative mobile applications.',
      imgsrc: '/images/digitalproduct/mobile-app-development.jpg',
      iconsrc: '/images/technologies/appstore.png',
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1670,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          centerMode: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 531,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };
  return (
    <Service>
      <Shape1
        as={motion.div}
        animate={{
          x: [-40, 5, -40],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}>
        <img src="/images/services-shape-1.png" alt="" />
      </Shape1>
      <Shape2>
        <img src="/images/services-shape-2.png" alt="" />
      </Shape2>
      <Container>
        <ServicesTop>
          <Title>
            <p>
              <span>
                <CheckBoxOutlineBlankIcon />
              </span>
              Digital Products
            </p>
            <h1>Essay Development Process With Our Digital Products</h1>
          </Title>
          <Details>
            <DetailsBox>
              <p>
                Experience the ultimate ease and efficiency in essay development
                with our exceptional digital products.From brainstorming ideas
                to organizing content and refining your writing, our innovative
                tools and resources will streamline your process, ensuring a
                polished and impressive final result.
              </p>
            </DetailsBox>
          </Details>
        </ServicesTop>
      </Container>
      <ServicesBottom>
        <Slider {...settings}>
          {serviceData &&
            serviceData.map((cardData, index) => (
              <ProductCard
                key={index}
                title={cardData.title}
                description={cardData.description}
                imgsrc={cardData.imgsrc}
                iconsrc={cardData.iconsrc}
              />
            ))}
        </Slider>
      </ServicesBottom>
    </Service>
  );
};

const Service = styled.div`
  position: relative;
  display: block;
  padding: 120px 0 90px;
  z-index: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    content: '';
    background-color: #1c1b1f;
    height: 505px;
    z-index: -1;
  }
`;
const Shape1 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  mix-blend-mode: luminosity;
  img {
    opacity: 0.06;
  }
`;
const Shape2 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  mix-blend-mode: luminosity;
  img {
    width: auto;
    opacity: 0.02;
  }
`;

const Container = styled.div`
  padding: 0px 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const ServicesTop = styled.div`
  display: flex;
  margin-bottom: 49px;
  @media (max-width: 991px) {
    flex-direction: column;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    flex-direction: column;
  }
`;
const Title = styled.div`
  flex: 1;
  p {
    display: flex;
    align-items: flex-start;
    font-size: 24px;
    color: #ff4f47;
    font-weight: 800;
    line-height: 26px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 10px;
    @media only screen and (max-width: 768px) {
      font-size: 16px;
      margin-bottom: 0px;
    }
    span {
      margin-right: 10px;
    }
  }
  h1 {
    font-size: 48px;
    line-height: 50px;
    font-weight: 800;
    color: #ffffff;
    @media only screen and (max-width: 768px) {
      font-size: 24px;
      line-height: 34px;
    }
  }
`;
const Details = styled.div`
  flex: 1;
`;
const DetailsBox = styled.div`
  width: 95%;
  margin-top: 26px;
  padding: 15px;
  @media (max-width: 991px) {
    padding: 0px;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    padding: 0px;
  }
`;

const ServicesBottom = styled.div`
  width: 90%;
  gap: 10px;
  position: relative;
  margin: 0 auto;

  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    width: 95%;
  }
  @media (max-width: 667px) {
    width: 100%;
  }
  @media (max-width: 375px) {
    width: 90%;
  }
  @media (max-width: 531px) {
    width: 90%;
  }
  div {
    padding-top: 3px;
    display: block;
    .slick-prev {
      position: absolute;
      top: -15px;
      left: 90%;
      z-index: 1;
      margin-left: 5px;
      &::before {
        content: '';
        border: solid #ff4f47;
        border-width: 0 4px 4px 0;
        display: inline-block;
        padding: 4px;
        transform: rotate(-45deg);
      }
    }
    .slick-next {
      position: absolute;
      top: -15px;
      right: 10%;
      z-index: 1;
      margin-right: 5px;
      &::before {
        content: '';
        border: solid #ff4f47;
        border-width: 0 4px 4px 0;
        display: inline-block;
        padding: 4px;
        transform: rotate(135deg);
      }
    }
    ul li button {
      &:before {
        display: none;
      }
    }

    @media (max-width: 531px) {
      .slick-list {
        overflow: visible;
      }
    }
    @media only screen and (min-width: 375px) and (max-width: 404px) {
      .slick-list {
        overflow: hidden;
      }
    }
  }
`;

export default ServiceHome;
