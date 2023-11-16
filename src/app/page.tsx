"use client";
import Button from "@/components/Button";
import Cube from "@/components/Threejs/Cube";
import { Canvas, useFrame } from "@react-three/fiber";
import Playground from "@/components/Playground";
import Card from "@/components/Card";
import { SlMagnifier } from "react-icons/sl";
import { CiRoute } from "react-icons/ci";
import { CiClock1 } from "react-icons/ci";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="flex flex-col gap-52 text-3xl">
      <section
        id="hero-section"
        className="flex flex-wrap w-full flex-col-reverse gap-10 lg:flex-row sm:flex-col"
      >
        <div className="flex-1">
          <h1>You make it, I break it!</h1>
          <h2 className="text-base opacity-80 pt-1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus rei.
          </h2>
          <div className="pt-5">
            <Button name="Click" />
          </div>
        </div>
        <div className="flex-1">
          <Canvas camera={{ position: [0, 0, 15], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            <Cube />
          </Canvas>
        </div>
      </section>
      <section id="playground-section" className="flex gap-10 flex-col">
        <h1>Testing does not have to be hard!</h1>
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
