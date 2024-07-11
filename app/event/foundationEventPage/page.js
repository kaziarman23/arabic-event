import React from "react";
import Link from "next/link";
import FoundationComponent from "@/app/components/eventPageComponents/foundationComponent";

function FoundationEventPage() {
  return (
    <>
      <div className="w-full h-auto text-justify">
        <div className="w-full h-28 flex justify-center items-center gap-3 flex-col">
          <h1 className="text-xl">Foundation of Islamic life</h1>
          <p>Guiding the Path to Peace</p>
        </div>

        <div className="w-2/3 h-auto mx-auto my-5 flex justify-center items-center gap-2 flex-col">
          <h1 className="hover:text-green-500">
            The Five Pillars of Islam are fundamental practices in Islam,
            considered to be obligatory acts of worship for all Muslims.They are
            considered obligatory acts of worship for all Muslims.These pillars
            are not seen as belonging to anyone, but rather as foundational
            practices for all Muslims. They guide a Muslim&#39;s life and
            strengthen their faith.
          </h1>
          <p className="hover:text-green-500">
            The ritual obligations of Muslims are called the Five Pillars.They
            are acknowledged and practiced by Muslims throughout the world,
            notwithstanding their disparities. They are viewed as compulsory for
            individuals who genuinely wish to pursue a life like that which
            Islamic prophet Muhammad led. Like other religions, Islam holds
            certain practices to be standard; however, that does not imply that
            all individuals who regard themselves as Muslims necessarily observe
            them. Individual participation can vary depending on the
            individual&#39;s faith. for example, not every individual prays
            every day, keeps the fast, performs the Hajj, or donates extensively
            to charity.
          </p>
          <div className="w-full h-auto">
            <h1 className="hover:text-green-500">
              The Five Pillars of Islam are:
            </h1>
            <ol className="flex flex-col gap-3">
              <li className="mt-3 hover:text-blue-500">
                <Link href="#Shahada">1st. Shahada</Link>
              </li>
              <li className="hover:text-blue-500">
                <Link href="#Salah">2nd. Salah</Link>
              </li>
              <li className="hover:text-blue-500">
                <Link href="#Sawm">3ed. Sawm</Link>
              </li>
              <li className="hover:text-blue-500">
                <Link href="#Hajj">4th. Hajj</Link>
              </li>
              <li className="hover:text-blue-500">
                <Link href="#Zakat">5th. Zakat</Link>
              </li>
            </ol>
          </div>
        </div>

        <div className="w-4/5 h-auto mx-auto my-5 flex justify-center items-center gap-3 flex-col">
          <FoundationComponent />

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

export default FoundationEventPage;
