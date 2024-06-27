import React from "react";
import pic from "@/public/images/pic.jpg";
import picTwo from "@/public/images/picTwo.jpg";
import Image from "next/image";
import EmblaCarousel from "@/app/components/emblaCarousel";
import artical from "@/public/images/artical.jpg"


function Home() {
    return (
        <>
            <header className="w-full h-10 text-center text-[40px] my-20">
                <h1 className="hover:text-red-500 cursor-not-allowed">
                    السلام عليكم ورحمة الله وبركاته
                </h1>
            </header>
            <div className=" w-1/2 h-[420px] mx-auto my-10 gap-5 flex justify-center items-center">
                <div className="w-1/2 h-[410px] border-solid border-gray-500 border rounded-xl bg-slate-300 opacity-70 text-black flex justify-center items-center flex-col hover:shadow-xl hover:shadow-white cursor-cell">
                    <div className="p-5 overflow-hidden">
                        <Image
                            src={pic}
                            alt="this is image one"
                            quality={100}
                            placeholder="blur"
                            className="rounded-xl hover:shadow-md hover:shadow-black"
                        />
                    </div>
                    <div className="text-center flex justify-center items-center gap-5 flex-col mx-2 my-3">
                        <h3>
                            Say, O Prophet, He is Allah One and Indivisible.
                            Allah the Sustainer needed by all. He has never had
                            offspring, nor was He born. And there is none
                            comparable to Him.
                        </h3>
                        <p>Quran: 112</p>
                    </div>
                </div>
                <div className="w-1/2 h-[410px] border-solid border-gray-500 border rounded-xl bg-slate-300 opacity-70 text-black flex justify-center items-center flex-col hover:shadow-xl hover:shadow-white cursor-cell">
                    <div className="p-5 overflow-hidden">
                        <Image
                            src={picTwo}
                            alt="this is image one"
                            quality={100}
                            placeholder="blur"
                            className="rounded-xl hover:shadow-md hover:shadow-black"
                        />
                    </div>
                    <div className="text-center flex justify-center items-center gap-5 flex-col mx-2 my-3">
                        <h3>
                            The Prophet (ﷺ) said, Facilitate things to people
                            (concerning religious matters), and do not make it
                            hard for them and give them good tidings and do not
                            make them run away (from Islam).
                        </h3>
                        <p>Sahih al-Bukhari: 69</p>
                    </div>
                </div>
            </div>
            <div className="w-1/2 h-96 mx-auto my-10">
                <EmblaCarousel />
            </div>
            <div className="w-full h-96 my-10 bg-orange-500">
                <div className="w-1/2 h-full mx-auto flex justify-center items-center flex-col">
                    <div className="w-full h-full flex justify-between items-center">
                        <div className="w-1/2 h-48 flex justify-center items-center">
                            <Image src={artical} alt="Artical Image" placeholder="blur" quality={100} className="w-80 h-44 rounded-xl"/>
                        </div>
                        <div className="w-1/2 h-48 text-black flex justify-center items-center flex-col gap-2">
                            <h1>The Araib Events</h1>
                            <p className="hover:text-blue-500 cursor-wait">This is what we do...</p>
                        </div>
                    </div>
                    <div className="w-full h-full text-black flex justify-start items-center">
                        <h1>Welcome to our event management website, where we simplify the process of organizing and promoting your events. Our platform offers a range of tools to help you manage guest lists, ticketing, and RSVPs. With our user-friendly interface, you can easily create and customize event pages, set up registration forms, and track attendance. We also provide marketing solutions to help you reach a wider audience and increase event visibility. Our goal is to ensure your events run smoothly, so you can focus on creating memorable experiences for your guests.</h1>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
