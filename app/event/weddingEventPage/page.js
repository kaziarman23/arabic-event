import React from "react";
import Link from "next/link";
import WeddingComponent from "@/app/components/eventPageComponents/weddingComponent";

function weddingEventPage() {
  return (
    <>
      <div className="w-full h-20 gap-2 flex flex-col justify-center items-center">
        <h1 className="text-xl">Arabic Wedding Event</h1>
        <p>Waiting For A Good Life</p>
      </div>
      <div className="w-2/3 h-auto mx-auto my-10 text-justify">
        <div className="my-10">
          <h1 className="hover:text-red-600">Hadis Narrated Aisha(R.A.):</h1>
          <br />
          <h1 className="hover:text-red-600">
            Allah&#39;s Messenger (ﷺ) said (to me), You have been shown to me
            twice in (my) dreams. A man was carrying you in a silken cloth and
            said to me, This is your wife. I uncovered it and behold, it was
            you. I said to myself, If this dream is from Allah, He will cause it
            to come true.
          </h1>
          <br />
          <p className="hover:text-red-600">
            Reference: Sahih-al-Bukhari (5078).
          </p>
        </div>
        <div>
          <p className="hover:text-green-500">
            Arabic weddings are huge celebrations with tons of loved ones.
            It&#39;s a chance for families to come together and celebrate the
            new couple. Geting ready for a delicious feast with traditional
            Arabic dishes, sweets, and strong coffee.Beautiful traditions from
            the henna night to the wedding ceremony itself, there are many
            unique and beautiful traditions that add meaning to the
            celebration.specially they focused on giving love and blessings.
            Marriages are seen as a union blessed by God, and the ceremonies
            reflect a hope for a happy and fulfilling life together for the
            couple.
          </p>
          <p className="hover:text-green-500">
            This is just a glimpse into the magic of Arabic weddings.
            They&#39;re a sensory explosion, a celebration of family, and a
            heartfelt expression of love and commitment. While every culture has
            its own unique beauty, there&#39;s no denying the special place
            Arabic weddings hold in the world of celebrations. They truly are a
            sight to behold, and an experience that stays with you forever.
          </p>
        </div>
        <div className="my-10">
          <h1 className="hover:text-green-500">
            There are 4 steps of Arabic wedding Events:
          </h1>
          <ol className="flex gap-3 flex-col mt-3">
            <li className="hover:text-blue-600">
              <Link href="#Mahr">step 1. Magsaba</Link>
            </li>
            <li className="hover:text-blue-600">
              <Link href="#Fatiha">step 2. Fatiha</Link>
            </li>
            <li className="hover:text-blue-600">
              <Link href="#Nikah">step 3. Aqdun Nikah</Link>
            </li>
            <li className="hover:text-blue-600">
              <Link href="#Feast">step 4. Walimat al-Aras</Link>
            </li>
          </ol>
        </div>
        <div>
          <WeddingComponent />

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

export default weddingEventPage;
