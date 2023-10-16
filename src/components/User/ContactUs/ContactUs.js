import styled from 'styled-components';
import ScheduleMeeting from './ScheduleMeeting';
import GetAQuote from '../layout/GetAQuote';
import MetaData from '../layout/MetaData';

const ContactUs = () => {
  return (
    <Container>
      <MetaData
        title="Contact Us For All Your IT Needs | DataPollex| Website Development &amp; Company| Software Development Company USA, India &
          Bangladesh | IT Company Japan | IT Company Bangladesh"
        keywords="Top IT company in Bangladesh , IT services in Bangladesh , Software development company in Bangladesh , Mobile app development company in Bangladesh , Website development company in Bangladesh , IT solutions provider in Bangladesh , Blockchain development company in Bangladesh , Cloud computing services in Bangladesh , AI and machine learning solutions in Bangladesh , IT consulting services in Bangladesh ,     Top IT company in Japan, IT services in Japan, Software development company in Japan, Mobile app development company in Japan, Website development company in Japan, IT solutions provider in Japan, Blockchain development company in Japan, Cloud computing services in Japan, AI and machine learning solutions in Japan, IT consulting services in Japan"
        desc="Contact dataPollex, a leading IT service company, to discuss your software development, blockchain solutions, and app development requirements. Our expert team is ready to assist you with cutting-edge technology solutions. Reach out to us today!"
      />
      <ScheduleMeeting />
      <GetAQuote />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  overflow: hidden;
`;

export default ContactUs;
