import React from "react";
import leadersData from "@/lib/leadersData";
import Link from "next/link";

function page({ params }) {
  const { id } = params;
  const data = leadersData.leaders.find((leader) => leader.id === parseInt(id));

  if (!data) {
    <div>leader not found!</div>;
  }

  return (
    <>
      <div className="w-2/3 h-auto text-justify mx-auto my-20 flex justify-center items-center flex-col">
        <h1 className="my-10 text-2xl hover:text-red-600">
          This is about {data.name}
        </h1>
        <div className="my-5 w-full h-auto">
          <h2 className="hover:text-red-600">Full Name : {data.name}</h2>
          <h2 className="hover:text-green-500">
            Father Name : {data.father_name}
          </h2>
          <h2 className="hover:text-green-500">
            Date OF Beath : {data.date_of_birth}
          </h2>
          <h2 className="hover:text-green-500">
            Date OF Death : {data.date_of_death}
          </h2>
          <h2 className="hover:text-green-500">Army Led : {data.army_led}</h2>
          <h2 className="hover:text-green-500">
            Win Battles : {data.battles_won}
          </h2>
          <h2 className="hover:text-green-500">
            Lose Battles : {data.battles_lost}
          </h2>
        </div>
        <div className="flex text-justify justify-start items-start gap-2 flex-col">
          <h4 className="hover:text-green-500">
            An artical of {data.name} with some small details.
          </h4>
          <p className="hover:text-green-500">{data.description}</p>
        </div>
      </div>
      <hr />
      <div className="flex justify-center items-center flex-col gap-5 my-10">
        <h1>Explore More things with us on the Event.</h1>
        <div className="flex justify-center items-center gap-3">
          <button className="p-2  bg-blue-500 text-white cursor-pointer rounded-xl hover:text-black hover:bg-red-600">
            <Link href={"/event/leadersPage"}>Previous Page</Link>
          </button>
          <button className="p-2  bg-blue-500 text-white cursor-pointer rounded-xl hover:text-black hover:bg-green-500">
            <Link href={"/contactUs"}>Contact Us</Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default page;
