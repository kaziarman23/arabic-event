import React from "react";
import Link from "next/link";
import BusinessComponent from "@/app/components/eventPageComponents/businessComponent";

function BusinessEventPage() {
  return (
    <>
      <div className="w-full h-auto text-justify">
        <div className="w-full h-28 flex justify-center items-center gap-3 flex-col">
          <h1 className="text-xl">Arabic Buisness Event</h1>
          <p>
            Prosperity in Partnership, Arabic Businesses Uniting for Success
          </p>
        </div>

        <div className="w-2/3 h-auto mx-auto my-5 flex justify-center items-center gap-2 flex-col">
          <div className="flex justify-start items-start gap-2 flex-col my-5">
            <h1 className="hover:text-red-600">Hadis:</h1>
            <h2 className="hover:text-red-600">
              Narrated Abu Huraira: The Prophet (ﷺ) said, A time will come when
              one will not care how one gains one&#39;s money, legally or
              illegally.
            </h2>
            <p className="hover:text-red-600">
              Reference: Sahih al-Bukhari(2059)
            </p>
          </div>
          <p className="hover:text-green-500 my-5">
            Arabic business events are significant occasions that foster
            economic growth and cultural exchange. They encompass a wide range
            of activities, including conferences, exhibitions, and trade shows.
            These events provide a platform for businesses to showcase their
            products and services, network with potential partners, and gain
            insights into the latest industry trends. They also offer
            opportunities for cultural immersion, allowing attendees to
            understand and appreciate the rich Arabic heritage and traditions.
            The organization of these events is often meticulous, reflecting the
            Arabic culture&#39;s emphasis on hospitality and respect. They serve
            as a testament to the region&#39;s economic prowess and its
            commitment to fostering international business relationships.The
            Arabic business events sector is a thriving industry, with the
            region hosting some of the world&#39;s most prestigious business
            gatherings.These events attract a diverse range of participants,
            from local entrepreneurs and international corporations to
            government officials and academic scholars. They offer a platform
            for cross-cultural dialogue, promoting understanding and cooperation
            between different nations and cultures.
          </p>
          <div className="w-full h-auto">
            <h1 className="hover:text-green-500">
              Here are some of the most popular types of business events in the
              Arab World:
            </h1>
            <ol className="flex flex-col gap-3">
              <li className="mt-3 hover:text-blue-500">
                <Link href="#Conferences">
                  1st. Conferences and exhibitions
                </Link>
              </li>
              <li className="hover:text-blue-500">
                <Link href="#Trade">2nd. Trade missions</Link>
              </li>
              <li className="hover:text-blue-500">
                <Link href="#Networking">3ed. Networking events</Link>
              </li>
              <li className="hover:text-blue-500">
                <Link href="#Finance">4th. Finance</Link>
              </li>
              <li className="hover:text-blue-500">
                <Link href="#Tourism">5th. Tourism</Link>
              </li>
            </ol>
          </div>
        </div>

        <div className="w-4/5 h-auto mx-auto my-5 flex justify-center items-center gap-3 flex-col">
          <BusinessComponent />

          <div className="flex justify-center items-center flex-col gap-5">
            <h1>Explore More things with us on the Event.</h1>
            <div className="flex justify-center items-center gap-3">
              <button className="p-2  bg-blue-500 text-white cursor-pointer rounded-xl hover:text-black hover:bg-red-600">
                <Link href={"/event"}>Previous Page</Link>
              </button>
              <button className="p-2  bg-blue-500 text-white cursor-pointer rounded-xl hover:text-black hover:bg-green-500">
                <Link href={"/contactUs"}>Contact Us</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BusinessEventPage;
