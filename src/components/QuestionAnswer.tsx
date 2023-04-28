import React, { useState } from "react";

export interface QuestionAnswerProps {
    question: string;
    children?: React.ReactElement;
}

export const QuestionAnswer = (props: QuestionAnswerProps) => {

    const [showAnswer, setShowAnswer] = useState(false);
    const {question, children} = props;

    const handleToggleAnswer= () => {
        showAnswer ? setShowAnswer(false) : setShowAnswer(true);
    }

    return (
        <div className="p-8 bg-gray-100 rounded-lg dark:bg-gray-800">
            <button className="flex items-center justify-between w-full" onClick={handleToggleAnswer}>
                <h1 className="font-semibold text-gray-700 dark:text-white">{question}</h1>
            
            { showAnswer && (
                    <span className="text-gray-400 bg-gray-200 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6" />
                        </svg>
                    </span>
                )
            }   

            { !showAnswer && (
                    <span className="text-white bg-blue-500 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </span>
                )
            }   

                
            </button>
            { showAnswer && (
                    <>
                        {children}
                    </>
                )
            }
        </div>
    );
};


export default QuestionAnswer;

