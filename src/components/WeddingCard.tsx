"use client";
import Atropos from "atropos/react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import frontCard from "../../public/images/front_card.webp";
import backCard from "../../public/images/back_card.webp";

interface ParallaxCardProps {
  src: string | StaticImport;
  alt: string;
  width: number;
  height: number;
}

function ParallaxCard(parallaxCardProps: ParallaxCardProps) {
  const { src, alt, width, height } = parallaxCardProps;
  return (
    <Atropos rotateTouch="scroll-y">
      <Image src={src} alt={alt} width={width} height={height} />
    </Atropos>
  );
}

export default function WeddingCard() {
  return (
    <>
      <ParallaxCard
        src={frontCard}
        alt={"front-card"}
        width={1230}
        height={1722}
      />
      <Image src={backCard} alt={"back-card"} width={1230} height={1722} />
    </>
  );
}
