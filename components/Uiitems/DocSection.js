"use client";
import Image from "next/image";
import { MdCircle } from "react-icons/md";
import { CiDesktop, CiMobile1 } from "react-icons/ci";
import { BiMoon, BiSun, BiLogoTypescript } from "react-icons/bi";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { twilight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState } from "react";
import { codeStrings, mailStrings } from "@/data/codestrings";
import circle from "public/images/circle.png";

export default function DocSection() {
  const [option, setOption] = useState(0);
  const [desktop, setDesktop] = useState(true);
  const [night, setNight] = useState(true);
  function changeDesktop() {
    if (desktop) {
      setDesktop(false);
    } else {
      setDesktop(true);
    }
  }
  function changeNight() {
    if (night) {
      setNight(false);
    } else {
      setNight(true);
    }
  }

  return (
    <div className="w-[90%] md:w-full h-[600px]  my-20 mx-auto md:mx-0 rounded-2xl border border-gray-800">
      <div className="w-full flex justify-between p-3 items-center border-b border-gray-800">
        <div className="w-[70px] flex justify-evenly items-center">
          <MdCircle className="text-red-600" />
          <MdCircle className="text-yellow-600" />
          <MdCircle className="text-green-600" />
        </div>
        <div className="flex w-[240px] justify-end items-center text-lg">
          <div className="flex items-center justify-between border border-gray-800 rounded-md p-2 mr-2">
            <CiDesktop
              className={`mx-1  ${
                desktop ? "text-white" : "text-gray-400"
              } cursor-pointer text-2xl hover:text-white transition duration-300 ease-in-out`}
              onClick={changeDesktop}
            />
            <CiMobile1
              className={`mx-1 ${
                !desktop ? "text-white" : "text-gray-400"
              } cursor-pointer text-2xl hover:text-white transition duration-300 ease-in-out`}
              onClick={changeDesktop}
            />
          </div>
          <div className="flex items-center justify-between border border-gray-800 rounded-md mr-1 p-2">
            <BiMoon
              className={`mx-1 ${
                night ? "text-white" : "text-gray-400"
              } cursor-pointer text-2xl hover:text-white transition duration-300 ease-in-out`}
              onClick={changeNight}
            />
            <BiSun
              className={`mx-1 ${
                !night ? "text-white" : "text-gray-400"
              } cursor-pointer text-2xl hover:text-white transition duration-300 ease-in-out`}
              onClick={changeNight}
            />
          </div>
        </div>
      </div>
      <section className="w-full grid grid-cols-12 items-center h-[530px] overflow-hidden">
        <div className="flex flex-row md:flex-col overflow-x-scroll md:overflow-x-hidden col-span-12 h-[80px] md:col-span-3 md:h-full md:rounded-bl-2xl">
          <p
            className={` ${
              option === 0 ? "text-white/80" : "text-gray-600"
            } text-xs md:text-base flex items-center cursor-pointer md:px-4 py-2 my-2 mx-3 md:mx-0 transition duration-300 ease-in-out hover:text-white/80`}
            onClick={() => setOption(0)}
          >
            <BiLogoTypescript className="mr-1  text-2xl" />
            user-welcome.tsx
          </p>
          <p
            className={`${
              option === 1 ? "text-white/80" : "text-gray-600"
            } text-xs md:text-base flex items-center cursor-pointer md:px-4 py-2 my-2 mx-3 md:mx-0 transition duration-300 ease-in-out hover:text-white/80`}
            onClick={() => setOption(1)}
          >
            <BiLogoTypescript className="mr-1  text-2xl" />
            reset-password.tsx
          </p>
          <p
            className={`${
              option === 2 ? "text-white/80" : "text-gray-600"
            } text-xs md:text-base flex items-center cursor-pointer md:px-4 py-2 my-2 mx-3 md:mx-0 transition duration-300 ease-in-out hover:text-white/80`}
            onClick={() => setOption(2)}
          >
            <BiLogoTypescript className="mr-1  text-2xl" />
            user-invite.tsx
          </p>
          <p
            className={`${
              option === 3 ? "text-white/80" : "text-gray-600"
            } text-xs md:text-base flex items-center cursor-pointer md:px-4 py-2 my-2 mx-3 md:mx-0 transition duration-300 ease-in-out hover:text-white/80`}
            onClick={() => setOption(3)}
          >
            <BiLogoTypescript className="mr-1  text-2xl" />
            weekly-digest.tsx
          </p>
        </div>
        <div className="  hidden md:inline col-span-5 h-full ">
          <SyntaxHighlighter
            wrapLongLines={true}
            showLineNumbers={true}
            language={"javascript"}
            style={twilight}
            customStyle={{
              background: "#00000",
              border: 0,
              width: "80%",
            }}
          >
            {codeStrings[option]}
          </SyntaxHighlighter>
        </div>
        <div
          className={`col-span-12 h-[600px] md:col-span-4 md:h-full rounded-bl-2xl md:rounded-bl-none transition-all duration-200 ease-in ${
            night
              ? "bg-[rgb(1,0,14)] bg-[linear-gradient(292deg, rgba(1,0,14,1) 0%, rgba(3,13,22,1) 81%, rgba(3,16,24,1) 100%)]"
              : "bg-white text-black"
          } rounded-br-2xl`}
        >
          <div
            className={`flex flex-col justify-center items-center pt-6 md:pt-14 transition-all duration-300 ease-in ${
              desktop ? "px-8" : "px-20"
            }`}
          >
            <Image src={circle} width={70} height={70} />
            <p className="mt-3 text-lg font-semibold">
              {mailStrings[option].heading}
            </p>
            <p className="text-sm mt-10">
              Hello newuser, <br />
              <br />
              {mailStrings[option].subContent}
            </p>
            {mailStrings[option].buttonText ? (
              <button className="bg-[#00A3FF] text-white h-[40px] px-4 text-sm font-bold mt-8 rounded-md">
                {mailStrings[option].buttonText}
              </button>
            ) : null}

            <p className="text-sm self-start mt-8">
              Cheers, <br />
              {mailStrings[option].footer}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
background:;
background:;
