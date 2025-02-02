import React from "react";
import Link from "next/link";
import ArtComponent from "@/app/components/eventPageComponents/artComponent";

function ArtEventPage() {
  return (
    <>
      <div className="w-full h-auto text-white text-justify">
        <div className="w-full h-28 flex justify-center items-center gap-3 flex-col">
          <h1 className="text-xl">Arabic Art Exhibitions Event</h1>
          <p>A Journey Through Arabic Art Exhibitions</p>
        </div>

        <div className="w-2/3 h-auto mx-auto my-5 flex justify-center items-center gap-2 flex-col">
          <h1 className="hover:text-green-500">
            Arabic art exhibitions are a captivating blend of tradition and
            innovation, offering a unique window into the rich and diverse world
            of Arabic culture. These events are a celebration of the
            region&#39;s artistic heritage, showcasing a wide range of art
            forms, from traditional calligraphy and painting to contemporary
            installations and multimedia creations. They provide a platform for
            both established and emerging artists to showcase their work,
            fostering a vibrant and dynamic art scene.
          </h1>

          <p className="hover:text-green-500 my-5">
            The organization of Arabic art exhibitions is often meticulous,
            reflecting the region&#39;s appreciation for detail and aesthetics.
            They are not just about displaying art, but also about creating an
            immersive experience that engages all the senses. The exhibitions
            often feature interactive elements, workshops, and talks, offering
            visitors an opportunity to learn, engage, and interact with the art
            and the artists. Arabic art exhibitions also play a crucial role in
            promoting cultural exchange and dialogue. They attract a diverse
            range of visitors, from art enthusiasts and collectors to scholars
            and diplomats. These events provide a platform for cross-cultural
            understanding, promoting tolerance and respect among different
            nations and cultures.
          </p>
          <div className="w-full h-auto">
            <h1 className="hover:text-green-500">
              Here are some of the artistic mediums you&#39;re likely to
              encounter:
            </h1>
            <ol className="flex flex-col gap-3">
              <li className="mt-3 hover:text-blue-500">
                <Link href="#Painting">1st. Painting</Link>
              </li>
              <li className="hover:text-blue-500">
                <Link href="#Calligraphy">2nd. Calligraphy</Link>
              </li>
              <li className="hover:text-blue-500">
                <Link href="#Textiles">3ed. Textiles</Link>
              </li>
              <li className="hover:text-blue-500">
                <Link href="#Sculpture">4th. Sculpture</Link>
              </li>
              <li className="hover:text-blue-500">
                <Link href="#Architecture">5th. Architecture</Link>
              </li>
            </ol>
          </div>
        </div>

        <div className="w-4/5 h-auto mx-auto my-5 flex justify-center items-center gap-3 flex-col">
          <ArtComponent />

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

export default ArtEventPage;
