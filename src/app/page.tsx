"use client";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import Playground from "@/components/Playground";
import Card from "@/components/Card";
import { PiTreeStructureThin as TreeStructure } from "react-icons/pi";
import { CiRoute } from "react-icons/ci";
import { CiClock1 } from "react-icons/ci";
import ContactForm from "@/components/ContactForm";
import { PiArrowBendDownRightThin as BendArrow } from "react-icons/pi";
import { User, Divider, Chip } from "@nextui-org/react";
import { SiPlaywright, SiCypress, SiPostman } from "react-icons/si";
import ScrollDown from "@/components/ScrollDown";

export default function Home() {
  return (
    <main className="flex flex-col gap-36 lg:gap-52 text-3xl">
      <section
        id="hero-section"
        className="relative flex flex-wrap w-full flex-col flex-col-reverse md:flex-row md:justify-center md:items-center"
      >
        <div className="flex-1 flex flex-col">
          <h1>
            Building <span className="text-blue-500">Quality</span>, One Test at
            a Time
          </h1>
          <div className="mt-5 flex flex-col flex-col-reverse gap-1 xl:flex-row xl:gap-5">
            <User
              className="w-full justify-start"
              name="Dragos Bucur"
              description="Software Development Engineer in Test"
              avatarProps={{
                src: "man.png",
              }}
            />
            <div>
              <Divider orientation="vertical" className="hidden xl:block" />
            </div>
            <p className="text-base opacity-90 leading-6">
              SDET with a passion for quality. Explore my portfolio for expert
              test automation and seamless user experiences.
            </p>
          </div>

          <div className="pt-5 flex gap-1 items-center">
            <BendArrow size={60} />
            <Button size="lg" color="primary" className="text-xl font-bold">
              Contact
            </Button>
          </div>
        </div>
        <div className="relative flex-1 flex items-center justify-end maskImage">
          <Image
            width={700}
            height={700}
            alt="Finding bugs in the code"
            src="/hero.gif"
          />
        </div>
        <ScrollDown />
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
      <section id="skills-section" className="flex flex-col gap-10">
        <h1>Skills</h1>
        <div className="flex gap-10 flex-col flex-wrap lg:flex-row">
          <Card
            title="End-to-End"
            icon={TreeStructure}
            text="End-to-End (E2E) testing evaluates your software's complete workflow, ensuring seamless integration and functionality across all components. It validates the entire system, guaranteeing a robust and reliable user experience."
            chips={[
              <Chip
                key="Playwright"
                startContent={<SiPlaywright size={18} />}
                variant="faded"
                color="primary"
              >
                Playwright
              </Chip>,
              <Chip
                key="Cypress"
                startContent={<SiCypress size={18} />}
                variant="faded"
                color="primary"
              >
                Cypress
              </Chip>,
            ]}
            hrefs={["https://playwright.com", "https://cypress.io"]}
          />
          <Card
            title="API"
            icon={CiRoute}
            text="API testing focuses on verifying the functionality and reliability of your software's APIs. It ensures seamless communication between different software components, validating data exchange and functionality with precision."
            chips={[
              <Chip
                key="Postman"
                startContent={<SiPostman size={18} />}
                variant="faded"
                color="primary"
              >
                Postman
              </Chip>,
              <Chip
                key="Playwright"
                startContent={<SiPlaywright size={18} />}
                variant="faded"
                color="primary"
              >
                Playwright
              </Chip>,
            ]}
            hrefs={["https://www.postman.com/", "https://playwright.com"]}
          />
          <Card
            title="PERFORMANCE"
            icon={CiClock1}
            text="Performance testing evaluates the speed, responsiveness, and stability of your software under various conditions. It ensures your application delivers optimal user experiences, even during peak loads, by identifying and addressing performance bottlenecks."
            chips={[
              <Chip key="K6" variant="faded" color="primary">
                K6
              </Chip>,
              <Chip key="Loadtest" variant="faded" color="primary">
                Loadtest
              </Chip>,
            ]}
            hrefs={["https://k6.io/", "https://www.npmjs.com/package/loadtest"]}
          />
        </div>
      </section>
      <section id="contact-section" className="flex gap-10 flex-col">
        <h1>Let&apos;s chat!</h1>
        <ContactForm />
      </section>
    </main>
  );
}
