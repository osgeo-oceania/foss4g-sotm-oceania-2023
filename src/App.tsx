import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import CodeOfConductPage from "./pages/CodeOfConduct";
import AccommodationPage from "./pages/Attend/Accommodation";
import NoPage from "./pages/NoPage";
import PresentPage from "./pages/Present";
import AttendTGPPage from "./pages/Attend/TravelGrantProgram";
import Workshops from "./pages/Program/Workshops";
import CommunityDayPage from "./pages/Program/CommunityDay";
import Sponsorship from "./pages/Sponsorship";
import Team from "./pages/Team";
import OurConferenceVenuePage from "./pages/Attend/OurConferenceVenue";
import ProgramPage from "./pages/Program/Program";
import RegisterPage from "./pages/Attend/Register";
import SocialEventsPage from "./pages/Program/SocialEvents";
import GetInvolvedPage from "./pages/Program/GetInvolved";
import ProductShowcasePage from "./pages/Program/ProductShowcase";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="code-of-conduct" element={<CodeOfConductPage />} />
          <Route path="attend/present" element={<PresentPage />} />
          <Route
            path="attend/travel-grant-program"
            element={<AttendTGPPage />}
          />
          <Route
            path="attend/our-conference-venue"
            element={<OurConferenceVenuePage />}
          />
          <Route path="attend/Accommodation" element={<AccommodationPage />} />
          <Route path="attend" element={<RegisterPage />} />
          <Route path="program" element={<ProgramPage />} />
          <Route path="program/social-events" element={<SocialEventsPage />} />
          <Route path="program/workshops" element={<Workshops />} />
          <Route path="program/get-involved" element={<GetInvolvedPage />} />
          <Route path="program/community-day" element={<CommunityDayPage />} />
          <Route path="program/product-showcase" element={<ProductShowcasePage />} />
          <Route path="sponsorship" element={<Sponsorship />} />
          <Route path="team" element={<Team />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
