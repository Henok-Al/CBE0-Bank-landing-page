"use client";

import { Carousel } from "flowbite-react";
import Image from "next/image";

export const CarouselSlider = () => {
  return (
    <div className="h-screen  mb-60">
      <Carousel>
        <Image src="/images/img1.jpg" width={600} height={600} alt="img1 " priority />
        <Image src="/images/img2.png" width={600} height={600} alt="img2 " />
        <Image src="/images/img3.png" width={600} height={600} alt="img3 " />
        <Image src="/images/img4.jpg" width={600} height={600} alt="img4 " />
        <Image src="/images/img5.png" width={600} height={600} alt="img5 " />
        <Image src="/images/img6.png" width={600} height={600} alt="img6 " />
        <Image src="/images/img7.jpg" width={600} height={600} alt="img7 " />
        <Image src="/images/img8.png" width={600} height={600} alt="img8 " />
      </Carousel>
      <div style={{ width: "100%", height: "30%", position: "relative" }}>
  <Image
    src="/cbe-banner.png"
    layout="fill" // Remove this line
    objectFit="contain"
    objectPosition="center" // Add this line
    alt="img8"
  />
</div>

    </div>
  );
};
