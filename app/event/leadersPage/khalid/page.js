import React from "react";
import Link from "next/link";

function khalidPage() {
    return (
        <>
            <div className="w-2/3 h-auto mx-auto my-20 flex justify-center items-center flex-col">
                <h1 className="my-10 text-2xl hover:text-red-600">
                    This is about Khalid ibn al-Walid
                </h1>
                <div className="my-5 w-full h-auto">
                    <h2 className="hover:text-red-600">
                        Full Name : Khalid ibn al-Walid
                    </h2>
                    <h2 className="hover:text-green-500">
                        Father Name : Waleed ibn Mughira
                    </h2>
                    <h2 className="hover:text-green-500">
                        Date OF Beath : 592 AD.
                    </h2>
                    <h2 className="hover:text-green-500">
                        Date OF Death : 642 AD
                    </h2>
                    <h2 className="hover:text-green-500">
                        Army Led : Muslim army during the Rashidun Caliphate
                    </h2>
                    <h2 className="hover:text-green-500">Win Battles : 43</h2>
                    <h2 className="hover:text-green-500">Lose Battles : 00</h2>
                </div>
                <div className="flex text-justify justify-start items-start gap-2 flex-col">
                    <h4 className="hover:text-green-500">
                        An artical of Khalid ibn al-Walid with some small
                        details.
                    </h4>
                    <p className="hover:text-green-500">
                        Khalid ibn al-Walid, also known as &#39;Sayf Allah&#39;
                        or &#39;Sword of God,&#39; was a towering figure in the
                        early Islamic conquests of the 7th century. Initially a
                        fierce opponent of Islam, Khalid led Meccan forces
                        against the Prophet Muhammad in several battles,
                        including Uhud in 625 CE. However, his conversion to
                        Islam in 627 CE proved pivotal. With his exceptional
                        military acumen and tactical brilliance, Khalid became a
                        key commander under Prophet Muhammad and the Rashidun
                        Caliphs. He spearheaded the Ridda Wars, quelling
                        rebellions that threatened the nascent Muslim state. His
                        strategic genius shone in campaigns against the
                        Sassanian Persian Empire, where he achieved decisive
                        victories despite being outnumbered. The conquest of
                        Byzantine Syria stands as a testament to his daring
                        leadership. Khalid&#39;s masterful use of flanking
                        maneuvers, deception, and rapid movement repeatedly
                        outwitted and overpowered larger Byzantine armies.
                        Notably, his victories at battles like Yarmouk and
                        Ullais secured Muslim control over vast swathes of
                        territory, forever altering the political landscape of
                        the Middle East. Despite his undefeated record in
                        battle, some political disputes led to his removal from
                        supreme command. However, his contributions to the early
                        Islamic expansion remain undeniable. Khalid ibn
                        al-Walid&#39;s legacy is one of unparalleled military
                        prowess, strategic innovation, and unwavering dedication
                        to the cause of Islam. His name continues to be revered
                        as a symbol of courage, leadership, and decisive victory
                        in the annals of Islamic history.
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
