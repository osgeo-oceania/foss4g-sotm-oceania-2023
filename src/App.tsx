import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import LayoutNoFooter from "./pages/LayoutNoFooter";
import Home from "./pages/Home";
import CodeOfConductPage from "./pages/CodeOfConduct";
import AccommodationPage from "./pages/Attend/Accommodation";
import NoPage from "./pages/NoPage";
import PresentPage from "./pages/Present";
import AttendTGPPage from "./pages/Attend/TravelGrantProgram";
import Workshops from "./pages/Workshops";
import CommunityDayPage from "./pages/CommunityDay";
import Sponsorship from "./pages/Sponsorship";
import OurConferenceVenuePage from "./pages/Attend/OurConferenceVenue";
import ProgramPage from "./pages/Attend/Program";
import RegisterPage from "./pages/Attend/Register";
import SocialEventsPage from "./pages/Attend/SocialEvents";
import GetInvolvedPage from "./pages/Program/GetInvolved";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="code-of-conduct" element={<CodeOfConductPage />} />
          <Route path="present" element={<PresentPage />} />
          <Route
            path="attend/travel-grant-program"
            element={<AttendTGPPage />}
          />
          <Route
            path="attend/our-conference-venue"
            element={<OurConferenceVenuePage />}
          />
          <Route path="attend/Accommodation" element={<AccommodationPage />} />
          <Route path="attend/register" element={<RegisterPage />} />
          <Route path="attend/social-events" element={<SocialEventsPage />} />
          <Route path="workshops" element={<Workshops />} />
          <Route path="program/get-involved" element={<GetInvolvedPage />} />
          <Route path="community-day" element={<CommunityDayPage />} />
          <Route path="sponsorship" element={<Sponsorship />} />
          <Route path="*" element={<NoPage />} />
        </Route>
        <Route path="/" element={<LayoutNoFooter />}>
          <Route path="attend/program" element={<ProgramPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
