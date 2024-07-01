import Image from "next/image";
import React from "react";
import wedding from "@/public/images/WeddingPhotoThree.jpg";
import foundation from "@/public/images/foundationPhoto.jpg";
import commander from "@/public/images/commanderPhoto.jpg";
import religious from "@/public/images/religiousEvent.jpg";
import art from "@/public/images/artPhoto.jpg";
import business from "@/public/images/businessPhoto.jpg";
import Link from "next/link";

const eventsData = [
    {
        id: 1,
        img: wedding,
        pageName: "weddingEventPage",
        title: "Arabic Wedding Events",
        message: "More Details...",
    },
    {
        id: 2,
        img: foundation,
        pageName: "foundationEventPage",
        title: "Foundation of Islamic life",
        message: "More Details...",
    },
    {
        id: 3,
        img: commander,
        pageName: "leadersPage",
        title: "Islamic Top Leaders",
        message: "More Details...",
    },
    {
        id: 4,
        img: religious,
        pageName: "religiousEventPage",
        title: "Arabic Religious Events",
        message: "More Details...",
    },
    {
        id: 5,
        img: art,
        pageName: "artEventPage",
        title: "Arabic Art Exhibitions",
        message: "More Details...",
    },
    {
        id: 6,
        img: business,
        pageName: "businessEventPage",
        title: "Arabic Business Events",
        message: "More Details...",
    },
];

function Event() {
    return (
        <>
            <div className="w-full h-80 text-justify flex justify-center items-center gap-2 flex-col mx-auto my-10">
                <h1>The Araib Events</h1>
                <h4 className="ml-10 mr-10 hover:text-green-500">
                    Discover the magic of Arabic events with The Araib Events,
                    your premier online destination for captivating and
                    culturally rich event experiences. Our website is a tribute
                    to the rich heritage and traditions of Arabic events,
                    offering a unique blend of modern event management tools and
                    ancient Arabic hospitality. Whether you&#39;re planning a
                    traditional wedding, a corporate conference, a social
                    gathering, or a sporting event, The Araib Events provides a
                    comprehensive solution to meet your needs. Our registration
                    and ticketing system, coupled with our interactive event
                    pages, offers a seamless experience for both organizers and
                    guests. Our team of experienced event managers is dedicated
                    to preserving the authenticity of Arabic events while
                    incorporating modern elements to create unforgettable
                    experiences. Explore the world of Arabic events with The
                    Araib Events and let us help you create memories that will
                    last a lifetime.
                </h4>
            </div>
            <div className="wrapper bg-gray-900 w-full h-auto">
                <div className="w-full h-24 my-5 flex justify-center items-center text-2xl">
                    <h1 className="hover:text-green-500">
                        Explore Events with{" "}
                        <span className="text-yellow-700">
                            The Arabic Events
                        </span>
                    </h1>
                </div>
                <div className="w-2/3 h-auto mx-auto">
                    <div className="w-full h-auto grid grid-rows-2 grid-cols-3 gap-2 place-items-center overflow-hidden">
                        {eventsData.map((event) => (
                            <div
                                key={event.id}
                                className="w-60 h-60 bg-black text-white rounded-xl border-red-600 border my-10 hover:drop-shadow-xl hover:shadow-yellow-500"
                            >
                                <Image
                                    src={event.img}
                                    alt={event.title}
                                    className="p-2"
                                />
                                <h1 className="mx-5 my-2">{event.title}</h1>
                                <p className="mx-5 text-blue-500 hover:text-blue-300 cursor-pointer">
                                  <Link href={`/event/${event.pageName}`}>
                                    {event.message}
                                  </Link>
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Event;
