"use client";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import Playground from "@/components/Playground";
import Card from "@/components/Card";
import { PiTreeStructureThin as TreeStructure } from "react-icons/pi";
import { CiRoute } from "react-icons/ci";
import { SiGithubactions as GithubActionsIcon } from "react-icons/si";
import {
  FaGithub as GithubIcon,
  FaJenkins as JenkinsIcon,
} from "react-icons/fa";
import ContactForm from "@/components/ContactForm";
import { PiArrowBendDownRightThin as BendArrow } from "react-icons/pi";
import { User, Divider, Chip, Link } from "@nextui-org/react";
import { SiPlaywright, SiCypress, SiPostman } from "react-icons/si";
import ScrollDown from "@/components/ScrollDown";
import Testimonial from "@/components/Testimonial";
import { FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Home() {
  const [sectionIdToScroll, setSectionIdToScroll] = useState("");

  const scrollToSection = (sectionId: string) => {
    setSectionIdToScroll(sectionId);
  };

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById(sectionIdToScroll);

      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    };

    if (sectionIdToScroll) {
      handleScroll();
      setSectionIdToScroll("");
    }
  }, [sectionIdToScroll]);

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
              name={
                <Link
                  href="https://www.linkedin.com/in/dragos-bucur-b73966264/"
                  size="sm"
                  isExternal
                  showAnchorIcon
                  anchorIcon={<FaLinkedin />}
                >
                  Dragos Bucur
                </Link>
              }
              description="Software Development Engineer in Test"
              avatarProps={{
                src: "man.png",
              }}
            />
            <div>
              <Divider orientation="vertical" className="hidden xl:block" />
            </div>
            <p className="text-base text-neutral-200 leading-6">
              Explore my portfolio to witness a fusion of technical expertise,
              innovative test strategies and a commitment to delivering
              high-performance, reliable software solutions.
            </p>
          </div>

          <div className="pt-5 flex gap-1 items-center">
            <BendArrow size={60} />
            <Button
              size="lg"
              color="primary"
              className="text-xl font-bold"
              onClick={() => scrollToSection("contact-section")}
            >
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
          <h2 className="text-md text-neutral-300 pt-5">
            Testing does not have to be hard!
          </h2>
        </div>
        <Playground />
      </section>
      <section id="skills-section" className="flex flex-col gap-10">
        <div>
          <h1>Skills</h1>
          <h2 className="text-md text-neutral-300 pt-5">
            What do I bring to the table?
          </h2>
        </div>
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
            title="CI/CD"
            icon={GithubActionsIcon}
            text="CI/CD streamlines software development by automating integration, testing, and deployment processes. This practice ensures rapid, reliable, and consistent delivery of high-quality code changes, fostering efficient collaboration among development teams."
            chips={[
              <Chip
                key="Github Actions"
                startContent={<GithubIcon size={18} />}
                variant="faded"
                color="primary"
              >
                Github Actions
              </Chip>,
              <Chip
                key="Jenkins"
                startContent={<JenkinsIcon size={18} />}
                variant="faded"
                color="primary"
              >
                Jenkins
              </Chip>,
            ]}
            hrefs={[
              "https://github.com/features/actions",
              "https://www.jenkins.io/",
            ]}
          />
        </div>
      </section>
      <section id="testimonials-section">
        <Testimonial />
      </section>
      <section id="contact-section" className="flex gap-10 flex-col ">
        <h1>Let&apos;s chat!</h1>
        <div className="lg:flex lg:flex-row gap-24">
          <div className="flex-1">
            <ContactForm />
          </div>
          <div className="relative flex-1">
            <Image
              className="hidden lg:block"
              fill={true}
              alt="Finding bugs in the code"
              src="/plane.svg"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
