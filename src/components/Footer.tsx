import {
  faTwitter,
  faYoutube,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Markdown from "markdown-to-jsx";
import { markdownCommonStyles } from "../utils/markdownCommonStyles";
import Acknowledge from "../documents/acknowledgement-country.md";
import { useEffect, useState } from "react";

const Footer = () => {
  const [acknowledgeMddText, setAcknowledgeText] = useState("");

  useEffect(() => {
      fetch(Acknowledge)
      .then((res) => res.text())
      .then((text) => setAcknowledgeText(text));
  }, []);
  return (
    <div>
       <section className="bg-gray-900 text-sm text-white">
        <div className="container mx-auto px-4 py-8 text-italic text-center prose-sm">
          <Markdown
            options={{
              overrides: markdownCommonStyles,
            }}
            children={acknowledgeMddText}
          />
        </div>
      </section>
    <footer className="bg-blue-950">
      <div className="container p-6 mx-auto">
        <div className="lg:flex">
          <div className="w-full -mx-6 lg:w-2/5">
            <div className="px-6">
              {/* <a href="/">
                <img
                  className="w-auto h-24"
                  src="/imgs/FOSS4G-2024-Logo-White.png "
                  alt=""
                />
              </a> */}
              <p className="max-w-sm mt-2 text-gray-400">
                Join us as we discover what's new in FOSS4G!
              </p>
              <div className="flex mt-6 -mx-2">
                <a
                  href="https://twitter.com/foss4g_oceania/"
                  target="_blank"
                  rel="noreferrer"
                  className="mx-2 transition-colors duration-300 text-gray-300 hover:text-blue-500 hover:text-blue-400"
                  aria-label="Twitter"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCbqmnF77HxLCmO9d7LrEbpg"
                  target="_blank"
                  rel="noreferrer"
                  className="mx-2 transition-colors duration-300 text-gray-300 hover:text-blue-500 hover:text-blue-400"
                  aria-label="YouTube"
                >
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
                <a
                  href="https://www.linkedin.com/company/18396595/"
                  target="_blank"
                  rel="noreferrer"
                  className="mx-2 transition-colors duration-300 text-gray-300 hover:text-blue-500 hover:text-blue-400"
                  aria-label="LinkedIn"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                  href="https://www.facebook.com/FOSS4GOceania/"
                  target="_blank"
                  rel="noreferrer"
                  className="mx-2 transition-colors duration-300 text-gray-300 hover:text-blue-500 hover:text-blue-400"
                  aria-label="Facebook"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div>
                <h3 className="uppercase text-white">About</h3>
                <a
                  href="https://www.osgeo.org/"
                  target="_blank"
                  rel="noreferrer"
                  className="block mt-2 text-sm text-gray-400 hover:underline"
                >
                  Open Source Geospatial Foundation (OSGeo)
                </a>
                <a
                  href="https://osmfoundation.org/"
                  target="_blank"
                  rel="noreferrer"
                  className="block mt-2 text-sm text-gray-400 hover:underline"
                >
                  OpenStreetMap Foundation
                </a>
              </div>
              <div>
                <h3 className="uppercase text-white">Related Conferences</h3>
                <a
                  href="https://www.osgeo.org/events/foss4g-2024-belem-brazil/"
                  target="_blank"
                  rel="noreferrer"
                  className="block mt-2 text-sm text-gray-400 hover:underline"
                >
                  FOSS4G: Belém, Brazil
                </a>
              </div>
              <div>
                <h3 className="uppercase text-white">Event Resources</h3>
                <a
                  href="/#/code-of-conduct"
                  className="block mt-2 text-sm text-gray-400 hover:underline"
                >
                  Code Of Conduct
                </a>
              </div>
              <div>
                <h3 className="uppercase text-white">Contact</h3>
                <a
                  href="#/mailing-list"
                  className="block mt-2 text-sm text-gray-400 hover:underline"
                >
                  Join our Mailing List
                </a>
                <a
                  href="mailto:chair@foss4g-oceania.org"
                  className="block mt-2 text-sm text-gray-400 hover:underline"
                >
                  chair@foss4g-oceania.org
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr className="h-px my-6 bg-gray-200 border-none bg-gray-700" />
        <div>
          <p className="text-center text-gray-500 text-gray-400">
            © FOSS4G Oceania - All rights reserved
          </p>
        </div>
      </div>
    </footer>
    </div>
  );
};
export default Footer;
