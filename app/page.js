import styles from "styles/ui.module.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import GetStartedButton from "@/components/Ui/GetStartedButton";

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
            <GetStartedButton className="h-[46px] px-9">
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
    </main>
  );
}
