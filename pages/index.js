import HeroSection from "./HeroSection"
import ContentSection from "./ContentSection"
import FooterSection from "./FooterSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white flex flex-col items-stretch pt-2.5">
      <Image
        width={100}
        height={100}
        loading="lazy"
        src="/images/topbg.png"
        className="absolute h-full w-full object-cover object-center inset-0"
      />
      <HeroSection />
      <ContentSection />
      <FooterSection />
    </div>
  )
}
