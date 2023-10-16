import styled from 'styled-components';

const NothingToDisplay = ({data}) => {
  return (
    <Container>
      <img src="/images/nothing_to_display.ico" alt="" />
      <h2>No {data ? data : 'Data'} To Display</h2>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h2 {
    color: #c7cad9;
    text-transform: uppercase;
    text-align: center;
    font-size: 22px;
    letter-spacing: 1px;
    @media (max-width: 341px) {
      font-size: 18px;
    }
  }
`;
export default NothingToDisplay;
