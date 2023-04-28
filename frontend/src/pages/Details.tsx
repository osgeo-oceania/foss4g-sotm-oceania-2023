import React from "react";
import QuestionAnswer from "../components/QuestionAnswer";

export const Details = () => {

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-12 mx-auto">
                <h1 className="text-3xl font-semibold text-gray-800 lg:text-4xl dark:text-white">Details for the day</h1>

                <p className="mt-6 text-sm text-gray-500 dark:text-gray-300">
                    Our wedding is being hosted at the beautiful Kingsford Homestead located at 68 Kingsford Road Kingsford.  
                </p>

                <div className="mt-8 space-y-8 lg:mt-12">

                    <QuestionAnswer question="How do I get there?">
                        <p className="mt-6 text-sm text-gray-500 dark:text-gray-300">
                            <p className="mt-6">Kingsford is a 45 minute drive North of Adelaide and accessible off the Northern Expressway.</p>  
                            
                            <p className="mt-6">If you plan to stay in the Barossa for the weekend there will be a bus to take you to and from the venue.</p>  
                            
                            <p className="mt-6">The pick up spot is TBC but will be at a central location.</p> 
                        </p>
                    </QuestionAnswer>

                    <QuestionAnswer question="Wishing Well?">
                        <div className="text-sm text-gray-500 dark:text-gray-300">
                            <p className="mt-6">The most important thing is to have you with us on our special day.  No gifts are needed or expected.</p>

                            <p className="mt-6">However, if you were thinking of giving us a gift to help us on our way, a monetary gift towards our honeymoon would really make our day.</p>

                            <p className="mt-6">Whilst a special honeymoon is our wish, just know that a wonderful experience together is worth more than a dish!</p>

                            <p className="mt-6">(Yep - we made a rhyme 🙂)</p>
                        </div>
                    </QuestionAnswer>

                    <QuestionAnswer question="Dress code?">
                        <p className="mt-6 text-sm text-gray-500 dark:text-gray-300">
                            
                            <p className="mt-6">Our ceremony and cocktail hour will be held outside on grass and our Reception will be indoors.</p>

                            <p className="mt-6">Lounge suit or semi-formal</p>
                            
                            <p className="mt-6">Suit or sports blazer, tie optional</p>
                            
                            <p className="mt-6">Please, no jeans!</p>

                            <p className="mt-6">Ladies - dress to impress.</p>

                            <p className="mt-6">And don't forget your dancing shoes. </p>
                        </p>
                    </QuestionAnswer>

                    <QuestionAnswer question="What time does the ceremony start?">
                        <p className="mt-6 text-sm text-gray-500 dark:text-gray-300">
                            <p className="mt-6">Our Ceremony will commence at 3pm with cocktail hour to follow.</p>

                            <p className="mt-6">Our Reception and dinner will start at 6pm.</p>
                        </p>
                    </QuestionAnswer>

                    <QuestionAnswer question="Finish time?">
                        <p className="mt-6 text-sm text-gray-500 dark:text-gray-300">
                            Midnight
                        </p>
                    </QuestionAnswer>

                    <QuestionAnswer question="Post Wedding Sunday Session?">
                        <p className="mt-6 text-sm text-gray-500 dark:text-gray-300">
                            <p className="mt-6">We say why not keep the party rolling.</p>

                            <p className="mt-6">Join us from 11am-2pm on Sunday for some delicious food, a little hair of the dog and a catch up on all the previous day and night’s frivolity.</p>

                            <p className="mt-6">The cost for the day is $79/head.  This does not include drinks.</p>
                        </p>
                    </QuestionAnswer>

                    <h3 className="text-center text-3xl font-semibold text-gray-800 lg:text-xl dark:text-white">
                        Should you have any other questions or concerns please don’t hesitate to reach out to us!
                    </h3>
                </div>
            </div>
        </section>
    );
};


export default Details;