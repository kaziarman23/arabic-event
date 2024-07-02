import React from "react";
import Link from "next/link";

function BakrPage() {
    return (
        <>
            <div className="w-2/3 h-auto mx-auto my-20 flex justify-center items-center flex-col">
                <h1 className="my-10 text-2xl hover:text-red-600">
                    This is about Abu Bakr (R.A.)
                </h1>
                <div className="my-5 w-full h-auto">
                    <h2 className="hover:text-red-600">
                        Full Name : Abu Bakr (R.A.)
                    </h2>
                    <h2 className="hover:text-green-500">
                        Father Name : Abu Quhafah
                    </h2>
                    <h2 className="hover:text-green-500">
                        Date OF Beath : 573 AD
                    </h2>
                    <h2 className="hover:text-green-500">
                        Date OF Death : 634 AD
                    </h2>
                    <h2 className="hover:text-green-500">
                        Army Led : Muslim armies during the Ridda Wars
                    </h2>
                    <h2 className="hover:text-green-500">
                        Win Battles : Multiple victories against rebellious
                        tribes, Specific numbers may vary.
                    </h2>
                    <h2 className="hover:text-green-500">
                        Lose Battles : Unknown
                    </h2>
                </div>
                <div className="flex text-justify justify-start items-start gap-2 flex-col">
                    <h4 className="hover:text-green-500">
                        An artical of Abu Bakr (R.A.) with some small details.
                    </h4>
                    <p className="hover:text-green-500">
                        Abu Bakr, a close confidant and advisor to Prophet
                        Muhammad (PBUH), played a pivotal role in the early
                        establishment of Islam. Born in Mecca around 573 CE, Abu
                        Bakr was a successful merchant known for his integrity
                        and trustworthiness, earning him the nickname
                        &#34;as-Siddiq,&#34; meaning &#34;the truthful.&#34; He
                        became one of the very first converts to Islam, readily
                        accepting Prophet Muhammad&#34;s message and fiercely
                        defending him against persecution. His unwavering faith
                        and financial resources proved invaluable in supporting
                        the fledgling Muslim community. Abu Bakr accompanied
                        Prophet Muhammad on the historic Hijra migration to
                        Medina in 622 CE, a testament to their close bond.
                        Throughout the Prophet&#34;s lifetime, Abu Bakr served
                        as a loyal companion, advisor, and military strategist.
                        He famously accompanied Prophet Muhammad on the journey
                        to the Cave of Thawr, a pivotal moment during the Meccan
                        persecution. Following Prophet Muhammad&#34;s passing in
                        632 CE, the Muslim community faced a leadership crisis.
                        Through his wisdom, diplomacy, and unwavering faith, Abu
                        Bakr emerged as the first Caliph, uniting the Muslims
                        and ensuring a smooth transition of leadership. His
                        reign, though brief lasting only two years until his
                        death in 634 CE, was marked by decisive action. He
                        quelled rebellions threatening the nascent Islamic
                        state, a period known as the Ridda Wars. He also played
                        a crucial role in compiling and preserving the Quran,
                        ensuring the integrity of the sacred text for
                        generations to come. Abu Bakr&#34;s legacy extends
                        beyond his leadership. His unwavering faith, unwavering
                        support for Prophet Muhammad, and decisive actions
                        during a critical juncture in Islamic history solidified
                        his place as one of the most important figures in the
                        religion&#34;s development.
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

export default BakrPage;
