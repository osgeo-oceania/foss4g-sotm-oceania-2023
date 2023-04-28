import React from "react";

const Home = () => {
    return (
        <>
            Gallery
            <section className="container flex flex-col items-center px-6 py-12 mx-auto lg:flex-row">
                <div className="lg:w-1/2">
                    <h1 className="max-w-xl font-serif text-4xl font-medium tracking-wide text-[#343D33] capitalize md:text-6xl ">A beatiful adventure awaits</h1>

                    <p className="max-w-lg mt-4 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. At magnam voluptatibus perferendis odit optio.</p>
                    
                    <div className="mt-6 sm:flex sm:items-center">
                    <a href="/" className="bg-[#475F45] hover:bg-[#475F45]/80 duration-300 transition-colors border-2 border-[#475F45] px-6 block text-center py-3 uppercase text-sm font-bold leading-4 tracking-widest text-white ">
                        Buy Tickets
                    </a>

                    <a href="/" className="border-2 text-sm duration-300 transition-colors hover:bg-[#475F45] hover:text-white font-bold leading-4 mt-4 sm:mt-0 tracking-widest text-[#475F45] sm:mx-4 border-[#475F45] px-6 block text-center py-3 uppercase">
                        Learn More
                    </a>
                    </div>
                </div>

                <div className="h-[38rem] mt-12 lg:mt-0 w-full mx-auto max-w-md overflow-hidden rounded-t-full outline outline-4 outline-offset-4 outline-[#475F45]/40">
                    <img className="object-cover w-full h-full rounded-t-full " src="https://images.unsplash.com/photo-1531163859947-fa484f6eacd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="main page" />
                </div>
            </section>

            <section className="bg-[#343D33] mt-12">
                <div className="container flex flex-col px-6 py-16 mx-auto mt-12">
                <div className="order-2 mt-8 lg:order-1 lg:mt-0 lg:flex lg:items-center lg:-mx-6">
                    <img className="object-cover w-full lg:w-1/2 lg:mx-6 h-72 lg:h-96" src="https://images.unsplash.com/photo-1598901847919-b95dd0fabbb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" alt="" />
                    <div className="mt-8 lg:mx-12 lg:mt-0">
                    <h3 className="font-serif text-2xl text-white capitalize md:text-4xl lg:text-5xl">
                        The gate to a night we'll never forget
                    </h3>

                    <p className="mt-4 text-gray-200 ">
                        How to get to the event.
                    </p>
                    
                    <a className="inline-flex px-6 py-3 mt-6 text-white border-2 border-white hover:bg-[#475F45] duration-300 transition-colors" href="/">
                        Learn More
                    </a>
                    </div>
                </div>

                    <img className="order-1 object-cover lg:order-2 w-ful h-72 lg:h-96 lg:mt-12" src="https://images.unsplash.com/photo-1610462275440-4ea0976f46f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" alt="" />
                </div>
            </section>

            <section className="container px-6 py-12 mx-auto lg:py-16">
                <h3 className="font-serif text-3xl text-[#343D33] capitalize md:text-4xl lg:text-5xl">
                News & Updates
                </h3>
                
                <div className="mt-8 xl:-mx-6 xl:flex">
                <div className="xl:w-1/2 xl:mx-6">
                    <img className="object-cover w-full h-96" src="https://images.unsplash.com/photo-1626838524909-7c584c2266f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />

                    <h2 className="mt-6 font-serif text-3xl font-medium text-gray-700">Plants Around Us</h2>

                    <p className="mt-2 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt facilisis nuncLorem ipsum dolor sit.Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>

                    <p className="mt-4 italic text-gray-600">December 23, 2021</p>
                </div>

                <div className="mt-8 space-y-8 xl:w-1/2 xl:mx-6 xl:mt-0">
                    <div className="md:-mx-4 md:flex md:items-center">
                    <img className="object-cover w-full h-56 md:h-48 md:mx-4 md:w-80 shrink-0" src="https://images.unsplash.com/photo-1556426356-0fdc8b663467?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1498&q=80" alt="" />

                    <div className="mt-6 md:mx-4 md:mt-0">
                        <h2 className="font-serif text-2xl font-medium text-gray-700 ">Lush Gardens</h2>
            
                        <p className="mt-2 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt facilisis nuncLorem ipsum dolor sit...</p>
            
                        <p className="mt-4 italic text-gray-600">December 16, 2021</p>
                    </div>
                    </div>

                    <div className="md:-mx-4 md:flex md:items-center">
                    <img className="object-cover w-full h-56 md:h-48 md:mx-4 md:w-80 shrink-0" src="https://images.unsplash.com/photo-1583470790878-4f4f3811a01f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80" alt="" />

                    <div className="mt-6 md:mx-4 md:mt-0">
                        <h2 className="font-serif text-2xl font-medium text-gray-700 ">Exotic Nature</h2>
            
                        <p className="mt-2 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt facilisis nuncLorem ipsum dolor sit...</p>
            
                        <p className="mt-4 italic text-gray-600">November 11, 2021</p>
                    </div>
                    </div>

                    <div className="md:-mx-4 md:flex md:items-center">
                    <img className="object-cover w-full h-56 md:h-48 md:mx-4 md:w-80 shrink-0" src="https://images.unsplash.com/photo-1638790491374-a2affccd8c8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                    <div className="mt-6 md:mx-4 md:mt-0">
                        <h2 className="font-serif text-2xl font-medium text-gray-700 ">It Starts with Soil</h2>
            
                        <p className="mt-2 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt facilisis nuncLorem ipsum dolor sit...</p>
            
                        <p className="mt-4 italic text-gray-600">November 3, 2021</p>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </>
    );
};
export default Home;


