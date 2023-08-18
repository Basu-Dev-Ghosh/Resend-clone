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
  vercel,
  vercel_owner,
} from "public/images/index.js";
import CodeViewer from "@/components/Uiitems/CodeViewer";
import TestCheck from "@/components/Uiitems/TestCheck";
import TestCheck2 from "@/components/Uiitems/TestCheck2";
import TestCard from "@/components/Uiitems/TestCard";
import DocSection from "@/components/Uiitems/DocSection";

import { GiAcid } from "react-icons/gi";
import { BsCircleSquare } from "react-icons/bs";
import ButtonGroup from "@/components/Uiitems/ButtonGroup";
import Carousal from "@/components/Uiitems/Carousal";
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
            <GetStartedButton className="h-[46px] px-9  bg-white hover:bg-white/40">
              Get Started
            </GetStartedButton>
            <GetStartedButton className="bg-transparent mt-4 md:mt-0 text-center hover:text-white text-slate-600 md:ml-4 h-[46px] px-9 text-lg">
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
            <TestCard
              heading="Test Mode"
              content="Simulate events and experiment with our API without the risk of accidentally sending real emails to real people."
              isButton={true}
            >
              <GiAcid className="my-3" />
            </TestCard>
          </div>
          <div className="flex flex-col mx-auto md:mx-0 mt-10 md:mt-0 md:w-full">
            <TestCheck2 />
            <TestCard
              heading="Modular Webhooks"
              content="Receive real-time notifications directly to your server. Every time an email is delivered, opened, bounces, or a link is clicked."
              isButton={true}
            >
              <BsCircleSquare className="my-3" />
            </TestCard>
          </div>
        </div>
      </section>
      <section className="flex-col-reverse lg:flex-row max-w-7xl items-center my-20 ">
        <video
          autoPlay
          loop
          muted
          playsInline
          className=" md:w-[130px] md:h-[130px] w-[120px] h-[120px] object-cover mx-auto "
        >
          <source src="/3d-react.mp4" />
        </video>
        <h3 className="text-5xl w-[60%] mx-auto text-[#EDEDED] my-4 text-center">
          Develop emails using React
        </h3>
        <p className="text-center w-[60%] text-sm md:text-base mx-auto text-[#90959A]">
          Create beautiful templates without having to deal with table layouts
          and HTML. Powered by react-email, our open source component library.
        </p>
        <div className="flex flex-col md:flex-row  my-6 justify-center p-6 md:p-0 w-full">
          <GetStartedButton className="h-[46px] px-9  bg-white hover:bg-white/40 ">
            Get Started
          </GetStartedButton>
          <GetStartedButton className="bg-transparent mt-4 md:mt-0 text-center hover:text-white text-slate-600 md:ml-4 h-[46px] px-9 text-lg ">
            Check the Docs
          </GetStartedButton>
        </div>
        <DocSection />
      </section>
      <section className="flex-col lg:flex-row w-10/12 justify-start items-start my-20">
        <div className="text-5xl text-left  md:text-6xl text-[#EDEDED] my-4 flex flex-col">
          <span>Reach humans,</span>{" "}
          <span className="text-white/40">not spam folders</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
          <TestCard
            heading="Test Mode"
            content="Simulate events and experiment with our API without the risk of accidentally sending real emails to real people."
          >
            <GiAcid className="my-3" />
          </TestCard>
          <TestCard
            heading="Test Mode"
            content="Simulate events and experiment with our API without the risk of accidentally sending real emails to real people."
          >
            <GiAcid className="my-3" />
          </TestCard>
          <TestCard
            heading="Test Mode"
            content="Simulate events and experiment with our API without the risk of accidentally sending real emails to real people."
          >
            <GiAcid className="my-3" />
          </TestCard>
          <TestCard
            heading="Test Mode"
            content="Simulate events and experiment with our API without the risk of accidentally sending real emails to real people."
          >
            <GiAcid className="my-3" />
          </TestCard>
          <TestCard
            heading="Test Mode"
            content="Simulate events and experiment with our API without the risk of accidentally sending real emails to real people."
          >
            <GiAcid className="my-3" />
          </TestCard>
          <TestCard
            heading="Test Mode"
            content="Simulate events and experiment with our API without the risk of accidentally sending real emails to real people."
          >
            <GiAcid className="my-3" />
          </TestCard>
          <TestCard
            heading="Test Mode"
            content="Simulate events and experiment with our API without the risk of accidentally sending real emails to real people."
          >
            <GiAcid className="my-3" />
          </TestCard>
          <TestCard
            heading="Test Mode"
            content="Simulate events and experiment with our API without the risk of accidentally sending real emails to real people."
          >
            <GiAcid className="my-3" />
          </TestCard>
          <TestCard
            heading="Test Mode"
            content="Simulate events and experiment with our API without the risk of accidentally sending real emails to real people."
          >
            <GiAcid className="my-3" />
          </TestCard>
        </div>
      </section>
      <section className="py-10 flex-col max-w-7xl w-[90%] justify-center items-center my-20 bg-[rgb(1,0,14)] bg-[linear-gradient(292deg, rgba(1,0,14,1) 0%, rgba(3,13,22,1) 81%, rgba(3,16,24,1) 100%)]">
        <div className="mx-auto w-[60px] h-[60px] rounded-full bg-[rgb(37,37,37)]  bg-[linear-gradient(126deg, rgba(1,0,14,1) 0%, rgba(58,58,58,1) 44%, rgba(0,0,1,1) 100%, rgba(3,16,24,1) 100%)] flex justify-center items-center">
          <Image src={vercel} width={30} height={30} alt="image"/>
        </div>
        <p className="text-2xl w-[90%] md:w-[40%] mx-auto text-center text-white mt-6">
          Resend is transforming email for developers. Simple interface, easy
          integrations, handy templates. What else could we ask for.
        </p>
        <div className="mt-6 flex w-[200px] mx-auto justify-center items-center">
          <div className="overflow-hidden mx-auto w-[40px] h-[40px] rounded-full bg-[rgb(37,37,37)]  bg-[linear-gradient(126deg, rgba(1,0,14,1) 0%, rgba(58,58,58,1) 44%, rgba(0,0,1,1) 100%, rgba(3,16,24,1) 100%)] flex justify-center items-center">
            <Image src={vercel_owner} width={40} height={40} alt="Image"/>
          </div>
          <div className="flex flex-col ">
            <p>Guillermo Rauch</p>
            <p className="text-sm text-gray-500">CEO at Vercel</p>
          </div>
        </div>
      </section>
      <section className="flex-col-reverse lg:flex-row max-w-7xl items-center my-24 ">
        <video
          autoPlay
          loop
          muted
          playsInline
          className=" md:w-[190px] md:h-[190px] w-[120px] h-[120px] object-cover mx-auto "
        >
          <source src="/3d-earth.mp4" />
        </video>
        <h3 className="text-5xl w-[60%] mx-auto text-[#EDEDED] my-6 text-center">
          Everything in your control
        </h3>
        <p className="text-center w-[60%] text-sm md:text-base mx-auto text-[#90959A]">
          All the features you need to manage your email sending, troubleshoot
          with detailed logs, and protect your domain reputation – without the
          friction.
        </p>

        <ButtonGroup />
      </section>
      <section className="flex-col-reverse lg:flex-row max-w-7xl items-center my-24 ">
        <h3 className="text-5xl text-center w-[60%] mx-auto text-[#EDEDED] my-6">
          Beyond expectations
        </h3>
        <p className="text-center w-[60%] text-sm md:text-base mx-auto text-[#90959A]">
          Resend is driving remarkable developer experiences that enable success
          stories, empower businesses, and fuel growth across industries and
          individuals.
        </p>

        <Carousal />
      </section>
      <section className="flex-col-reverse lg:flex-row max-w-7xl items-center my-20 ">
        <h3 className="text-5xl w-[80%] mx-auto text-[#EDEDED] my-4 text-center">
          Email reimagined.      Available today.
        </h3>
        <div className="flex flex-col md:flex-row  my-6 justify-center p-6 md:p-0 w-full">
          <GetStartedButton className="h-[46px] px-9  bg-white hover:bg-white/40 ">
            Get Started
          </GetStartedButton>
          <GetStartedButton className="bg-transparent mt-4 md:mt-0 text-center hover:text-white text-slate-600 md:ml-4 h-[46px] px-9 text-lg ">
            Contact Us
          </GetStartedButton>
        </div>
      </section>
    </main>
  );
}
