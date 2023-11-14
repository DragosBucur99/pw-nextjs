"use client";
import { useState } from "react";
import Nav from "@/components/Nav";
import Button from "@/components/Button";
import Cube from "@/components/Threejs/Cube";
import { Canvas, useFrame } from "@react-three/fiber";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [data, setData] = useState();
  const notify = () => toast("Tests triggered!");
  const fetchAPI = async () => {
    try {
      notify();
      const resp = await fetch("https://api.dragosportfolio.com", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const body = await resp.json();
      setData(JSON.stringify(body));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="flex flex-col gap-24 text-3xl w-full">
      <Nav />
      <section
        id="hero-section"
        className="flex flex-wrap w-full lg:flex-row sm:flex-col"
      >
        <div className="flex-1">
          <h1>You make it, I break it!</h1>
          <h2 className="text-base opacity-80">
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
      <section id="playground-section" className="flex gap-5 flex-col">
        <h1>Testing does not have to be hard!</h1>
        <div className="w-full bg-red-400 min-h-[20rem]">
          <button className="p-5 border-4" onClick={fetchAPI}>
            FETCH
          </button>
          <ToastContainer />
          {data && <p>{data}</p>}
        </div>
      </section>
    </main>
  );
}
