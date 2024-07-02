import React from "react";
import Link from "next/link";

function UthmanPage() {
    return (
        <>
            <div className="w-2/3 h-auto mx-auto my-20 flex justify-center items-center flex-col">
                <h1 className="my-10 text-2xl hover:text-red-600">
                    This is about Uthman ibn Affan (R.A.)
                </h1>
                <div className="my-5 w-full h-auto">
                    <h2 className="hover:text-red-600">
                        Full Name : Uthman ibn Affan (R.A.)
                    </h2>
                    <h2 className="hover:text-green-500">
                        Father Name : Affan ibn Abi Al-Haas
                    </h2>
                    <h2 className="hover:text-green-500">
                        Date OF Beath : 573 AD OR 576 AD
                    </h2>
                    <h2 className="hover:text-green-500">
                        Date OF Death : 656 AD
                    </h2>
                    <h2 className="hover:text-green-500">
                        Army Led : Continuation of Muslim conquests
                    </h2>
                    <h2 className="hover:text-green-500">
                        Win Battles : Expansion of Islamic territory, Specific
                        numbers may vary
                    </h2>
                    <h2 className="hover:text-green-500">
                        Lose Battles : Unknown
                    </h2>
                </div>
                <div className="flex text-justify justify-start items-start gap-2 flex-col">
                    <h4 className="hover:text-green-500">
                        An artical of Umar ibn Khattab with some small details.
                    </h4>
                    <p className="hover:text-green-500">
                        Uthman ibn Affan (R.A.), a prominent companion of the
                        Prophet Muhammad (PBUH), played a pivotal role in
                        shaping the early Islamic community. Born into a wealthy
                        and influential family in Mecca, Uthman was known for
                        his generosity and piety. He embraced Islam early on and
                        remained steadfast in his faith even during times of
                        persecution. His unwavering loyalty earned him the honor
                        of being one of the few literate companions of the
                        Prophet, and he played a crucial role in safeguarding
                        the nascent religion&#39;s teachings. Uthman&#39;s
                        devotion extended to his personal life as well. He was
                        twice married to daughters of the Prophet, Ruqayyah and
                        Umm Kulthum, earning him the title &#39;Dhu
                        al-Nurayn,&#39; meaning &#39;Possessor of Two
                        Lights.&#39; Following the Prophet&#39;s passing in 632
                        CE, Uthman actively participated in the caliphate&#39;s
                        expansion during the reign of Caliphs Abu Bakr (R.A.)
                        and Umar ibn Khattab (R.A.). However, his greatest
                        contribution came during his own caliphate, which lasted
                        from 644 to 656 CE. Recognizing the growing diversity of
                        dialects and potential for Quranic recitation errors,
                        Uthman undertook a monumental task: the standardization
                        of the Quran. He assembled a committee of leading
                        companions well-versed in the Quranic text and
                        commissioned the creation of a single, authoritative
                        copy based on the dialect of the Quraysh tribe in Mecca,
                        the dialect used during the Prophet&#39;s lifetime. This
                        standardized version, known as the Uthmanic codex,
                        remains the basis for the Quran recited by Muslims
                        worldwide to this day. Despite his accomplishments,
                        Uthman&#39;s reign was marked by increasing political
                        tensions within the Muslim community. These tensions
                        culminated in his assassination in 656 CE, marking a
                        turning point in Islamic history. Though his caliphate
                        ended in tragedy, Uthman&#39;s legacy lives on through
                        the standardized Quran, a testament to his dedication to
                        preserving the purity of Islam&#39;s core text.
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

export default UthmanPage;
