import React from "react";
import Link from "next/link";

function qasimPage() {
    return (
        <>
            <div className="w-2/3 h-auto mx-auto my-20 flex justify-center items-center flex-col">
                <h1 className="my-10 text-2xl hover:text-red-600">
                    This is about Muhammad ibn Qasim
                </h1>
                <div className="my-5 w-full h-auto">
                    <h2 className="hover:text-red-600">
                        Full Name : Muhammad ibn Qasim
                    </h2>
                    <h2 className="hover:text-green-500">
                        Father Name : Qasim ibn Muhammad ibn Abi Waqas
                    </h2>
                    <h2 className="hover:text-green-500">
                        Date OF Beath : 695 AD.
                    </h2>
                    <h2 className="hover:text-green-500">
                        Date OF Death : 715 AD
                    </h2>
                    <h2 className="hover:text-green-500">
                        Army Led : Umayyad Caliphate
                    </h2>
                    <h2 className="hover:text-green-500">Win Battles : 08</h2>
                    <h2 className="hover:text-green-500">Lose Battles : 00</h2>
                </div>
                <div className="flex text-justify justify-start items-start gap-2 flex-col">
                    <h4 className="hover:text-green-500">
                        An artical of Muhammad ibn Qasim with some small
                        details.
                    </h4>
                    <p className="hover:text-green-500">
                        Muhammad ibn Qasim, a young and ambitious military
                        commander who lived from 695 to 715 CE, played a pivotal
                        role in ushering in a new era in the Indian
                        subcontinent. Rising through the ranks of the Umayyad
                        Caliphate, he found himself entrusted with a critical
                        mission: leading an expedition into the Sindh region
                        (present-day Pakistan) in 712 CE. This pivotal event
                        marked the first successful Muslim conquest of a Hindu
                        kingdom in India. Prior to the conquest, Sindh was ruled
                        by Raja Dahir, whose alleged mistreatment of Muslim
                        subjects living within his domain served as the impetus
                        for the Umayyad intervention. Qasim, known for his
                        strategic acumen and tactical brilliance, meticulously
                        planned the invasion. He secured naval supremacy in the
                        Arabian Sea, ensuring a steady stream of reinforcements
                        and supplies. His meticulously trained army, equipped
                        with advanced siege weaponry, faced fierce resistance
                        from Raja Dahir&#39;s forces. However, Qasim&#39;s
                        decisive victories at key battles like Debal and Aror
                        ultimately led to the capture of major cities and the
                        eventual fall of the Hindu kingdom. Despite his role as
                        a conqueror, Qasim is also remembered for his relatively
                        humane treatment of the defeated populace. He ensured
                        the safety of civilians, particularly women and
                        children, and established a system of fair taxation. He
                        encouraged religious tolerance and even employed local
                        administrators familiar with the region&#39;s customs
                        and traditions. However, the long-term impact of the
                        conquest was the gradual spread of Islam within Sindh.
                        Muhammad ibn Qasim&#39;s legacy remains a subject of
                        debate, with some viewing him as a ruthless conqueror
                        and others as a skilled military leader who laid the
                        groundwork for centuries of Muslim influence in the
                        Indian subcontinent.
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

export default qasimPage;
