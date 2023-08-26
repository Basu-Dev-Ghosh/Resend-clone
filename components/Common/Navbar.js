"use client";

import Logo from "@/components/Pages/Home__Page/Components/Logo";
import Link from "next/link";
import MobileNav from "@/components/Pages/Home__Page/Components/MobileNav";
import GetStartedButton from "@/components/Pages/Home__Page/Components/GetStartedButton";
import { motion } from "framer-motion";
export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{opacity:1}}
      transition={{ ease: [0.17, 0.67, 0.83, 0.67],duration: 0.8 }}
      className="pt-2 w-full z-30 sticky top-0 border-b border-transparent md:backdrop-blur-sm bg-black md:bg-transparent transition duration-200 ease-in-out border-white/10  bg-black/50 md:backdrop-blur-md animate-header-slide-down-fade"
    >
      <div className="md:max-w-ful lg:max-w-7xl mx-auto w-full px-6 h-[58px] hidden md:flex flex-row justify-between items-center">
        <Link href="/" className="w-[100px] lg:w-[180px] pt-10 md:pt-0">
          <Logo />
        </Link>
        <div className="flex items-center md:gap-4 lg:gap-6 text-[rgb(120,125,129)] mx-auto text-sm font-bold">
          <Link
            href="/about"
            className="hover:text-slate-50 transition ease-in-out duration-150"
          >
            About
          </Link>
          <Link
            href="/blog"
            className="hover:text-slate-50 transition ease-in-out duration-150"
          >
            Blog
          </Link>
          <Link
            href="/customers"
            className="hover:text-slate-50 transition ease-in-out duration-150"
          >
            Customers
          </Link>
          <Link
            href="/pricing"
            className="hover:text-slate-50 transition ease-in-out duration-150"
          >
            Pricing
          </Link>
          <Link
            href="/enterprice"
            className="hover:text-slate-50 transition ease-in-out duration-150"
          >
            Enterprice
          </Link>
          <Link
            href="/changelog"
            className="hover:text-slate-50 transition ease-in-out duration-150"
          >
            Changelog
          </Link>
          <Link
            href="/docs"
            className="hover:text-slate-50 transition ease-in-out duration-150"
          >
            Docs
          </Link>
        </div>
        <div className="gap-4 flex">
          <button className="text-[rgb(120,125,129)]  hover:text-slate-50 transition ease-in-out duration-150 font-bold md:hidden lg:inline-block">
            Sign in
          </button>
          <GetStartedButton className="ml-4 bg-white w-fit">
            Get Started
          </GetStartedButton>
        </div>
      </div>
      <MobileNav />
    </motion.nav>
  );
}
