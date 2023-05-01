import React from "react";
import { faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Footer = () => {
    return (
        <footer className="bg-white dark:bg-blue-950">
        <div className="container p-6 mx-auto">
          <div className="lg:flex">
            <div className="w-full -mx-6 lg:w-2/5">
              <div className="px-6">
                <a href="/">
                  <img className="w-auto h-24" src="/imgs/FOSS4G-2023-Logo-White.png " alt="" />
                </a>
                <p className="max-w-sm mt-2 text-gray-500 dark:text-gray-400">Join us as we discovery what's new in FOSS4G!</p>
                <div className="flex mt-6 -mx-2">
                  <a href="https://twitter.com/foss4g_oceania/" target='_blank' rel='noreferrer' className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Twitter">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a href="https://www.youtube.com/channel/UCbqmnF77HxLCmO9d7LrEbpg" target='_blank' rel='noreferrer' className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="YouTube">
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-6 lg:mt-0 lg:flex-1">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div>
                  <h3 className="text-gray-700 uppercase dark:text-white">About</h3>
                  <a href="https://www.osgeo.org/" target='_blank' rel='noreferrer' className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Open Source Geospatial Foundation (OSGeo)</a>
                </div>
                <div>
                  <h3 className="text-gray-700 uppercase dark:text-white">Related Conferences</h3>
                  <a href="https://2023.foss4g.org/" target='_blank' rel='noreferrer' className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">FOSS4G: Prizren, Kosovo</a>
                </div>
                <div>
                  <h3 className="text-gray-700 uppercase dark:text-white">Event Resources</h3>
                  <a href="/#/code-of-conduct" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Code Of Conduct</a>
                </div>
                <div>
                  <h3 className="text-gray-700 uppercase dark:text-white">Contact</h3>
                  <a href="mailto:admin@foss4g-oceania.org" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">admin@foss4g-oceania.org</a>
                </div>
              </div>
            </div>
          </div>
          <hr className="h-px my-6 bg-gray-200 border-none dark:bg-gray-700" />
          <div>
            <p className="text-center text-gray-500 dark:text-gray-400">© FOSS4G Oceania - All rights reserved</p>
          </div>
        </div>
      </footer>
    );
};
export default Footer;