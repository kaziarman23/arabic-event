import React from "react";
import Link from "next/link";

function ibrahimPage() {
    return (
        <>
            <div className="w-2/3 h-auto mx-auto my-20 flex justify-center items-center flex-col">
                <h1 className="my-10 text-2xl hover:text-red-600">
                    This is about Ibrahim Pasha
                </h1>
                <div className="my-5 w-full h-auto">
                    <h2 className="hover:text-red-600">
                        Full Name : Ibrahim Pasha
                    </h2>
                    <h2 className="hover:text-green-500">
                        Father Name : Mehmed Pasha
                    </h2>
                    <h2 className="hover:text-green-500">
                        Date OF Beath : Unknown
                    </h2>
                    <h2 className="hover:text-green-500">
                        Date OF Death : 1683
                    </h2>
                    <h2 className="hover:text-green-500">
                        Army Led : Ottoman Empire
                    </h2>
                    <h2 className="hover:text-green-500">Win Battles : 20</h2>
                    <h2 className="hover:text-green-500">Lose Battles : 08</h2>
                </div>
                <div className="flex text-justify justify-start items-start gap-2 flex-col">
                    <h4 className="hover:text-green-500">
                        An artical of Ibrahim Pasha with some small details.
                    </h4>
                    <p className="hover:text-green-500">
                        Ibrahim Pasha, a captivating figure shrouded in some
                        mystery, rose to prominence during the Ottoman
                        Empire&#39;s golden age. Though details surrounding his
                        origins remain debated, some accounts suggest he was
                        captured as a child from the Greek town of Parga, while
                        others claim Albanian or Slavic ancestry. Regardless of
                        his birthplace, Ibrahim Pasha&#39;s exceptional talents
                        were recognized early on. Within the walls of the
                        Ottoman palace, he befriended the young Suleiman, who
                        would later become Sultan Suleiman the Magnificent. This
                        friendship blossomed into a close confidante
                        relationship, propelling Ibrahim Pasha through the ranks
                        of the Ottoman power structure. Upon Suleiman&#39;s
                        ascension to the throne in 1520, Ibrahim Pasha&#39;s
                        political career skyrocketed. He was appointed Grand
                        Vizier, the highest-ranking official in the empire, in
                        1523. Ibrahim Pasha proved to be a brilliant strategist
                        and diplomat. He played a pivotal role in expanding the
                        Ottoman Empire&#39;s reach, masterfully maneuvering
                        through complex political landscapes. Victories in
                        Persia and Egypt solidified Ottoman dominance, while
                        Ibrahim Pasha&#39;s cunning negotiations secured vital
                        alliances across Europe. His influence extended beyond
                        the battlefield. He oversaw administrative reforms,
                        streamlined tax collection, and even commissioned the
                        construction of magnificent palaces like the one that
                        still stands in Istanbul today, now housing the Turkish
                        and Islamic Arts Museum. However, Ibrahim Pasha&#39;s
                        meteoric rise also bred suspicion. His growing power and
                        the lavish titles bestowed upon him by the Sultan fueled
                        whispers of ambition and potential betrayal. Tragically,
                        in 1536, these whispers reached a fever pitch.
                        Accusations of treason, fueled by court intrigue and
                        paranoia, led to his execution by order of Sultan
                        Suleiman. Ibrahim Pasha&#39;s legacy remains complex.
                        Hailed as &#39;The Favorite&#39; during his lifetime, he
                        was posthumously dubbed &#39;The Executed.&#39; Despite
                        his tragic demise, his contributions to the Ottoman
                        Empire&#39;s military and administrative prowess are
                        undeniable. Ibrahim Pasha&#39;s story serves as a potent
                        reminder of the fickle nature of power and the
                        ever-present shadows of courtly intrigue within a vast
                        and ambitious empire.
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

export default ibrahimPage;
