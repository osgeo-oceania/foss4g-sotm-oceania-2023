import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import CodeOfConductPage from "./pages/CodeOfConduct";
import NoPage from "./pages/NoPage";
import PresentPage from "./pages/Present";
import Workshops from "./pages/Workshops";
import CommunityDayPage from "./pages/CommunityDay";


export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="code-of-conduct" element={<CodeOfConductPage />} />
          <Route path="present" element={<PresentPage />} />
          <Route path="workshops" element={<Workshops />} />
          <Route path="community-day" element={<CommunityDayPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
