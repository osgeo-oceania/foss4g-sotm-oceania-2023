import { BrowserRouter, Routes, Route, useSearchParams } from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/Home';
// import Gallery from './pages/Gallery';
import RSVP from './pages/RSVP';
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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="gallery" element={<Gallery />} /> */}
          <Route path="rsvp" element={<RSVP  />} />
          <Route path="details" element={<Details  />} />
          <Route path="thank-you" element={<ThankYou  />} />
          {/* <Route path="program" element={<Program />} />
          <Route path="contact" element={<Contact />} /> */}
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}