import React from "react";
import EventPageCards from "../components/eventPageComponents/eventPageCards";

function Event() {
  return (
    <>
      <div className="bg-gray-900 w-full h-auto">
        <div className="w-full h-24  flex justify-center items-center text-2xl">
          <h1 className="hover:text-green-500">
            Explore Events with
            <span className="text-yellow-700"> The Arabic Events</span>
          </h1>
        </div>
        <div className="w-2/3 h-auto mx-auto">
          <EventPageCards />
        </div>
      </div>

      <div className="w-full h-80 text-justify flex justify-center items-center gap-2 flex-col mx-auto mt-16 mb-10">
        <h1 className="text-2xl">The Araib Events</h1>
        <h4 className="ml-10 mr-10 hover:text-green-500">
          Discover the magic of Arabic events with The Araib Events, your
          premier online destination for captivating and culturally rich event
          experiences. Our website is a tribute to the rich heritage and
          traditions of Arabic events, offering a unique blend of modern event
          management tools and ancient Arabic hospitality. Whether you&#39;re
          planning a traditional wedding, a corporate conference, a social
          gathering, or a sporting event, The Araib Events provides a
          comprehensive solution to meet your needs. Our registration and
          ticketing system, coupled with our interactive event pages, offers a
          seamless experience for both organizers and guests. Our team of
          experienced event managers is dedicated to preserving the authenticity
          of Arabic events while incorporating modern elements to create
          unforgettable experiences. Explore the world of Arabic events with The
          Araib Events and let us help you create memories that will last a
          lifetime.
        </h4>
      </div>
    </>
  );
}

export default Event;
