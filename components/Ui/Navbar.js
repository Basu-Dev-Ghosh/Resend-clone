import Logo from "./Logo";
import Link from "next/link";
import MobileNav from "./MobileNav";
import GetStartedButton from "./GetStartedButton";
export default function Navbar() {
  return (
    <nav className="pt-2 z-30 sticky top-0 border-b border-transparent md:backdrop-blur-sm bg-black md:bg-transparent transition duration-200 ease-in-out border-white/10  bg-black/50 md:backdrop-blur-md animate-header-slide-down-fade">
      <div className="md:max-w-7xl mx-auto w-full max-w-5xl px-6 h-[58px] hidden md:flex justify-between items-center">
        <Link href="/" className="lg:w-[180px] pt-10 lg:pt-0">
          <Logo />
        </Link>
        <div className="flex items-center gap-8 text-[rgb(120,125,129)] mx-auto text-sm font-medium">
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
          <button className="text-[rgb(120,125,129)]  hover:text-slate-50 transition ease-in-out duration-150 font-bold">
            Sign in
          </button>
          <GetStartedButton className="ml-4 bg-white">
            Get Started
          </GetStartedButton>
        </div>
      </div>
      <MobileNav />
    </nav>
  );
}
