import { FaQuoteRight as QuoteRight } from "react-icons/fa";

export default function Testimonial() {
  return (
    <div className="flex flex-col items-center gap-20">
      <QuoteRight size={100} className="text-neutral-700" />
      <div className="flex flex-col gap-10 max-w-[50rem]">
        <p className="text-base text-center italic">
          I&apos;ve had the pleasure of working with Dragos for one and a half
          years and have had the opportunity to see him greatly evolve from both
          a soft-skills and technical skills perspective emerging as a leader
          and a mentor for the more junior team members and evolving into a SME
          regarding automation testing. The automation testing framework he
          created is the benchmark for our department being used across multiple
          applications. I have nothing but appreciation for Dragos&apos; skills
          and professionalism and I definitely recommend working with him.
        </p>
        <div className="flex flex-col gap-2 items-center">
          <span className="text-base font-semibold leading-none">
            Tiberiu-Adrian Trusca
          </span>
          <span className="text-small tracking-tight font-bold text-blue-500">
            Test Manager @ IBM
          </span>
        </div>
      </div>
      <div className="w-5 h-5 rounded-full bg-neutral-700"></div>
    </div>
  );
}
