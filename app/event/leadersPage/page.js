import React from "react";
import Link from "next/link";
import leadersData from "@/lib/leadersData";

function LeadersPage() {

    const datas = leadersData.leaders
    return (
        <>
            <div className="w-full h-auto text-white text-justify">
                <div className="w-full h-28 flex justify-center items-center gap-3 flex-col">
                    <h1 className="text-xl">Arabic Leaders Event</h1>
                    <p>A Legacy of Excellence</p>
                </div>

                <div className="w-2/3 h-auto mx-auto my-5 flex justify-center items-center gap-2 flex-col">
                    <div className="flex justify-start items-start gap-2 flex-col my-5">
                        <h1 className="hover:text-red-600">
                            Hadis Narrated Ibn Abbas:
                        </h1>
                        <h2 className="hover:text-red-600">
                            Allah&#39;s Messenger (ﷺ) said, There is no Hijra
                            (migration) (from Mecca to Medina) after the
                            Conquest (of Mecca), but Jihad and good intention
                            remain and if you are called (by the Muslim ruler)
                            for fighting, go forth immediately.
                        </h2>
                        <p className="hover:text-red-600">
                            Reference: Sahih al-Bukhari(2783)
                        </p>
                    </div>
                    <p className="hover:text-green-500 my-2">
                        Islamic leadership is a multifaceted tapestry, woven
                        from religious scholarship, political authority, and
                        community service. At its core lies the concept of the
                        Caliph, the successor to the Prophet Muhammad (PBUH) who
                        led the early Muslim community. Though the Caliphate as
                        a political entity dissolved centuries ago, the idea of
                        a leader who upholds Islamic law and guides the faithful
                        remains influential. On a more local level, the Imam is
                        a vital figure. Serving as the prayer leader at mosques,
                        Imams can also be scholars who offer religious guidance
                        and interpretations of Islamic law (fiqh). Their
                        teachings and pronouncements can influence the daily
                        lives of their communities. Imams can be found across
                        the spectrum of Islamic thought, from the
                        traditionalists focused on preserving Islamic
                        scholarship to progressive thinkers reinterpreting
                        scripture for the modern world.
                    </p>
                    <p className="hover:text-green-500 my-2">
                        Throughout Islamic history, there have been numerous
                        figures who embodied the ideal of fighting for Allah
                        with unwavering devotion. These leaders weren&#39;t
                        simply warriors; they were driven by a profound faith
                        that transcended worldly concerns.
                    </p>
                    <p className="hover:text-green-500 my-2">
                        Consider Khalid ibn Walid, a strategic genius who earned
                        the title The Sword of Allah for his victories against
                        seemingly insurmountable odds. He wasn&#39;t afraid to
                        take calculated risks, trusting in God will while
                        displaying immense courage.
                    </p>
                    <p className="hover:text-green-500 my-2">
                        Then there&#39;s Salahuddin Ayyubi, the revered Kurdish
                        sultan who liberated Jerusalem from Crusader rule. His
                        piety fueled his military prowess, and his victories
                        were seen as a defense of the Islamic faith. These
                        leaders weren&#39;t bloodthirsty conquerors. They fought
                        what they believed were defensive wars, protecting
                        Muslim communities and upholding Islamic principles.
                        They understood the concept of martyrdom, the idea that
                        sacrificing oneself in Allah&#39;s cause leads to
                        eternal reward.
                    </p>
                    <p className="hover:text-green-500 my-2">
                        It&#39;s important to remember that Islamic history is
                        complex, and the concept of fighting for Allah has been
                        interpreted in various ways. However, these leaders
                        exemplify the courage, faith, and selflessness that have
                        inspired countless Muslims throughout the centuries.
                    </p>

                    <div className="w-full h-auto">
                        <h1 className="hover:text-green-500">
                            Here are some Islamic leaders who are known for
                            their bravery and devotion:
                        </h1>
                        <h3 className="text-yellow-400">
                            (For more details click the names)
                        </h3>
                        <ol className="flex flex-col gap-3">
                            {datas.map((data) => (
                                <li
                                    key={data.id}
                                    className="mt-3 hover:text-blue-500"
                                    title="Click it for more details"
                                >
                                    <Link
                                        href={`/event/leadersPage/${data.id}`}
                                    >
                                        {data.id}. {data.name}
                                    </Link>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
                <hr className="my-10" />
                <div className="w-4/5 h-auto mx-auto my-10 flex justify-center items-center flex-col gap-5">
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
        </>
    );
}

export default LeadersPage;
