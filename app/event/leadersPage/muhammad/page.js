import React from "react";
import Link from "next/link";

function MuhammadPage() {
    return (
        <>
            <div className="w-2/3 h-auto mx-auto my-20 flex justify-center items-center flex-col">
                <h1 className="my-10 text-2xl hover:text-red-600">
                    This is about Prophet Muhammad (PBUH)
                </h1>
                <div className="my-5 w-full h-auto">
                    <h2 className="hover:text-red-600">
                        Full Name : Prophet Muhammad (PBUH)
                    </h2>
                    <h2 className="hover:text-green-500">
                        Father Name : Abdullah
                    </h2>
                    <h2 className="hover:text-green-500">
                        Date OF Beath : 570 AD
                    </h2>
                    <h2 className="hover:text-green-500">
                        Date OF Death : 632 AD
                    </h2>
                    <h2 className="hover:text-green-500">
                        Army Led : Muslim community in Medina
                    </h2>
                    <h2 className="hover:text-green-500">
                        Win Battles : 23 (Battles are not the primary focus of
                        his leadership)
                    </h2>
                    <h2 className="hover:text-green-500">Lose Battles : 00</h2>
                </div>
                <div className="flex text-justify justify-start items-start gap-2 flex-col">
                    <h4 className="hover:text-green-500">
                        An artical of Prophet Muhammad with some small details.
                    </h4>
                    <p className="hover:text-green-500">
                        Prophet Muhammad, peace be upon him, was born in Mecca
                        around 570 CE into a society steeped in tribal
                        traditions and idol worship. Considered a man of
                        exceptional character and integrity, he received the
                        first Quranic revelation at the age of 40 in a cave near
                        Mecca. This marked the beginning of his mission as the
                        final messenger of God, preaching monotheism, social
                        justice, and compassion for the poor and vulnerable.
                        Facing persecution and hostility from the ruling elite
                        of Mecca, Prophet Muhammad and his followers migrated to
                        Medina in 622 CE, an event known as the Hijra, which
                        marks the beginning of the Islamic calendar. In Medina,
                        he established a strong Muslim community and led them in
                        defending themselves against attacks from Mecca. Through
                        strategic alliances and military victories, Prophet
                        Muhammad gradually gained influence and respect. In 630
                        CE, he led a bloodless conquest of Mecca, marking a
                        turning point in the spread of Islam. Over the next few
                        years, he continued to consolidate Muslim power and
                        establish clear guidelines for Islamic practice. Prophet
                        Muhammad&#39;s final pilgrimage to Mecca in 632 CE
                        served as a farewell address, where he delivered
                        important sermons and ensured the peaceful continuation
                        of the Muslim community. Shortly after returning to
                        Medina, he fell ill and passed away on June 8th, 632 CE,
                        leaving behind a legacy of faith, social reform, and a
                        rapidly growing religion that would shape the course of
                        history.{" "}
                    </p>
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

export default MuhammadPage;
