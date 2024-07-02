import React from "react";
import Link from "next/link";

function UmarPage() {
    return (
        <>
            <div className="w-2/3 h-auto mx-auto my-20 flex justify-center items-center flex-col">
                <h1 className="my-10 text-2xl hover:text-red-600">
                    This is about Umar ibn Khattab (R.A.)
                </h1>
                <div className="my-5 w-full h-auto">
                    <h2 className="hover:text-red-600">
                        Full Name : Umar ibn Khattab (R.A.)
                    </h2>
                    <h2 className="hover:text-green-500">
                        Father Name : Khattab ibn Nufil
                    </h2>
                    <h2 className="hover:text-green-500">
                        Date OF Beath : 580 AD
                    </h2>
                    <h2 className="hover:text-green-500">
                        Date OF Death : 644 AD
                    </h2>
                    <h2 className="hover:text-green-500">
                        Army Led : Muslim armies during territorial expansion
                    </h2>
                    <h2 className="hover:text-green-500">
                        Win Battles : Significant conquests, including
                        Jerusalem, Specific numbers may vary
                    </h2>
                    <h2 className="hover:text-green-500">Lose Battles : 02</h2>
                </div>
                <div className="flex text-justify justify-start items-start gap-2 flex-col">
                    <h4 className="hover:text-green-500">
                        An artical of Umar ibn Khattab with some small details.
                    </h4>
                    <p className="hover:text-green-500">
                        Umar ibn Khattab (R.A.), a towering figure in Islamic
                        history, was born in Mecca around 584 CE. Initially a
                        staunch opponent of Islam, his conversion in 616 CE
                        marked a turning point for the fledgling faith. Renowned
                        for his strength, intellect, and unwavering principles,
                        Umar became a close confidante and advisor to Prophet
                        Muhammad (PBUH). His fierce loyalty and outspoken nature
                        earned him the title &#34;Al-Farooq&#34; (the
                        Discerner). After the Prophet&#34;s passing in 632 CE,
                        Umar played a pivotal role in uniting the Muslim
                        community and ensuring a smooth transition of
                        leadership. When Caliph Abu Bakr (R.A.) passed away two
                        years later, Umar reluctantly assumed the mantle of
                        Caliphate. His reign, spanning a decade from 634 to 644
                        CE, witnessed a period of phenomenal expansion for the
                        Islamic empire. Umar, a brilliant strategist and
                        administrator, oversaw the conquest of vast territories,
                        including Persia, Syria, Egypt, and parts of North
                        Africa. However, his focus wasn&#34;t solely on military
                        might. He established a robust administrative system,
                        instituted social reforms promoting equality and
                        justice, and emphasized education and infrastructure
                        development. Umar&#34;s deep concern for the well-being
                        of his people was legendary. He famously walked the
                        streets disguised as a commoner to identify and address
                        public grievances. His simple and austere lifestyle set
                        a powerful example for future leaders. Sadly, in 644 CE,
                        Umar was assassinated by a disgruntled Persian slave
                        while leading the dawn prayer. Despite his relatively
                        short reign, Umar ibn Khattab&#34;s legacy remains
                        profound. He is revered for his unwavering faith,
                        exceptional leadership, and commitment to social
                        justice, leaving an indelible mark on the course of
                        Islamic history.
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

export default UmarPage;
