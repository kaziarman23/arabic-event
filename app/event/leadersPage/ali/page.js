import React from "react";
import Link from "next/link";

function AliPage() {
    return (
        <>
            <div className="w-2/3 h-auto mx-auto my-20 flex justify-center items-center flex-col">
                <h1 className="my-10 text-2xl hover:text-red-600">
                    This is about Ali ibn Abi Talib (R.A.)
                </h1>
                <div className="my-5 w-full h-auto">
                    <h2 className="hover:text-red-600">
                        Full Name : Ali ibn Abi Talib (R.A.)
                    </h2>
                    <h2 className="hover:text-green-500">
                        Father Name : Abu Talib
                    </h2>
                    <h2 className="hover:text-green-500">
                        Date OF Beath : 600 AD
                    </h2>
                    <h2 className="hover:text-green-500">
                        Date OF Death : 661 AD
                    </h2>
                    <h2 className="hover:text-green-500">
                        Army Led : Muslim armies in internal conflicts
                    </h2>
                    <h2 className="hover:text-green-500">
                        Win Battles : Victories in battles like Battle of the
                        Camel, Specific numbers may vary
                    </h2>
                    <h2 className="hover:text-green-500">Lose Battles : 3</h2>
                </div>
                <div className="flex text-justify justify-start items-start gap-2 flex-col">
                    <h4 className="hover:text-green-500">
                        An artical of Umar ibn Khattab with some small details.
                    </h4>
                    <p className="hover:text-green-500">
                        Ali ibn Abi Talib, a pivotal figure in Islamic history,
                        was born around 600 CE in Mecca to a prominent clan
                        within the Quraysh tribe. Raised by his cousin, the
                        Prophet Muhammad (PBUH), Ali embraced Islam at a young
                        age, becoming one of the first converts and
                        Muhammad&#39;s closest confidant. His unwavering loyalty
                        and exceptional bravery earned him the nickname
                        &#39;Lion of God.&#39; Throughout the early years of
                        Islam, Ali fiercely defended the fledgling Muslim
                        community against persecution and violence. He played a
                        crucial role in the migration to Medina (Hijra) and
                        participated valiantly in all but one of the
                        Prophet&#39;s battles, showcasing his remarkable combat
                        skills and strategic mind. Beyond his military prowess,
                        Ali was a scholar, absorbing vast knowledge from the
                        Prophet and possessing a deep understanding of Islamic
                        principles. After the Prophet&#39;s passing in 632 CE, a
                        period of political and ideological strife emerged. Ali,
                        revered by many as the rightful successor, eventually
                        assumed the mantle of Caliphate in 656 CE. His reign,
                        however, was marked by internal conflicts arising from
                        differing views on leadership. Despite his efforts to
                        unite the Muslim community, Ali was assassinated in 661
                        CE. Venerated by Shia Muslims as the first Imam,
                        divinely chosen successor to the Prophet, Ali is a
                        central figure in Shia theology. Sunni Muslims, on the
                        other hand, hold him in high esteem for his unwavering
                        dedication to Islam, his knowledge, and his courage.
                        Ali&#39;s legacy transcends his military and political
                        contributions. He is remembered as a source of wisdom, a
                        champion of justice, and a symbol of unwavering loyalty
                        a figure who continues to inspire and influence Muslims
                        of all denominations.
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

export default AliPage;
