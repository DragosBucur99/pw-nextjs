import { FaQuoteRight as QuoteRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Divider, ScrollShadow } from "@nextui-org/react";
import { Pagination } from "swiper/modules";

export default function Testimonial() {
  return (
    <div>
      <div className="flex justify-center mb-20">
        <QuoteRight size={100} className="text-blue-700" />
      </div>
      <Swiper
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="cursor-grab"
      >
        <SwiperSlide>
          <div className="flex items-center justify-center mb-10">
            <div className="flex flex-col gap-10 p-5 rounded-md shadow-md bg-neutral-900 max-w-[50rem]">
              <ScrollShadow>
                <p className="text-base italic h-56">
                  I&apos;ve had the pleasure of working with Dragos for one and
                  a half years and have had the opportunity to see him greatly
                  evolve from both a soft-skills and technical skills
                  perspective emerging as a leader and a mentor for the more
                  junior team members and evolving into a SME regarding
                  automation testing. The automation testing framework he
                  created is the benchmark for our department being used across
                  multiple applications. I have nothing but appreciation for
                  Dragos&apos; skills and professionalism and I definitely
                  recommend working with him.
                </p>
              </ScrollShadow>
              <Divider />
              <div className="flex flex-col gap-2">
                <span className="text-base font-semibold leading-none">
                  Tiberiu-Adrian Trusca
                </span>
                <span className="text-small tracking-tight font-bold text-blue-500">
                  Test Manager @ IBM
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center mb-10">
            <div className="flex flex-col gap-10 p-5 rounded-md shadow-md bg-neutral-900 max-w-[50rem]">
              <ScrollShadow>
                <p className="text-base italic h-56">
                  Good technical skills, great attitude and excellent worker.
                  Communicated well within an international team spanning many
                  time zones and provided good solutions. Keen to improve
                  himself and progress further. A pleasure to manage.
                </p>
              </ScrollShadow>
              <Divider />
              <div className="flex flex-col gap-2">
                <span className="text-base font-semibold leading-none">
                  Toby Wiltshire
                </span>
                <span className="text-small tracking-tight font-bold text-blue-500">
                  Cloud Manager @ CaseWare
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
