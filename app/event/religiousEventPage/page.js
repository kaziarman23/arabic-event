import React from "react";
import Link from "next/link";
import ReligiousComponent from "@/app/components/eventPageComponents/religiousComponent";

function ReligiousEventPage() {
  return (
    <>
      <div className="w-full h-auto">
        <div className="w-full h-28 flex justify-center items-center gap-3 flex-col">
          <h1 className="text-xl">The Religious Event</h1>
          <p>Under the Light of Qibla</p>
        </div>

        <div className="w-2/3 h-auto mx-auto my-5 flex justify-center items-center gap-2 flex-col">
          <h1 className="hover:text-green-500">
            Islam, major world religion promulgated by the Prophet Muhammad in
            Arabia in the 7th century CE. The Arabic term islam, literally
            surrender, illuminates the fundamental religious idea of Islam—that
            the believer (called a Muslim, from the active particle of islam)
            accepts surrender to the will of Allah (in Arabic, Allah: God).
            Allah is viewed as the sole God/creator, sustainer, and restorer of
            the world. The will of Allah, to which human beings must submit, is
            made known through the sacred scriptures, the Quran (often spelled
            Koran in English), which Allah revealed to his messenger, Muhammad.
            In Islam Muhammad is considered the last of a series of prophets
            (including Adam, Noah, Abraham, Moses, Solomon, and Jesus), and his
            message simultaneously consummates and completes the “revelations”
            attributed to earlier prophets.
          </h1>
          <p className="hover:text-green-500">
            The religion of Islam originated in Mecca in 610 CE. Muslims believe
            this is when Muhammad received his first revelation. By the time of
            his death, most of the Arabian Peninsula had converted to Islam.
            Muslim rule expanded outside Arabia under the Rashidun Caliphate and
            the subsequent Umayyad Caliphate ruled from the Iberian Peninsula to
            the Indus Valley. In the Islamic Golden Age, specifically during the
            reign of the Abbasid Caliphate, much of the Muslim world experienced
            a scientific, economic and cultural flourishing. The expansion of
            the Muslim world involved various states and caliphates as well as
            extensive trade and religious conversion as a result of Islamic
            missionary activities (dawah), as well as through conquests.
          </p>
          <div className="w-full h-auto">
            <h1 className="hover:text-green-500">
              Here are some of the most important Islamic religious events
              celebrated worldwide::
            </h1>
            <ol className="flex flex-col gap-3">
              <li className="mt-3 hover:text-blue-500">
                <Link href="#Eid-al-Fitr">1st. Eid-al-Fitr</Link>
              </li>
              <li className="hover:text-blue-500">
                <Link href="#Eid-al-Adha">2nd. Eid-al-Adha</Link>
              </li>
              <li className="hover:text-blue-500">
                <Link href="#Laylat-al-Qadr">3ed. Laylat-al-Qadr </Link>
              </li>
              <li className="hover:text-blue-500">
                <Link href="#Hajj">4th. Hajj</Link>
              </li>
              <li className="hover:text-blue-500">
                <Link href="#Ashura">5th. Ashura</Link>
              </li>
            </ol>
          </div>
        </div>

        <div className="w-4/5 h-auto mx-auto my-5 flex justify-center items-center gap-3 flex-col">
          <ReligiousComponent />

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

export default ReligiousEventPage;
