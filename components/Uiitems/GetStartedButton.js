import { MdKeyboardArrowRight } from "react-icons/md";
export default function GetStartedButton({ ...props }) {
  let { children, className } = props;
  return (
    <button
      {...props}
      className={`  flex items-center justify-center  rounded-3xl h-[40px]  px-3 text-gray-800 hover:bg-white/40 transition ease-in-out duration-150 ${className}`}
    >
      <p className="text-sm font-bold">{children}</p>
      <MdKeyboardArrowRight className="ml-1 text-xs" />
    </button>
  );
}
