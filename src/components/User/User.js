import {useState} from 'react';
import {Outlet} from 'react-router-dom';
import Backdrop from './layout/Backdrop';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Sidebar from './layout/Sidebar';
import ScrollToTop from './layout/ScrollToTop';

const User = () => {
  const [sideBar, setSideBar] = useState(false);

  const toggleSideBar = () => {
    setSideBar(prevState => !prevState);
  };
  return (
    <>
      <>
        <Header openSideBar={toggleSideBar} />
        <Backdrop backdrop={sideBar} closeSidebar={toggleSideBar} />
        <Sidebar sidebar={sideBar} closeSidebar={toggleSideBar} />
        <ScrollToTop />
      </>
      <Outlet />
      <>
        <Footer />
      </>
    </>
  );
};

export default User;
