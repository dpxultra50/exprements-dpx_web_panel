import styled from "styled-components";
import HeaderBanner from "../layout/HeaderBanner";
import Projects from "./Projects";
import Clients from "../layout/Clients";
import Consumers from "../About/Consumers";
import GetAQuote from "../layout/GetAQuote";
import MetaData from "../layout/MetaData";

const Works = () => {
  const bannerData = {
    backImg: "/images/header/header3.webp",
    title: "Leading The Digital Revolution",
    subTitle: "Innovate. Transform. Empower. Evolve.",
    opacity: 0.6,
  };
  return (
    <Container>
      <MetaData
        title="Works | DataPollex Website Development &amp; Software Development Company USA, India &
          Bangladesh"
        keywords="highest paying vlsi companies in india, highest paying vlsi companies in india, website developer in bangladesh, largest it company in bangladesh, largest it hub in india, top it company in saudi arabia,top it company in canada, top it companies in usa, blockchain development companies in india, blockchain development companies in usa, blockchain development companies in bangladesh, software development company in bangladesh, top software development company in bangladesh, software engineer salary bangladesh, it jobs in bangladesh, it solutions in bangladesh, top it company in japan, japanasi it company, software development company in japan, software development company in japan, it solution company in japan, japanese IT, largest it companies in japan, big it companies in japan,which is the biggest company in japan,what are the 5 largest companies in japan, which is the biggest company in bangladesh"
        desc="Discover our recent projects at dataPollex, a leading IT service company. We specialize in delivering cutting-edge solutions for startups, SaaS, and enterprise companies. Explore our portfolio of top-notch mobile app development, website development, and blockchain development projects. Our team of experts in Bangladesh, India, Japan, and the USA is committed to providing cost-effective IT solutions. Visit us now!"
      />
      <HeaderBanner bnrdata={bannerData} />
      <Clients />
      <Projects />
      <Consumers />
      <div className="breaker" />
      <GetAQuote />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: block;
  overflow: hidden;
  .breaker {
    margin-bottom: 60px;
  }
`;

export default Works;
