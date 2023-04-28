import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from 'axios';

type FormValues = {
    attending: string;
    requireDiet: string;
    diet: string;
    requireTransport: string;
    transportLocation: string;
    sundaySession: string;
    addtionalComments: string;
    guestId: string;

};


const RSVP: React.FC = () => {
    const [searchParams] = useSearchParams();
    const guestId = searchParams.get("guest_id") || '';
    const { register, handleSubmit } = useForm<FormValues>();
    const [attending, setAttending] = useState('no');
    const [requireDietary, setRequireDietary] = useState('no');
    const [requireTransport, setRequireTransport] = useState('no');
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`/get_invite/${guestId}`).then(res => {
            setData(res.data);
        }); 
    }, []);


    const handleAttendingChange = (event: any) => {
        setAttending(event.target.value);
    }

    const handleDietaryChange = (event: any) => {
        setRequireDietary(event.target.value);
    }

    const handleTransportChange = (event: any) => {
        setRequireTransport(event.target.value);
    }


    let firstGuest = '';
    let secondGuest = '';

    if(data.length > 0){
        if(data[0][0] && data[0][1]){
            firstGuest = data[0][0] + ' ' + data[0][1];
        }

        if(data[0][2] && data[0][3]){
            secondGuest = data[0][2] + ' ' + data[0][3];
        }

        if(data[0][4] && data[0][4] !== ''){
            navigate("/thank-you");
        }
    }

    const onSubmit: SubmitHandler<FormValues> = data => {
        axios.post(`/set_invite`,  data )
        .then(res => {
            console.log(res.data);
            navigate("/thank-you");
        });
    };

    
    return (
        <>
            <section className="min-h-screen bg-cover"  style={{ backgroundImage: "url(/imgs/homestead.jpeg)" }} >
                <div className="flex flex-col min-h-screen bg-black/60">
                    <div className="container flex flex-col flex-1 px-6 py-12 mx-auto">
                        <div className="flex-1 lg:flex lg:items-center lg:-mx-6">

                        <div className="text-white lg:w-1/2 lg:mx-6"></div>

                            <div className="mt-8 lg:w-1/2 lg:mx-6">
                                <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl dark:bg-gray-900 lg:max-w-xl">
                                    <h1 className="text-2xl font-medium text-gray-700 dark:text-gray-200">RSVP</h1>

                                    <p className="mt-4 text-gray-500 dark:text-gray-400">
                                       Please fill out this form to RSVP to our wedding.
                                    </p>

                                    <p className="mt-4 text-2l font-bold text-gray-500 dark:text-gray-100">List of guests:</p>

                                    <ul className="space-y-1 max-w-md list-disc list-inside text-gray-500">
                                        <li>
                                            {firstGuest}
                                        </li>
                                        {secondGuest &&
                                            <li>
                                                {secondGuest}
                                            </li>
                                        }
                                        
                                    </ul>

                                    <form className="mt-6" onSubmit={handleSubmit(onSubmit)} >

                                        <div className="flex-1 mt-6">
                                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200" htmlFor="cars">Will you be attending the wedding?</label>
                                            <select {...register("attending", { required: true, value: "" })} onChange={handleAttendingChange} className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" >
                                                <option value="" disabled >Select your option</option>
                                                <option value="yes">Yes, can't wait!</option>
                                                <option value="no">No, sorry.</option>
                                                
                                            </select>
                                        </div>

                                        { attending === 'yes' &&
                                            <>
                                                <div className="flex-1 mt-6">
                                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200" htmlFor="cars">Do you have any dietary requirements?</label>
                                                    <select {...register("requireDiet", { required: true, value: "" })} onChange={handleDietaryChange} className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" >
                                                        <option value="" disabled >Select your option</option>
                                                        <option value="yes">I do</option>
                                                        <option value="no">I don't</option>
                                                        
                                                    </select>
                                                </div>

                                                { requireDietary === 'yes' &&
                                                    <div className="w-full mt-6">
                                                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">What are your dietary requirements?</label>
                                                        <textarea {...register("diet", { required: true })}  className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" placeholder="Dietary requirements"></textarea>
                                                    </div>
                                                }

                                                <div className="flex-1 mt-6">
                                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200" htmlFor="cars">Do you require transport to the venue?</label>
                                                    <select {...register("requireTransport", { required: true, value: "" })} onChange={handleTransportChange} className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" >
                                                        <option value="" disabled >Select your option</option>
                                                        <option value="yes">Yes please</option>
                                                        <option value="no">No thank you</option>
                                                        
                                                    </select>
                                                </div>

                                                { requireTransport === 'yes' &&
                                                    <div className="flex-1 mt-6">
                                                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200" htmlFor="cars">Where will you be travelling form?</label>
                                                        <select {...register("transportLocation", { required: true, value: "" })} className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                                                            <option value="" disabled >Select your option</option>
                                                            <option value="Adelaide">Adelaide</option>
                                                            <option value="Barossa Valley">Barossa Valley</option>
                                                        </select>
                                                    </div>
                                                }

                                                <div className="flex-1 mt-6">
                                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200" htmlFor="cars">We are hosting a post wedding Sunday Session at Kingsford Homestead between 11am-2pm. Cost of $79/head drinks not included, do you want to come along?</label>
                                                    <select {...register("sundaySession", { required: true, value: "" })} className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                                                        <option value="" disabled >Select your option</option>
                                                        <option value="yes">Yes, let's party!</option>
                                                        <option value="no">I'll be unavailable</option>
                                                    </select>
                                                </div>
                                            </>
                                        }

                                        <div className="w-full mt-6">
                                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Is there anything else you'd like us to know?</label>
                                            <textarea {...register("addtionalComments")}  className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" placeholder="Addtional comments"></textarea>
                                        </div>

                                        <input {...register("guestId")} type="hidden" value={guestId}></input>

                                        <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
                                            RSVP
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default RSVP;


