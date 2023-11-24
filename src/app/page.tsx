"use client";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import Cube from "@/components/Threejs/Cube";
import { Canvas, useFrame } from "@react-three/fiber";
import Playground from "@/components/Playground";
import Card from "@/components/Card";
import { SlMagnifier } from "react-icons/sl";
import { CiRoute } from "react-icons/ci";
import { CiClock1 } from "react-icons/ci";
import ContactForm from "@/components/ContactForm";
import { PiArrowBendDownRightThin as BendArrow } from "react-icons/pi";

export default function Home() {
  return (
    <main className="flex flex-col gap-36 text-3xl">
      <section
        id="hero-section"
        className="flex flex-wrap w-full flex-col-reverse gap-10 lg:gap-0 lg:flex-row sm:flex-col"
      >
        <div className="flex-1">
          <h1>You make it, I break it!</h1>
          <h2 className="text-base opacity-80 pt-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus rei.
          </h2>
          <div className="pt-5 flex gap-1 items-center">
            <BendArrow size={60} />
            <Button size="lg" color="primary" className="text-xl font-bold">
              Contact
            </Button>
          </div>
          <span className="text-sm flex items-center justify-center pt-10">
            Scroll down
          </span>
        </div>
        <div className="relative flex-1 flex items-center justify-end">
          <Image width={600} height={600} alt="hero" src="/hero_2.svg" />
        </div>
      </section>
      <section id="playground-section" className="flex gap-10 flex-col">
        <div>
          <h1>Playground</h1>
          <h2 className="text-base opacity-80 pt-5">
            Testing does not have to be hard!
          </h2>
        </div>
        <Playground />
      </section>
      <section id="skills-section" className="flex gap-10 flex-col">
        <h1>Skills</h1>
        <Card
          title="UI/UX"
          icon={SlMagnifier}
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint repudiandae nulla possimus ducimus necessitatibus nam."
        />
        <Card
          title="API"
          icon={CiRoute}
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint repudiandae nulla possimus ducimus necessitatibus nam."
        />
        <Card
          title="PERFORMANCE"
          icon={CiClock1}
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint repudiandae nulla possimus ducimus necessitatibus nam."
        />
      </section>
      <section id="contact-section" className="flex gap-10 flex-col">
        <h1>Let&apos;s chat!</h1>
        <ContactForm />
      </section>
    </main>
  );
}
