import Image from "next/image";
import React from "react";
import Link from "next/link";
import weddingPhotoTwo from "@/public/images/weddingPhotoTwo.jpg";
import weddingPhotoThree from "@/public/images/weddingPhotoThree.jpg";
import weddingPhotoFour from "@/public/images/weddingPhotoFour.jpg";
import weddingPhoto from "@/public/images/weddingPhoto.jpg";

function weddingEventPage() {
    return (
        <>
            <div className="w-full h-20 gap-2 flex flex-col justify-center items-center">
                <h1 className="text-xl">Arabic Wedding Event</h1>
                <p>Waiting For A Good Life</p>
            </div>
            <div className="w-2/3 h-auto mx-auto my-10 text-justify">
                <div className="my-10">
                    <h1 className="hover:text-red-600">
                        Hadis Narrated Aisha(R.A.):{" "}
                    </h1>
                    <br />
                    <h1 className="hover:text-red-600">
                        Allah&#39;s Messenger (ﷺ) said (to me), You have been
                        shown to me twice in (my) dreams. A man was carrying you
                        in a silken cloth and said to me, This is your wife. I
                        uncovered it and behold, it was you. I said to myself,
                        If this dream is from Allah, He will cause it to come
                        true.
                    </h1>
                    <br />
                    <p className="hover:text-red-600">
                        Reference: Sahih-al-Bukhari (5078).
                    </p>
                </div>
                <div>
                    <p className="hover:text-green-500">
                        Arabic weddings are huge celebrations with tons of loved
                        ones. It&#39;s a chance for families to come together
                        and celebrate the new couple. Geting ready for a
                        delicious feast with traditional Arabic dishes, sweets,
                        and strong coffee.Beautiful traditions from the henna
                        night to the wedding ceremony itself, there are many
                        unique and beautiful traditions that add meaning to the
                        celebration.specially they focused on giving love and
                        blessings. Marriages are seen as a union blessed by God,
                        and the ceremonies reflect a hope for a happy and
                        fulfilling life together for the couple.
                    </p>
                    <p className="hover:text-green-500">
                        This is just a glimpse into the magic of Arabic
                        weddings. They&#39;re a sensory explosion, a celebration
                        of family, and a heartfelt expression of love and
                        commitment. While every culture has its own unique
                        beauty, there&#39;s no denying the special place Arabic
                        weddings hold in the world of celebrations. They truly
                        are a sight to behold, and an experience that stays with
                        you forever.
                    </p>
                </div>
                <div className="my-10">
                    <h1>There are 4 steps of Arabic wedding Events:</h1>
                    <ol className="flex gap-3 flex-col mt-3">
                        <li className="hover:text-blue-600">
                            <Link href="#Mahr">step 1. Magsaba</Link>
                        </li>
                        <li className="hover:text-blue-600">
                            <Link href="#Fatiha">step 2. Fatiha</Link>
                        </li>
                        <li className="hover:text-blue-600">
                            <Link href="#Nikah">step 3. Aqdun Nikah</Link>
                        </li>
                        <li className="hover:text-blue-600">
                            <Link href="#Feast">step 4. Walimat al-Aras</Link>
                        </li>
                    </ol>
                </div>
                <div>
                    <div
                        id="Mahr"
                        className="flex justify-center items-center flex-col gap-5 my-5"
                    >
                        <Image
                            src={weddingPhoto}
                            alt="Wedding Photo for Mahr"
                            placeholder="blur"
                            className="rounded-xl"
                        />
                        <h1 className="text-2xl hover:text-green-500">
                            Magsaba (Mahr)
                        </h1>

                        <br />
                        <div>
                            <h1 className="hover:text-green-500">
                                The groom presents the bride with a dowry,
                                symbolizing his commitment to providing for her.
                                This can include money, jewelry, or other
                                valuables.
                            </h1>
                            <br />
                            <h2 className="hover:text-red-600">
                                Hadith: A woman came to the Prophet and he said:
                                Who will marry her ? A man said: I will. The
                                Prophet said: Give her something, even if it is
                                an iron ring. He said: I do not have one. He
                                said: I marry her to you for what you know of
                                the Quran.(Sunan Ibn Majah, 1889)
                            </h2>
                        </div>
                        <hr className="w-full " />
                    </div>

                    <div
                        id="Fatiha"
                        className="flex justify-center items-center flex-col gap-5 my-5"
                    >
                        <Image
                            src={weddingPhotoTwo}
                            alt="Wedding Photo for Fatiha"
                            placeholder="blur"
                            className="rounded-xl"
                        />
                        <h1 className="text-2xl hover:text-green-500">
                            Fatiha (Opening Prayer)
                        </h1>

                        <br />
                        <div>
                            <h1 className="hover:text-green-500">
                                An Imam or religious leader performs a prayer to
                                bless the union, seeking Allah&#39;s (SWT)
                                approval and guidance for the couple.
                            </h1>
                            <br />
                            <h2 className="hover:text-red-600">
                                Hadith Narrated by Abu Dawud: The marriage
                                prayer is a sunnah for every Muslim.
                            </h2>
                        </div>
                        <hr className="w-full " />
                    </div>

                    <div
                        id="Nikah"
                        className="flex justify-center items-center flex-col gap-5 my-5"
                    >
                        <Image
                            src={weddingPhotoThree}
                            alt="Wedding Photo for Nikah"
                            placeholder="blur"
                            className="rounded-xl"
                        />
                        <h1 className="text-2xl hover:text-green-500">
                            Aqdun Nikah (Marriage Contract Signing)
                        </h1>
                        <br />
                        <div>
                            <h1 className="hover:text-green-500">
                                The marriage contract is a legal document signed
                                by the bride&#39;s wali (guardian) and the
                                groom, with witnesses present. It outlines
                                the(zuwaja) or marital rights and obligations.
                            </h1>
                            <br />
                            <h2 className="hover:text-red-600">
                                Hadith Narrated by Ibn Abbas: The conditions
                                most worthy of fulfillment are the ones you
                                stipulate between yourselves [in a marriage
                                contract].(Sahih Bukhari)
                            </h2>
                        </div>
                        <hr className="w-full " />
                    </div>

                    <div
                        id="Feast"
                        className="flex justify-center items-center flex-col gap-5 my-5"
                    >
                        <Image
                            src={weddingPhotoFour}
                            alt="Wedding Photo for Feast"
                            placeholder="blur"
                            className="rounded-xl"
                        />
                        <h1 className="text-2xl hover:text-green-500">
                            Walimat al-Aras (Wedding Feast)
                        </h1>
                        <br />
                        <div>
                            <h1 className="hover:text-green-500">
                                A grand celebration with family and friends to
                                mark the joyous occasion. It involves
                                traditional food, music, and dancing, fostering
                                community and strengthening ties.
                            </h1>
                            <br />
                            <h2 className="hover:text-red-600">
                                Hadith Narrated by Anas: The Prophet (ﷺ) Walima
                                [wedding feast] after he married Zaynab bint
                                Jahsh.(Sahih Bukhari),
                            </h2>
                        </div>
                        <hr className="w-full " />
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

export default weddingEventPage;
