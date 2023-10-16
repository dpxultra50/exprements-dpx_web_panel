import styled from 'styled-components';

const IndustrieCard = ({title, iconsrc}) => {
  return (
    <Card>
      <Container>
        <Icon>
          <img src={iconsrc} alt="" />
        </Icon>
        <Text>
          <h3>{title}</h3>
        </Text>
      </Container>
    </Card>
  );
};
const Card = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  flex: 0 0 20%;
  min-width: 250px;
  margin-top: 16px;
`;
const Container = styled.div`
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  background-color: #151518;
  border-radius: 5px;
  border-bottom: 4px solid #0e0e10;
  box-shadow: 0 10px 15px 0 #121113;
  padding: 30px 25px;
  max-width: 250px;
  min-width: 100%;
  min-height: 100%;
  transition: all 500ms ease;
  &:hover {
    border-bottom: 4px solid #ff4f47;
  }
`;
const Icon = styled.div``;
const Text = styled.div`
  h3 {
    font-size: 18px;
    font-weight: 800;
    line-height: 24px;
    letter-spacing: 0.5px;
  }
`;

export default IndustrieCard;
