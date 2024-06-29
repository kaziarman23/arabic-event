"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback } from "react";
import Image from "next/image";
import carouselOne from "@/public/images/carouselOne.jpg";
import carouselTwo from "@/public/images/carouselTwo.jpg";
import carouselThree from "@/public/images/carouselThree.jpg";
import carouselFour from "@/public/images/carouselFour.jpg";
import carouselFive from "@/public/images/carouselFive.jpg";



function EmblaCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
        Autoplay({ delay: 4000 }),
    ]);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <div className="embla">
            <div
                className="embla__viewport mx-auto w-full h-80 border-gray-300 border"
                ref={emblaRef}
            >
                <div className="embla__container h-full">
                    <div className="embla__slide flex justify-center items-center object-cover">
                        <Image
                            src={carouselOne}
                            alt="carousel picture one"
                            quality={100}
                            placeholder="blur"
                        />
                    </div>
                    <div className="embla__slide flex justify-center items-center object-cover">
                        <Image
                            src={carouselTwo}
                            alt="carousel picture two"
                            quality={100}
                            placeholder="blur"
                        />
                    </div>
                    <div className="embla__slide flex justify-center items-center object-cover">
                        <Image
                            src={carouselThree}
                            alt="carousel picture three"
                            quality={100}
                            placeholder="blur"
                        />
                    </div>
                    <div className="embla__slide flex justify-center items-center object-cover">
                        <Image
                            src={carouselFour}
                            alt="carousel picture four"
                            quality={100}
                            placeholder="blur"
                        />
                    </div>
                    <div className="embla__slide flex justify-center items-center">
                        <Image
                            src={carouselFive}
                            alt="carousel picture five"
                            quality={100}
                            placeholder="blur"
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
            <div className="w-full h-8 my-5 flex justify-evenly items-center">
                <button
                    className="embla__prev p-2 rounded-xl text-white hover:opacity-70"
                    onClick={scrollPrev}
                >
                    Previous
                </button>
                <button
                    className="embla__next p-2 rounded-xl text-white hover:opacity-70"
                    onClick={scrollNext}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default EmblaCarousel;
