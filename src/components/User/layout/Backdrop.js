import styled from "styled-components";

const Backdrop = ({ backdrop, closeSidebar }) => {
  return <Container toggleStyle={backdrop} onClick={closeSidebar}></Container>;
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  transition: opacity 500ms ease 0ms, visibility 500ms ease 0ms;

  ${(props) => {
    if (props.toggleStyle) {
      return `
      visibility:visible;
      opacity: 1;
      `;
    } else {
      return `
      visibility:hidden;
      opacity: 0;
      `;
    }
  }}
`;
export default Backdrop;
