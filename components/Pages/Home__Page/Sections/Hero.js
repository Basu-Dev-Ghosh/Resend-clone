"use client"
import dynamic from 'next/dynamic'
import styles from "styles/ui.module.css";
import { MdKeyboardArrowRight } from "react-icons/md";
const GetStartedButton=dynamic(()=>import("@/components/Pages/Home__Page/Components/GetStartedButton"), {
  loading: () => <p>Loading...</p>,
})
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row max-w-7xl items-center md:items-start lg:items-center p-8 md:mt-10 lg:mt-0">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ opacity: 1 }}
        transition={{ ease: [0.17, 0.67, 0.83, 0.67] ,duration: 0.8}}
        className="flex-col text-center md:text-left justify-center  items-center md:w-[50%] lg:w-auto"
      >
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
          The best API to reach humans instead of spam folders. Build, test, and
          deliver transactional emails at scale.
        </p>
        <div className="flex flex-col md:flex-row mx-4 md:mx-0">
          <GetStartedButton className="h-[46px] px-9  bg-white hover:bg-white/40">
            Get Started
          </GetStartedButton>
          <GetStartedButton className="bg-transparent mt-4 md:mt-0 text-center hover:text-white text-slate-600 md:ml-4 h-[46px] px-9 text-lg">
            Documentation
          </GetStartedButton>
        </div>
      </motion.div>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="lg:w-[640px] lg:h-[640px] w-[200px] h-[200px] md:w-[340px] md:h-[340px] object-cover md:ml-10"
      >
        <source src="/cube.mp4" />
      </video>
    </section>
  );
}
