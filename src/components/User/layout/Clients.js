import styled from 'styled-components';
import Slider from 'react-slick';
import ClientCard from '../Cards/ClientCard';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

const Clients = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  const clintData = [
    {
      logo: '/images/clintlogo/comp-logo-01.png',
      link: 'https://www.telia.fi/',
    },
    {
      logo: '/images/clintlogo/comp-logo-02.png',
      link: 'https://www.suomi24.fi/',
    },
    {
      logo: '/images/clintlogo/comp-logo-03.png',
      link: 'https://www.gcash.com/',
    },
    {
      logo: '/images/clintlogo/comp-logo-04.png',
      link: 'https://www.findshare.com/',
    },
    {
      logo: '/images/clintlogo/comp-logo-05.svg',
      link: 'https://www.carousell.sg/',
    },
    {
      logo: '/images/clintlogo/comp-logo-06.svg',
      link: 'https://www.pionex.com/',
    },
    {
      logo: '/images/clintlogo/comp-logo-07.svg',
      link: 'https://www.pexpay.com/',
    },
    {
      logo: '/images/clintlogo/comp-logo-08.png',
      link: 'https://leda.jup.io/',
    },
    {
      logo: '/images/clintlogo/comp-logo-09.svg',
      link: 'https://adanft.app/',
    },
    {
      logo: '/images/clintlogo/comp-logo-10.svg',
      link: ' https://www.rakuten.com/',
    },
  ];
  return (
    <Client>
      <Title>
        <CheckBoxOutlineBlankIcon />
        <h4>our clients </h4>
      </Title>
      <Container>
        <Slide {...settings}>
          {clintData &&
            clintData.map((data, index) => (
              <ClientCard key={index} logo={data.logo} link={data.link} />
            ))}
        </Slide>
      </Container>
    </Client>
  );
};
const Client = styled.div`
  background-color: #151518;
  box-shadow: 0px 10px 60px 0px rgba(0, 0, 0, 0.07);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 15px;
`;
const Title = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  top: 30px;
  left: 0;
  bottom: 0;
  border-bottom: 4px solid #0e0e10;
  border-top: 4px solid #ff4f47;
  background-color: rgb(38, 37, 42, 0.7);
  width: 20%;
  height: 60%;
  clip-path: polygon(0 0, 100% 0%, calc(100% - 50px) 100%, 0% 100%);
  z-index: 3;
  @media only screen and (min-width: 1201px) and (max-width: 1400px) {
    width: 22%;
  }
  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    width: 27%;
  }
  @media only screen and (min-width: 651px) and (max-width: 991px) {
    width: 35%;
  }
  @media only screen and (min-width: 541px) and (max-width: 650px) {
    top: 33px;
    width: 30%;
    height: 55%;
  }
  @media (max-width: 540px) {
    top: 36px;
    width: 35%;
    height: 50%;
  }
  @media (max-width: 430px) {
    top: 41px;
    width: 42%;
    height: 45%;
  }
  svg {
    margin-left: 20px;
    margin-right: 10px;
    color: #ff4f47;
    @media only screen and (min-width: 541px) and (max-width: 650px) {
      font-size: 17px;
      margin-right: 5px;
      margin-left: 15px;
    }
    @media (max-width: 540px) {
      font-size: 16px;
      width: 16px;
      margin-right: 5px;
      margin-left: 6px;
    }
  }

  h4 {
    font-weight: 800;
    font-size: 23px;
    line-height: 35px;
    color: #ffffff;
    text-transform: uppercase;

    @media only screen and (min-width: 651px) and (max-width: 702px) {
      font-size: 20px;
    }
    @media only screen and (min-width: 541px) and (max-width: 650px) {
      font-size: 16px;
    }
    @media (max-width: 540px) {
      font-size: 12px;
    }
  }
`;
const Container = styled.div`
  padding: 45px 0 45px;
  width: 100%;
`;
const Slide = styled(Slider)`
  .slick-dots li {
    display: none;
  }
  .slick-prev {
    display: none !important;
  }
  .slick-next {
    display: none !important;
  }
`;
export default Clients;
