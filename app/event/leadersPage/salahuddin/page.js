import React from "react";
import Link from "next/link";

function khalidPage() {
    return (
        <>
            <div className="w-2/3 h-auto mx-auto my-20 flex justify-center items-center flex-col">
                <h1 className="my-10 text-2xl hover:text-red-600">
                    This is about Salahuddin Ayyubi
                </h1>
                <div className="my-5 w-full h-auto">
                    <h2 className="hover:text-red-600">
                        Full Name : Salahuddin Ayyubi
                    </h2>
                    <h2 className="hover:text-green-500">
                        Father Name : Ayyub
                    </h2>
                    <h2 className="hover:text-green-500">
                        Date OF Beath : 592 AD.
                    </h2>
                    <h2 className="hover:text-green-500">
                        Date OF Death : 1193 AD
                    </h2>
                    <h2 className="hover:text-green-500">
                        Army Led : Ayyubid Dynasty
                    </h2>
                    <h2 className="hover:text-green-500">Win Battles : 27</h2>
                    <h2 className="hover:text-green-500">Lose Battles : 4</h2>
                </div>
                <div className="flex text-justify justify-start items-start gap-2 flex-col">
                    <h4 className="hover:text-green-500">
                        An artical of Salahuddin Ayyubi with some small details.
                    </h4>
                    <p className="hover:text-green-500">
                        Salahuddin Ayyubi, also known as Saladin in the West,
                        emerged as a pivotal figure in Islamic history during
                        the 12th century. Born into a Kurdish military family in
                        Tikrit, Iraq, around 1138 AD, he rose through the ranks
                        of the Ayyubid dynasty, established by his father.
                        Witnessing the fragmentation of the Islamic world and
                        the encroachment of the Crusaders who had captured
                        Jerusalem in 1099 AD, Saladin dedicated himself to
                        unifying Muslim forces and reclaiming lost lands.
                        Through strategic alliances, military brilliance, and a
                        reputation for fairness and chivalry, he rose to
                        prominence. In 1171, he abolished the Fatimid Caliphate
                        in Egypt, uniting it under Sunni Islam and bolstering
                        his legitimacy. Victories against Crusader forces
                        followed, and by 1187, Saladin had consolidated Muslim
                        control over much of Syria. The pivotal moment arrived
                        in October 1187, when his well-disciplined army besieged
                        Jerusalem. After a valiant defense, the city fell to
                        Saladin&#39;s forces, marking a turning point in the
                        Crusades. News of Jerusalem&#39;s recapture sent
                        shockwaves through Europe and reignited the flames of
                        religious fervor, leading to the Third Crusade. Though
                        Jerusalem remained under Muslim control, Saladin&#39;s
                        tactical prowess and respect for his Christian
                        adversaries, including King Richard the Lionheart,
                        earned him immense respect. Despite failing to fully
                        expel the Crusaders, Saladin&#39;s legacy remains one of
                        unification, military genius, and religious tolerance.
                        He died in Damascus in 1193 AD, leaving behind a
                        revitalized Islamic world and a lasting impact on the
                        course of history.
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

export default khalidPage;
