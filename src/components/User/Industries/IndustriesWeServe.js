import styled from "styled-components";
import HeaderBanner from "../layout/HeaderBanner";
import NewsLetter from "../layout/NewsLetter";
import Consumers from "../About/Consumers";
import WorkWith from "../layout/WorkWith";
import Industries from "../layout/Industries";
import ServiceHome from "../layout/ServiceHome";
import MetaData from "../layout/MetaData";

const IndustriesWeServe = () => {
  const bannerData = {
    backImg: "/images/header/header1.webp",
    title: "Our Tech Vision, Our Future",
    subTitle: "Building Tomorrow's Digital Landscape",
    opacity: 0.6,
  };
  return (
    <Container>
      <MetaData
        title="Industries | DataPollex Website Development &amp; Software Development Company USA, India &
          Bangladesh"
        keywords="top website development company in india,top website development company in india usa, it company in bangladesh,top it services companies in bangladesh,  top app development companies,top it company in bangladesh, top blockchain companies, top digital marketing agency in bangladesh, top digital marketing agency in usa, top it companies in dhaka,top it company in usa, app development companies, top app development company, mobile app development company,blockchain development company, top blockchain development company, most trusted company, blockchain development company in bangladesh, mobile app development companies, ahmedabad, san francisco, USA, UAE,bangladesh, japan, India"
        desc="We help startups, SaaS, and enterprise companies with cutting-edge IT solutions in bangladesh, india, japan, USA. As an AWS select Partner, we provideAndroid app and blockchain development services at incredibly cost effectively. DataPollex is a leading IT service company offering cutting-edge solutions to various industries. We provide tailored software development, web development, and blockchain development services to help businesses thrive in today's digital landscape. Our expertise spans across industries such as finance, healthcare, e-commerce, manufacturing, and more. With a team of skilled professionals and a commitment to innovation, we deliver high-quality IT solutions that drive growth and success for our clients. Explore our Industries We Serve page to learn how DataPollex can empower your business and propel it to new heights."
      />
      <HeaderBanner bnrdata={bannerData} />
      <WorkWith />
      <ServiceHome />
      <Industries />
      <div className="breaker" />
      <Consumers />
      <div className="breaker" />
      <NewsLetter />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: block;
  overflow: hidden;
  .breaker {
    margin: 60px;
  }
`;

export default IndustriesWeServe;
