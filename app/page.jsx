// app/page.js
"use client";
import Image from "next/image";
import { useState, useRef } from "react";
import Card from "./components/card";
import Icon1 from "../public/icon.png";
import Brands from "./components/brands";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowLeft,
  faBolt,
  faArrowTrendUp,
} from "@fortawesome/free-solid-svg-icons";
import Testimonials from "./components/Testimonials";
import Link from "next/link";

export default function Home() {
  const [openIndex, setOpenIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handlebrands = () => {
    setIsOpen(!isOpen);
  };

  const scrollContainerRef = useRef(null);
  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  const faqs = [
    {
      question: "How do I sign up for the project?",
      answer:
        "Signing up is easy! Simply navigate to the signup page, fill in your details, and submit the form. You’ll receive a confirmation email with further instructions.",
    },
    {
      question: "What things should I prepare before starting?",
      answer:
        "Before starting, ensure you have a clear understanding of your project goals, required resources, and any relevant data or documents that might help streamline the process.",
    },
    {
      question: "Does my company need help for marketing advice?",
      answer:
        "If you’re looking to improve your brand’s visibility, reach, or strategy, we can definitely assist. Our expert team provides tailored marketing advice to meet your business goals.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div>
      {/* Section 1*/}
      <section id="hero" className="bg-white p-2 md:p-20 lg:p-16">
        <div className="container  px-6 md:px-12 lg:px-4 xl:px-16 py-16 flex flex-wrap justify-center flex-col md:flex-row items-center space-y-64 lg:space-y-0">
          <div className="w-full lg:w-1/2 text-center lg:text-left px-8 pt-6">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-black leading-tight mb-4">
              We Take <br className="hidden lg:block" /> Care Of{" "}
              <br className="hidden lg:block" /> Your Brand
            </h1>
            <p className="text-gray-600 text-sm sm:text-base mb-6">
              We care about our work and we care about our clients.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-2">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="px-4 py-2 rounded-3xl border text-sm w-full sm:w-56 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-3xl hover:bg-blue-700 transition">
                Lets Talk
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 flex  md:justify-center  md:mt-0 ">
            <div className="relative ml-[13.5rem]  md:ml-[13rem] xl:ml-0 ">
              <div className="absolute -top-[13.5rem] right-20 w-48 sm:w-64">
                <Image
                  src="/person1.png"
                  alt="Person 1"
                  width={200}
                  height={200}
                  className="rounded-full w-[100rem]"
                />
              </div>
              <div className="absolute -top-[13.6rem] sm:-right-28 -right-12 w-32 sm:w-48 ">
                <Image
                  src="/person2.png"
                  alt="Person 2"
                  width={175}
                  height={9}
                  className="rounded-full"
                />
              </div>
              <div className="absolute sm:-top-[3.05rem]  sm:right-40 right-[9rem] -top-[5.6rem] w-32 sm:w-44 ">
                <Image
                  src="/Rectangle 201.png"
                  alt="Person 3"
                  width={175}
                  height={9}
                  className="rounded-full"
                />
              </div>
              <div className=" absolute sm:-top-5  sm:right-[7.5rem] -top-16 right-[11.6rem] w-12 sm:w-40 ">
                <Image src="/Pencil.png" alt="Pencil" width={70} height={9} />
              </div>
              <div className=" absolute sm:-top-12 sm:-right-32 -top-[5.6rem] -right-12 w-48 sm:w-72 ">
                <Image
                  src="/Rectangle 202.png"
                  alt="Person 5"
                  width={265}
                  height={90}
                />
              </div>

              <div className=" absolute sm:top-[5.6rem] sm:right-40 right-36 top-3 w-32 sm:w-44 ">
                <Image
                  src="/Ellipse 84.png"
                  alt="Person 4"
                  width={200}
                  height={90}
                />
              </div>
              <div className=" absolute sm:top-[5.5rem] sm:right-[1.6rem] right-[2.7rem] w-[6.3rem] top-2 sm:w-[8.45rem] ">
                <Image
                  src="/Rectangle 204.png"
                  alt="Rectangle "
                  width={184}
                  height={90}
                />
              </div>
              <div className=" absolute sm:top-[7.5rem] sm:right-[3.3rem] top-[2.5rem] right-[4.4rem] w-12  sm:w-20 ">
                <Image
                  src="/Laptop.png"
                  alt="Rectangle "
                  width={180}
                  height={90}
                />
              </div>
              <div className=" absolute sm:top-[5.5rem] sm:-right-[6.8rem] top-2 -right-[3.6rem]  w-[6.3rem] sm:w-[8.45rem] ">
                <Image
                  src="/Rectangle 205.png"
                  alt="Rectangle "
                  width={184}
                  height={90}
                />
              </div>
              <div className=" absolute sm:top-[7.5rem] top-[2.6rem] sm:-right-[5rem] -right-8 w-12  sm:w-20 ">
                <Image
                  src="/crown.png"
                  alt="Rectangle "
                  width={180}
                  height={90}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="Companies"
        className="bg-[#fafafa] w-full mt-20 sm:mt-56 md:mt-32 lg:mt-0 px-4 py-8 sm:px-8 sm:pt-16 sm:pb-20"
      >
        <div>
          <h1 className="text-center font-medium text-xl sm:text-2xl text-black md:text-3xl mt-2">
            Companies We Work With
          </h1>
        </div>
        {/* Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 items-center justify-center gap-4 sm:gap-6 mt-6">
          <div className="flex justify-center">
            <Image
              src="/Spotify-Logo.png"
              alt="Spotify logo"
              width={120}
              height={40}
            />
          </div>
          <div className="flex justify-center">
            <Image src="/Google.png" alt="Google" width={100} height={40} />
          </div>
          <div className="flex justify-center">
            <Image src="/Uber.png" alt="Uber" width={70} height={40} />
          </div>
          <div className="flex justify-center">
            <Image
              src="/microsoft.png"
              alt="Microsoft"
              width={140}
              height={40}
            />
          </div>
          <div className="flex justify-center">
            <Image src="/shopify.png" alt="Shopify" width={110} height={40} />
          </div>
          {/* Second Row */}
          <div className="flex justify-center">
            <Image
              src="/evernote.png"
              alt="Evernote logo"
              width={120}
              height={40}
            />
          </div>
          <div className="flex justify-center">
            <Image src="/adobe.png" alt="Adobe" width={100} height={40} />
          </div>
          <div className="flex justify-center">
            <Image src="/paypal.png" alt="PayPal" width={130} height={40} />
          </div>
          <div className="flex justify-center">
            <Image src="/amazon.png" alt="Amazon" width={90} height={40} />
          </div>
          <div className="flex justify-center">
            <Image src="/asana.png" alt="Asana" width={110} height={40} />
          </div>
        </div>
      </section>

      {/* Section 3*/}
      <section
        id="Commitments"
        className="grid grid-cols-1 lg:grid-cols-2 lg:ml-16 lg:p-10"
      >
        {/* Left Side (Stats) */}
        <div className="left grid grid-cols-1 text-center lg:text-start md:grid-cols-2 p-20 gap-y-14">
          {[
            { value: "245%", text: "More revenues for the brand" },
            { value: "130K+", text: "Audiences reached" },
            { value: "50+", text: "Brands trust us" },
            { value: "24+", text: "Worldwide Awards" },
          ].map((item, index) => (
            <div key={index}>
              <h1 className="font-semibold text-5xl">{item.value}</h1>
              <p className="text-[#686868] mt-2">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Right Side (Heading & Text) */}
        <div className="right space-y-6 text-center lg:text-start lg:mt-20">
          <h1 className="font-medium text-5xl">Commitments</h1>
          <p className="text-[#686868] w-full p-2">
            We are committed to working with you collaboratively to understand
            your goals and create a strategy that will achieve them.
          </p>
        </div>
      </section>

      {/* Section 4*/}
      <section
        id="howitworks"
        className="flex flex-wrap justify-center items-center p-8 sm:p-16 lg:p-12 space-y-10 lg:space-x-20"
      >
        {/* Left Section */}
        <div className="space-y-8 text-center lg:text-left w-full lg:w-auto">
          <div className="space-y-3">
            <h1 className="font-medium text-3xl sm:text-4xl lg:text-5xl">
              How It Works
            </h1>
            <p className="text-[#686868] max-w-md mx-auto lg:mx-0">
              We believe that the best way to create successful marketing
              campaigns is to work closely with our clients to understand their
              goals and challenges.
            </p>
          </div>
          <div className="flex justify-center lg:justify-start">
            <Image src="/sec4.png" width={300} height={60} alt="img" />
          </div>
        </div>

        {/* Right Section - Cards */}
        <div className="space-y-6 lg:w-auto">
          <Card
            title="Discovery"
            text="We meet with you to learn about your business, your goals, and your target audience."
            src="/icon.png"
          />
          <Card
            title="Strategy"
            text="We develop a customized marketing strategy that is based on your unique needs and goals."
            src="/chess.png"
          />
          <Card
            title="Execution"
            text="We execute our strategy using the latest digital marketing tools and techniques."
            src="/exe.png"
          />
          <Card
            title="Measurement"
            text="We track the results of our campaigns so that we can make adjustments as needed."
            src="/measurement.png"
          />
        </div>
      </section>

      {/* Section 5*/}
      <section id="ourwork" className="mt-4">
        <div className="text-center space-y-4">
          <h1 className="font-medium text-5xl">Our Work</h1>
          <p className="text-[#686868] text-sm">A glimpse of our portfolio</p>
        </div>

        <div className="grid lg:grid-cols-3 justify-items-center gap-y-12 p-10">
          <Brands title="Apple" src="/Apple.png" />
          <Brands title="Coca-Cola" src="/cola.png" />
          <Brands title="Nike" src="/nike.png" />

          <AnimatePresence>
            {isOpen && (
              <>
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <Brands
                    title="The North Face"
                    src="/northface.jpg"
                    className="rounded-[2rem] h-[17.7rem]"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <Brands
                    title="Pepsi"
                    src="/pepsi.jpg"
                    className="rounded-[2rem] h-[17.7rem]"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Brands
                    title="Puma"
                    src="/puma.jpg"
                    className="rounded-[2rem] h-[17.7rem]"
                  />
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>

        <div className="flex justify-center mb-16">
          <button
            onClick={handlebrands}
            className="bg-[#3461FF] p-3 text-white rounded-3xl w-36 text-lg transition-all duration-300 hover:scale-105"
          >
            {isOpen ? "See Less" : "See More"}
          </button>
        </div>
      </section>

      {/* Section 6*/}
      <section className="p-8 sm:p-16 lg:p-28 flex flex-wrap justify-center relative">
        <div className="bg-[#3561ff] rounded-3xl text-white flex flex-wrap justify-between items-center p-7 sm:p-10 lg:p-20 w-full lg:w-[70rem] h-[16rem] lg:h-[19rem] relative overflow-hidden">
          {/* Left Section */}
          <div className="w-full lg:w-[30rem] mb-14 lg:mb-0">
            <h1 className="text-3xl sm:text-4xl block lg:hidden  text-white lg:text-6xl font-medium text-center lg:text-left">
              Elevate Your Brand Today!
            </h1>
            <div className="hidden lg:block">
              <div className="absolute lg:bottom-[0rem] lg:left-[3rem]">
                <Image
                  className=""
                  src="/Ellipse3.png"
                  width={377}
                  height={300}
                  alt="ellipse"
                />
              </div>
              <div className="absolute top-[0rem] right-[41.5rem] lg:top-[0rem] lg:-left-[0.5rem] rounded-full ">
                <Image
                  src="/Ellipse2.png"
                  className="rounded-xl"
                  width={230}
                  height={20}
                  alt="ellipse"
                />
              </div>
              <div className="absolute -top-[1rem] right-[53rem] lg:bottom-[0.5rem] lg:-left-[0.5rem]">
                <Image
                  className=""
                  src="/Ellipse1.png"
                  width={50}
                  height={80}
                  alt="ellipse"
                />
              </div>
              <div className="absolute top-[0rem] right-[18rem] lg:bottom-[0rem] lg:left-[14rem]">
                <Image
                  className=""
                  src="/Ellipse4.png"
                  width={377}
                  height={300}
                  alt="ellipse"
                />
              </div>
              <div className="absolute w-full lg:w-[30rem] top-[2rem] right-[0rem] lg:top-[5rem] lg:left-[4.5rem] ">
                <h1 className="text-3xl sm:text-4xl text-white lg:text-6xl font-medium text-center lg:text-left">
                  Elevate Your Brand Today!
                </h1>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className=" w-full absolute top-[8rem] lg:top-[6rem] right-[0rem] lg:right-[1rem] lg:w-[21rem] space-y-6 text-center lg:text-left">
            <p className="font-[GeneralSansVariable] text-sm sm:text-base">
              Ready to transform your digital presence? Let's create magic
              together! Book our services now!
            </p>
            <Link href="/contactus"
            >
            <button
              className="bg-white mt-3 p-3 text-black rounded-3xl w-40 font-medium text-base"
              >
              Book Call
            </button>
              </Link>
          </div>
        </div>
      </section>

      <section
        id="team"
        className="flex flex-wrap-reverse space-y-10 lg:space-y-0 justify-around p-10 lg:p-20"
      >
        <div className="grid grid-cols-3 gap-y-6 gap-x-6">
          <Image src="/M1.png" alt="member1" width={170} height={20} />
          <Image src="/M2.png" alt="member1" width={170} height={20} />
          <Image src="/M3.png" alt="member1" width={170} height={20} />
          <Image src="/M4.png" alt="member1" width={170} height={20} />
          <Image src="/M5.png" alt="member1" width={170} height={20} />
          <Image src="/M6.png" alt="member1" width={170} height={20} />
        </div>
        <div className="right flex text-center  xl:text-start flex-wrap space-y-5 lg:space-y-0 flex-col justify-between p-4 xl:w-[28rem]">
          <div className="space-y-6">
            <h1 className="font-medium text-5xl">Meet Our Team</h1>
            <p className=" text-[#686868] text-sm">
              Discover the brilliance behind Embrace. Our team blends innovation
              and artistry to craft digital wonders that captivate
            </p>
          </div>
        </div>
      </section>

      <section id="testimonials" className="mt-10">
        <div className="p-3 lg:p-12  space-y-4">
          <div className="flex flex-wrap items-center justify-around">
            <div>
              <h1 className="font-medium text-center lg:text-start text-5xl">
                What Our Client Said About Us
              </h1>
            </div>
            <div className="space-x-4 hidden lg:inline">
              <button
                className=" bg-[#F8F9FF] rounded-full px-6 py-5"
                onClick={scrollLeft}
              >
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  className="text-[#a6adb7] h-6 "
                />
              </button>
              <button
                className=" bg-[#3461FF] rounded-full px-6 py-5  "
                onClick={scrollRight}
              >
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-white h-6 "
                />
              </button>
            </div>
          </div>

          {/* Testimonials */}
          <Testimonials scrollContainerRef={scrollContainerRef} />
        </div>
      </section>

      <section className="p-8 lg:px-24 py-16">
        <div className="relative bg-[#1e1e3e] text-white rounded-2xl p-10 h-[18.5rem] mx-auto">
          {/* Background Grid Lines */}
          <div
            className="absolute inset-0 grid grid-cols-12 grid-rows-12 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
              backgroundSize: "100px 100px",
            }}
          ></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Text Section */}
            <div className="text-center md:text-left">
              <h1 className="text-xl md:text-4xl font-medium leading-tight">
                Start Your Journey
                <br />
                With Us Now
              </h1>
            </div>

            {/* Icon Section */}
            <div className="flex justify-center items-center bg-[#d0ff38] rounded-full w-20 h-20 md:w-56 md:h-56">
              <FontAwesomeIcon
                icon={faBolt}
                className="text-[#3461FF] h-7 md:h-20 "
              />
              <FontAwesomeIcon
                icon={faArrowTrendUp}
                className="text-[#3461FF] h-7 md:w-[5.5rem] md:h-44"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className=" py-12 px-6">
        <div className="flex flex-wrap space-y-10 lg:space-y-0 justify-evenly items-center p-2 lg:p-10 ">
          <div className="left w-full lg:w-[35rem] ">
            <div className="space-y-3 ">
              {faqs.map((faq, index) => (
                <div key={index} className=" rounded-lg">
                  <span className=" block h-[0.1rem] w-full rounded-md bg-[#D7D7D7]"></span>
                  <button
                    className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-medium transition"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="mt-3">{faq.question}</span>
                    <span className="mt-3 ">
                      <Image
                        src="/vector.png"
                        alt="vector"
                        width={20}
                        height={2}
                      />
                    </span>
                  </button>
                  {openIndex === index && (
                    <div className="px-6 py-4 bg-white text-gray-600">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
              <span className=" block h-[0.1rem] w-full rounded-md bg-[#D7D7D7]"></span>
            </div>
          </div>
          <div className="right lg:w-[21rem] text-center  w-full">
            <div className="space-y-3">
              <h1 className="font-medium text-3xl">How We Can Help You? </h1>
              <p className="text-[#afa9a9]">
                Follow our newsletter. We will regularly update our latest
                project and availability
              </p>
            </div>
            <div className="space-x-4 flex flex-wrap space-y-4 lg:space-y-0 justify-center lg:justify-start items-end mt-3">
              <input
                type="email"
                className="bg-[#f3ecec] p-[0.9rem] w-full lg:w-fit rounded-full text-sm"
                placeholder="Enter Your Email"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-full ">
                Lets Talk
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
