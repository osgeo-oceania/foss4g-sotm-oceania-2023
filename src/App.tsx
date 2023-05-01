import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/Home';
import CodeOfConductPage from "./pages/CodeOfConduct";
// import Gallery from './pages/Gallery';
// import RSVP from './pages/RSVP';
// import Program from './pages/Program';
// import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import ThankYou from "./pages/ThankYou";
import Details from "./pages/Details";

// const [searchParams, setSearchParams] = useSearchParams();
// const guestId = searchParams.get("guest_id");

// console.log(guestId);

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="gallery" element={<Gallery />} /> */}
          <Route path="code-of-conduct" element={<CodeOfConductPage  />} />
          <Route path="details" element={<Details  />} />
          <Route path="thank-you" element={<ThankYou  />} />
          {/* <Route path="program" element={<Program />} />
          <Route path="contact" element={<Contact />} /> */}
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}