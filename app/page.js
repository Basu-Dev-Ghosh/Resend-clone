import styles from "styles/ui.module.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import GetStartedButton from "@/components/Uiitems/GetStartedButton";
import Image from "next/image";
import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  inbox,
} from "public/images/index.js";
import CodeViewer from "@/components/Uiitems/CodeViewer";
import TestCheck from "@/components/Uiitems/TestCheck";
import TestCheck2 from "@/components/Uiitems/TestCheck2";
import TestCard from "@/components/Uiitems/TestCard";
import TestCard2 from "@/components/Uiitems/TestCard2";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <section className="flex flex-col-reverse lg:flex-row max-w-7xl items-center ">
        <div className="flex-col text-center md:text-left justify-center items-center md:-mt-6">
          <div className="w-full text-center mx-auto flex justify-center md:justify-start md:w-auto">
            <button className={`${styles.color_border_button} text-center`}>
              Resend raises $3M seed round
              <MdKeyboardArrowRight className="ml-2" />
            </button>
          </div>

          <p className="my-6 md:text-7xl text-6xl text-[#EAEAEA]">
            Email for developers
          </p>
          <p className="my-4 mx-4 md:mx-0 text-[#93989D] text-base md:text-lg">
            The best API to reach humans instead of spam folders. Build, test,
            and deliver transactional emails at scale.
          </p>
          <div className="flex flex-col md:flex-row mx-4 md:mx-0">
            <GetStartedButton className="h-[46px] px-9  bg-white">
              Get Started
            </GetStartedButton>
            <GetStartedButton className="bg-transparent mt-4 md:mt-0 text-center text-white hover:text-slate-600 md:ml-4 h-[46px] px-9 text-lg">
              Documentation
            </GetStartedButton>
          </div>
        </div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className=" md:w-[640px] md:h-[640px] w-[200px] h-[200px] object-cover md:ml-10"
        >
          <source src="/cube.mp4" />
        </video>
      </section>
      <hr className="my-10 md:mt-0" />
      <section className="flex-col-reverse lg:flex-row max-w-7xl items-center my-10">
        <p className="text-[#93989D] text-lg text-wrap mx-auto text-center w-96 mb-16">
          Companies of all sizes trust Resend to deliver their most important
          emails.
        </p>
        <div className="flex flex-wrap  items-center justify-around mx-auto  w-[80%] ">
          <Image
            src={image7}
            className="m-4 md:m-0"
            width={100}
            height={100}
            alt="image1"
          />
          <Image
            src={image8}
            className="m-4 md:m-0"
            width={100}
            height={100}
            alt="image1"
          />
          <Image
            src={image9}
            className="m-4 md:m-0"
            width={100}
            height={100}
            alt="image1"
          />
          <Image
            src={image10}
            className="m-4 md:m-0"
            width={100}
            height={100}
            alt="image1"
          />
          <Image
            src={image11}
            className="m-4 md:m-0"
            width={100}
            height={100}
            alt="image1"
          />
          <Image
            src={image12}
            className="m-4 md:m-0"
            width={100}
            height={100}
            alt="image1"
          />
        </div>
        <div className="flex-wrap items-center justify-around mt-14 mx-auto w-full hidden md:flex">
          <Image
            src={image1}
            className="mx-8"
            width={150}
            height={150}
            alt="image1"
          />
          <Image
            src={image2}
            className="mx-8"
            width={150}
            height={150}
            alt="image1"
          />
          <Image
            src={image3}
            className="mx-8"
            width={150}
            height={150}
            alt="image1"
          />
          <Image
            src={image4}
            className="mx-8"
            width={150}
            height={150}
            alt="image1"
          />
          <Image
            src={image5}
            className="mx-8"
            width={150}
            height={150}
            alt="image1"
          />
          <Image
            src={image6}
            className="mx-6"
            width={150}
            height={150}
            alt="image1"
          />
        </div>
      </section>
      <section className="flex-col-reverse lg:flex-row max-w-7xl items-center md:my-52 my-28">
        <div className="flex-col mx-auto w-full text-center justify-center items-center">
          <Image
            src={inbox}
            className="mx-auto"
            width={200}
            height={200}
            alt="image1"
          />
          <h3 className="text-5xl md:text-5xl text-[#EDEDED] my-4">
            Integrate <span className="text-[#FD9A2B]">this afternoon</span>
          </h3>
          <p className="text-base md:text-lg w-[90%] md:w-[56%] text-[#90959A] mx-auto text-center">
            A simple, elegant interface so you can start sending emails in
            minutes. It fits right into your code with SDKs for your favorite
            programming languages.
          </p>
        </div>
        <CodeViewer />
      </section>
      <section className="flex-col-reverse lg:flex-row max-w-7xl items-center my-20">
        <div className="w-full md:w-[70%]">
          <div className="text-5xl text-center md:text-left  md:text-6xl text-[#EDEDED] my-4 flex flex-col">
            <span>First-class</span> <span>developer experience</span>
          </div>
          <p className="text-[#93989D] w-[80%] md:w-full text-center md:text-left mx-auto md:mx-0">
            We are a team of engineers who love building tools for other
            engineers Our goal is to create the email platform weve always
            wished we had one that just works.
          </p>
        </div>
        <div className="flex mt-6 flex-col md:flex-row">
          <div className="flex flex-col mx-auto md:mx-0  md:w-full">
            <TestCheck />
            <TestCard />
          </div>
          <div className="flex flex-col mx-auto md:mx-0 mt-10 md:mt-0 md:w-full">
            <TestCheck2 />
            <TestCard2 />
          </div>
        </div>
      </section>
    </main>
  );
}
