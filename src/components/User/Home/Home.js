import styled from "styled-components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors } from "../../../Features/userFeatures/authSlice";
import RecentProjects from "../Cards/RecentProjects";
import Clients from "../layout/Clients";
import ImgSlider from "../layout/ImgSlider";
import NewsLetter from "../layout/NewsLetter";
import ProcessWeFollow from "../layout/ProcessWeFollow";
import Services from "../layout/Services";
import Testimonials from "../layout/Testimonials";
import Viewers from "../layout/Viewers";
import WorkWith from "../layout/WorkWith";
import ServiceHome from "../layout/ServiceHome";
import Features from "../layout/Features";
import MetaData from "../layout/MetaData";

const Home = () => {
  const { error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error && error !== null) {
      dispatch(clearErrors());
    }
  }, [error, dispatch]);

  return (
    <Container>
      <MetaData
        title=" Top Mobile App & Blockchain Development Company USA, India &
          Bangladesh - DataPollex"
        keywords="app development company, top app development companies,top it company in bangladesh,top it companies in dhaka,top it company in usa, app development companies, top app development company, mobile app development company,blockchain development company, top blockchain development company, blockchain development company in bangladesh,  mobile app development companies, ahmedabad, san francisco, USA, UAE,bangladesh, japan, India"
        desc="DataPollex is top mobile app, web and blockchain development company bangladesh, India, USA & Japan &amp; UAE that offers iPhone (iOS) &amp; Android app and blockchain development services at incredibly cost effectively."
      />
      <ImgSlider />
      <Features />
      <Viewers />
      <Services />
      <Clients />
      <ProcessWeFollow />
      <RecentProjects />
      <ServiceHome />
      <WorkWith />
      <Testimonials />
      <NewsLetter />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;
export default Home;
