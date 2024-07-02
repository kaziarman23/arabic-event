import React from "react";
import Link from "next/link";

function mehmedPage() {
    return (
        <>
            <div className="w-2/3 h-auto mx-auto my-20 flex justify-center items-center flex-col">
                <h1 className="my-10 text-2xl hover:text-red-600">
                    This is about Sultan Mehmed II
                </h1>
                <div className="my-5 w-full h-auto">
                    <h2 className="hover:text-red-600">
                        Full Name : Sultan Mehmed II
                    </h2>
                    <h2 className="hover:text-green-500">
                        Father Name : Murad II
                    </h2>
                    <h2 className="hover:text-green-500">
                        Date OF Beath : 1432 AD
                    </h2>
                    <h2 className="hover:text-green-500">
                        Date OF Death : 1481 AD
                    </h2>
                    <h2 className="hover:text-green-500">
                        Army Led : Ottoman Empire
                    </h2>
                    <h2 className="hover:text-green-500">Win Battles : 23</h2>
                    <h2 className="hover:text-green-500">Lose Battles : 02</h2>
                </div>
                <div className="flex text-justify justify-start items-start gap-2 flex-col">
                    <h4 className="hover:text-green-500">
                        An artical of Sultan Mehmed II with some small details.
                    </h4>
                    <p className="hover:text-green-500">
                        Sultan Mehmed II, also known as Mehmed the Conqueror,
                        cast a long shadow over history. Born in 1432, he
                        ascended the Ottoman throne twice, first for a short
                        period in his teens and then again in his early
                        twenties. During his second reign, which lasted from
                        1451 until his death in 1481, he transformed the Ottoman
                        Empire from a regional power into a formidable force on
                        the world stage. His most defining achievement was
                        undoubtedly the conquest of Constantinople in 1453.
                        After a grueling siege that lasted nearly two months,
                        Mehmed&#39;s innovative use of cannons breached the city
                        walls, leading to its fall and the symbolic end of the
                        Byzantine Empire. This victory not only secured Ottoman
                        control over the strategically important Bosphorus
                        Strait but also established Istanbul, the former
                        Constantinople, as the new capital of the empire. Mehmed
                        wasn&#39;t just a military leader; he was also a skilled
                        administrator and patron of the arts and sciences. He
                        implemented legal reforms, encouraged the construction
                        of grand mosques and public buildings, and fostered a
                        vibrant intellectual environment. He was a complex
                        figure, admired for his strategic brilliance and
                        ruthlessness in war, but also criticized for his
                        occasional brutality. Despite the controversy
                        surrounding his methods, Sultan Mehmed II&#39;s reign
                        ushered in a new era of Ottoman dominance and cultural
                        flourishing that left an enduring mark on the world.
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

export default mehmedPage;
