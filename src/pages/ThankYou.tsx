import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'

const ThankYou = () => {

    //Sunday session info
    return (
        <section className="bg-white">
            <div className="container px-6 py-16 mx-auto text-center">
                <div className="max-w-lg mx-auto">

                    <div className="flex justify-center">
                        <img className="w-full " src="/imgs/thank-you.png" alt="Thank you!" />
                    </div>
                </div>

                <div className="max-w-lg mx-auto h-48">
                    <div className="flex justify-center mt-6">
                        <a target={"_blank"} rel="noreferrer" href="https://www.google.com/calendar/render?action=TEMPLATE&text=Georgia+and+Olivers+Wedding&dates=20230325T150000/20230326T000000&details=For+details,+go+to+this+page:+https://www.georgia-and-olivers-wedding.com/details&location=68+Kingsford+Rd,+Kingsford+SA+5118&sf=true&output=xml" className="ml-4 px-4 py-2 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"><FontAwesomeIcon className="mr-2" icon={faCalendar} /> Add to Google Calendar</a>
                    </div>

                    <div className="flex justify-center mt-6">
                        <a href="/" className="ml-4 px-4 py-2 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Home</a>
                        <a href="/details" target={'_blank'} className="ml-4 px-4 py-2 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Details</a>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default ThankYou;
