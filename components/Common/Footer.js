import { BsDot, BsTwitter, BsDiscord } from "react-icons/bs";
import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa";
export default function Footer() {
  return (
    <div className="relative z-20 mt-[9vh] overflow-hidden  bg-black px-10 py-16">
      <footer className="w-full h-full p-10 flex flex-col md:flex-row ">
        <div className="flex flex-col w-full md:w-1/3">
          <p className="text-xs text-slate-500 font-normal my-2">
            2261 Market Street #5039 <br /> San Francisco, CA 94114
          </p>
          <button className="my-2 text-slate-500 px-2 py-1 font-bold hover:text-white max-w-fit text-xs outline-none items-center transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-slate-7 group inline-flex rounded-md bg-[#131415]">
            <BsDot className="text-xl text-green-500" />
            All systems normal
          </button>
          <div className="flex items-center my-2">
            <button className="mr-1 outline-none transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-slate-7 rounded-full bg-[#131415] p-2 flex justify-center items-center">
              <BsTwitter />
            </button>
            <button className="mr-1 outline-none transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-slate-7 rounded-full bg-[#131415] p-2 flex justify-center items-center">
              <FaGithubAlt />
            </button>
            <button className="mr-1 outline-none transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-slate-7 rounded-full bg-[#131415] p-2 flex justify-center items-center">
              <FaLinkedinIn />
            </button>
            <button className="mr-1 outline-none transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-slate-7 rounded-full bg-[#131415] p-2 flex justify-center items-center">
              <BsDiscord />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full md:w-2/3 mt-5 md:mt-0">
          <div className="flex flex-col">
            <h5>Documentation</h5>
            <p className="text-sm text-slate-400 hover:text-white/80 transition duration-300 ease-in-out cursor-pointer mt-4">
              Getting Started
            </p>
            <p className="text-sm text-slate-400 hover:text-white/80 transition duration-300 ease-in-out cursor-pointer mt-4">
              API References
            </p>
            <p className="text-sm text-slate-400 hover:text-white/80 transition duration-300 ease-in-out cursor-pointer mt-4">
              Integrations
            </p>
            <p className="text-sm text-slate-400 hover:text-white/80 transition duration-300 ease-in-out cursor-pointer mt-4">
              Examples
            </p>
            <p className="text-sm text-slate-400 hover:text-white/80 transition duration-300 ease-in-out cursor-pointer mt-4">
              SDKs
            </p>
          </div>
          <div className="flex flex-col">
            <h5>Documentation</h5>
            <p className="text-sm text-slate-400 hover:text-white/80 transition duration-300 ease-in-out cursor-pointer mt-4">
              Getting Started
            </p>
            <p className="text-sm text-slate-400 hover:text-white/80 transition duration-300 ease-in-out cursor-pointer mt-4">
              API References
            </p>
            <p className="text-sm text-slate-400 hover:text-white/80 transition duration-300 ease-in-out cursor-pointer mt-4">
              Integrations
            </p>
            <p className="text-sm text-slate-400 hover:text-white/80 transition duration-300 ease-in-out cursor-pointer mt-4">
              Examples
            </p>
            <p className="text-sm text-slate-400 hover:text-white/80 transition duration-300 ease-in-out cursor-pointer mt-4">
              SDKs
            </p>
          </div>
          <div className="flex flex-col">
            <h5>Documentation</h5>
            <p className="text-sm text-slate-400 hover:text-white/80 transition duration-300 ease-in-out cursor-pointer mt-4">
              Getting Started
            </p>
            <p className="text-sm text-slate-400 hover:text-white/80 transition duration-300 ease-in-out cursor-pointer mt-4">
              API References
            </p>
            <p className="text-sm text-slate-400 hover:text-white/80 transition duration-300 ease-in-out cursor-pointer mt-4">
              Integrations
            </p>
            <p className="text-sm text-slate-400 hover:text-white/80 transition duration-300 ease-in-out cursor-pointer mt-4">
              Examples
            </p>
            <p className="text-sm text-slate-400 hover:text-white/80 transition duration-300 ease-in-out cursor-pointer mt-4">
              SDKs
            </p>
          </div>
          <div className="flex flex-col">
            <h5>Documentation</h5>
            <p className="text-sm text-slate-400 hover:text-white/80 transition duration-300 ease-in-out cursor-pointer mt-4">
              Getting Started
            </p>
            <p className="text-sm text-slate-400 hover:text-white/80 transition duration-300 ease-in-out cursor-pointer mt-4">
              API References
            </p>
            <p className="text-sm text-slate-400 hover:text-white/80 transition duration-300 ease-in-out cursor-pointer mt-4">
              Integrations
            </p>
            <p className="text-sm text-slate-400 hover:text-white/80 transition duration-300 ease-in-out cursor-pointer mt-4">
              Examples
            </p>
            <p className="text-sm text-slate-400 hover:text-white/80 transition duration-300 ease-in-out cursor-pointer mt-4">
              SDKs
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
