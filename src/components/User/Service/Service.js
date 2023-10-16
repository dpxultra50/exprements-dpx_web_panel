import styled from 'styled-components';
import RecentProjects from '../Cards/RecentProjects';
import Clients from '../layout/Clients';
import ProcessWeFollow from '../layout/ProcessWeFollow';
import Faq from './Faq';
import Presence from './Presence';
import ServiceDetails from './ServiceDetails';
import ServiceHeader from './ServiceHeader';
import ServiceTechnologies from './ServiceTechnologies';
import Team from './Team';
import GetAQuote from '../layout/GetAQuote';
import Solutions from './Solutions';

const Service = ({data}) => {
  const {header, solution, team, keyWord, dtlsImg, faq} = data;
  return (
    <Container>
      <ServiceHeader header={header} />
      <Clients />
      <Solutions solutionData={{solution: solution, keyWord: keyWord}} />
      <Team teamData={team} />
      <ServiceTechnologies />
      <ServiceDetails dtlsData={{keyWord, dtlsImg}} />
      <ProcessWeFollow />
      <RecentProjects />
      <GetAQuote />
      <Presence />
      <Faq faqs={{faq}} />
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
`;

export default Service;
