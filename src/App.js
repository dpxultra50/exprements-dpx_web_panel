import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/User/Home/Home";
import Admin from "./components/Admin/Admin";
import User from "./components/User/User";
import Dashboard from "./components/Admin/Dashboard/Dashboard";
import LoginSignup from "./components/User/LoginSignup/LoginSignUp";
import LoginCard from "./components/User/LoginSignup/LoginCard";
import SignupCard from "./components/User/LoginSignup/SignupCard";
import ForgotPassword from "./components/User/LoginSignup/ForgotPassword";
import ResetPassword from "./components/User/LoginSignup/ResetPassword,";
import Profile from "./components/User/Profile/Profile";
import About from "./components/User/About/About";
import { useEffect } from "react";
import { loadUser } from "./Features/userFeatures/authSlice";
import { useDispatch } from "react-redux";
import ProtectedRoute from "./components/Route/ProtectedRoute";
import VerifiRequest from "./components/User/LoginSignup/VerifiRequest";
import VerifyAccount from "./components/User/LoginSignup/VerifyAccount";
import Service from "./components/User/Service/Service";
import AccountStatus from "./components/User/LoginSignup/AccountStatus";
import UpdateProfile from "./components/User/Profile/UpdateProfile";
import UpdatePassword from "./components/User/LoginSignup/UpdatePassword";
import ContactUs from "./components/User/ContactUs/ContactUs";
import MeetingDateTime from "./components/User/ContactUs/MeetingDateTime";
import MeetingDetails from "./components/User/ContactUs/MeetingDetails";
import Meetings from "./components/Admin/Meetings/Meetings";
import Works from "./components/User/Works/Works";
import IndustriesWeServe from "./components/User/Industries/IndustriesWeServe";
import ProjectDeatils from "./components/Admin/Projects/ProjectDeatils";
import VerifyAndSchedule from "./components/Admin/Meetings/VerifyAndSchedule";
import ClintMeetingDeatils from "./components/User/Profile/ClintMeetingDeatils";
import GetAllQuote from "./components/Admin/Meetings/GetAllQuote";
import Project from "./components/Admin/Projects/Project";
import CreateProject from "./components/Admin/Projects/CreateProject";
import FourOFour from "./components/User/layout/FourOFour";
import UserProjectDetails from "./components/User/Project/UserProjectDetails";
import UpdateProject from "./components/Admin/Projects/UpdateProject";
import AdminUsers from "./components/Admin/Users/AdminUsers";
import MobileApp from "./components/User/Services/MobileApp";
import WebDevelopment from "./components/User/Services/WebDevelopment";
import BlockchainDev from "./components/User/Services/BlockchainDev";
import EcommerceDev from "./components/User/Services/EcommerceDev";
import CyberSecurity from "./components/User/Services/CyberSecurity";
import AiMl from "./components/User/Services/AiMl";
import DigitalMarketing from "./components/User/Services/DigitalMarketing";
import IotEmbedded from "./components/User/Services/IotEmbedded";
import MetaverseDev from "./components/User/Services/MetaverseDev";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);
  return (
    <div className="App">
      <Routes>
        <Route element={<User />}>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/works" element={<Works />} />
          <Route path="/industries" element={<IndustriesWeServe />} />

          {/* Service Routs */}
          <Route
            path="/service/mobile-app-development"
            element={<MobileApp />}
          />
          <Route path="/service/web-development" element={<WebDevelopment />} />
          <Route
            path="/service/blockchain-development"
            element={<BlockchainDev />}
          />
          <Route
            path="/service/ecommerce-development"
            element={<EcommerceDev />}
          />
          <Route path="/service/cyber-security" element={<CyberSecurity />} />
          <Route
            path="/service/artificial-intelligence-and-machine-learning"
            element={<AiMl />}
          />
          <Route
            path="/service/digital-marketing"
            element={<DigitalMarketing />}
          />
          <Route path="/service/iot-development" element={<IotEmbedded />} />
          <Route
            path="/service/metaverse-development"
            element={<MetaverseDev />}
          />

          <Route path="*" element={<FourOFour />} />

          <Route
            path="/meeting/details/:id"
            element={<ClintMeetingDeatils />}
          />
          <Route element={<ContactUs />}>
            <Route
              path="/contactus/meeting/timedate"
              element={<MeetingDateTime />}
            />
            <Route
              path="/contactus/meeting/details"
              element={<MeetingDetails />}
            />
          </Route>

          <Route element={<LoginSignup />}>
            <Route path="/login" element={<LoginCard />} />
            <Route path="/signup" element={<SignupCard />} />
            <Route path="/password/forgot" element={<ForgotPassword />} />
            <Route path="/password/reset/:token" element={<ResetPassword />} />
          </Route>

          {/* --------//ProtectedRoute//----------- */}
          <Route element={<ProtectedRoute />}>
            <Route path="/account" element={<Profile />} />
            <Route path="/account/verifirequest" element={<VerifiRequest />} />
            <Route path="/account/verify/:token" element={<VerifyAccount />} />
            <Route path="/account/status" element={<AccountStatus />} />
            <Route path="/account/update" element={<UpdateProfile />} />
            <Route path="/password/update" element={<UpdatePassword />} />
            <Route
              path="/project/details/:id"
              element={<UserProjectDetails />}
            />
            ;
          </Route>
        </Route>

        {/*--------------- //ADMIN ROUTS// -----------*/}
        <Route element={<ProtectedRoute isAdmin={true} />}>
          <Route element={<Admin />}>
            <Route
              path="/admin"
              element={<Navigate to="/admin/dashboard" replace />}
            />
            <Route path="/admin/dashboard" element={<Dashboard />} />;
            <Route path="/admin/meetings" element={<Meetings />} />;
            <Route
              path="/admin/meeting/verify/:id"
              element={<VerifyAndSchedule />}
            />
            ;
            <Route path="/admin/quotes" element={<GetAllQuote />} />;
            <Route path="/admin/projects" element={<Project />} />;
            <Route path="/admin/project/create" element={<CreateProject />} />;
            <Route
              path="/admin/project/details/:id"
              element={<ProjectDeatils />}
            />
            ;
            <Route
              path="/admin/project/update/:id"
              element={<UpdateProject />}
            />
            ;
            <Route path="/admin/users" element={<AdminUsers />} />;
            <Route path="/admin/*" element={<FourOFour />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
