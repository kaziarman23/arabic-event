import Image from "next/image";
import React from "react";
import Link from "next/link";
import carouselOne from "@/public/images/carouselOne.jpg";
import carouselTwo from "@/public/images/carouselTwo.jpg";
import carouselThree from "@/public/images/carouselThree.jpg";
import carouselFour from "@/public/images/carouselFour.jpg";
import carouselFive from "@/public/images/carouselFive.jpg";

function FoundationEventPage() {
    return (
        <>
            <div className="w-full h-auto">
                <div className="w-full h-28 flex justify-center items-center gap-3 flex-col">
                    <h1 className="text-xl">Foundation of Islamic life</h1>
                    <p>Drive into the peace</p>
                </div>

                <div className="w-2/3 h-auto mx-auto my-5 flex justify-center items-center gap-2 flex-col">
                    <h1 className="hover:text-green-500">
                        The Five Pillars of Islam are fundamental practices in
                        Islam, considered to be obligatory acts of worship for
                        all Muslims.They are considered obligatory acts of
                        worship for all Muslims.These pillars are not seen as
                        belonging to anyone, but rather as foundational
                        practices for all Muslims. They guide a Muslim&#39;s
                        life and strengthen their faith.
                    </h1>
                    <p className="hover:text-green-500">
                        The ritual obligations of Muslims are called the Five
                        Pillars.They are acknowledged and practiced by Muslims
                        throughout the world, notwithstanding their disparities.
                        They are viewed as compulsory for individuals who
                        genuinely wish to pursue a life like that which Islamic
                        prophet Muhammad led. Like other religions, Islam holds
                        certain practices to be standard; however, that does not
                        imply that all individuals who regard themselves as
                        Muslims necessarily observe them. Individual
                        participation can vary depending on the individual&#39;s
                        faith. for example, not every individual prays every
                        day, keeps the fast, performs the Hajj, or donates
                        extensively to charity.
                    </p>
                    <div className="w-full h-auto">
                        <h1 className="hover:text-green-500">
                            The Five Pillars of Islam are:
                        </h1>
                        <ol className="flex flex-col gap-3">
                            <li className="mt-3 hover:text-blue-500">
                                <Link href="#Shahada">1st. Shahada</Link>
                            </li>
                            <li className="hover:text-blue-500">
                                <Link href="#Salah">2nd. Salah</Link>
                            </li>
                            <li className="hover:text-blue-500">
                                <Link href="#Sawm">3ed. Sawm</Link>
                            </li>
                            <li className="hover:text-blue-500">
                                <Link href="#Hajj">4th. Hajj</Link>
                            </li>
                            <li className="hover:text-blue-500">
                                <Link href="#Zakat">5th. Zakat</Link>
                            </li>
                        </ol>
                    </div>
                </div>

                <div className="w-4/5 h-auto mx-auto my-5 flex justify-center items-center gap-3 flex-col">
                    <div
                        id="Shahada"
                        className="flex justify-center items-center gap-3 flex-col my-5"
                    >
                        <Image
                            src={carouselOne}
                            alt="Declaration of Faith"
                            placeholder="blur"
                            className="w-3/5 h-96"
                        />
                        <h1>Shahada (Declaration of Faith)</h1>
                        <h2 className="hover:text-red-600">
                            This is the central belief of Islam, expressed in
                            the phrase There is no god but Allah(God) and
                            Muhammad is the Messenger of God. Saying this with
                            conviction is how one becomes a Muslim.
                        </h2>
                        <hr className="w-full" />
                    </div>

                    <div
                        id="Salah"
                        className="flex justify-center items-center gap-3 flex-col my-5"
                    >
                        <Image src={carouselTwo} alt="Prayer" placeholder="blur" className="w-3/5 h-96"/>
                        <h1>Salah (Prayer)</h1>
                        <h2 className="hover:text-red-600">
                            Muslims perform ritual prayers five times a day
                            facing the Kaaba in Mecca. These prayers serve as a
                            direct connection between a believer and God.
                        </h2>
                        <hr className="w-full" />
                    </div>

                    <div
                        id="Sawm"
                        className="flex justify-center items-center gap-3 flex-col my-5"
                    >
                        <Image src={carouselThree} alt="Fasting" placeholder="blur" className="w-3/5 h-96"/>
                        <h1>Sawm (Fasting)</h1>
                        <h2 className="hover:text-red-600">
                            During the holy month of Ramadan, Muslims abstain
                            from food, drink, and other indulgences from dawn to
                            dusk. Fasting teaches self-discipline, empathy for
                            the less fortunate, and strengthens connection with
                            God.
                        </h2>
                        <hr className="w-full" />
                    </div>

                    <div
                        id="Hajj"
                        className="flex justify-center items-center gap-3 flex-col my-5"
                    >
                        <Image src={carouselFour} alt="Pilgrimage" placeholder="blur" className="w-3/5 h-96"/>
                        <h1>Hajj (Pilgrimage)</h1>
                        <h2 className="hover:text-red-600">
                            {" "}
                            If they are able-bodied and can afford it, Muslims
                            are expected to undertake the pilgrimage to Mecca at
                            least once in their lifetime. It&#39;s a spiritual
                            journey that retraces the steps of Prophet Abraham
                            and emphasizes the equality of all believers before
                            God.
                        </h2>
                        <hr className="w-full" />
                    </div>

                    <div
                        id="Zakat"
                        className="flex justify-center items-center gap-3 flex-col my-5"
                    >
                        <Image src={carouselFive} alt="Almsgiving" placeholder="blur" className="w-3/5 h-96"/>
                        <h1>Zakat (Almsgiving)</h1>
                        <h2 className="hover:text-red-600">
                            This is the act of giving a specific portion of
                            one&#39;s wealth to the poor and needy. It&#39;s a
                            form of charity that purifies wealth and promotes
                            social responsibility.
                        </h2>
                        <hr className="w-full" />
                    </div>

                    <div className="flex justify-center items-center flex-col gap-5">
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
            </div>
        </>
    );
}

export default FoundationEventPage;
