import { GiAcid } from "react-icons/gi";
export default function TestCard() {
  return (
    <div className="flex flex-col w-[44%] mt-4 ml-6 md:ml-0">
      <GiAcid className="my-2" />
      <p className="my-2">Test Mode</p>
      <p className="my-2 text-sm text-[#7c7c7e]">
        Simulate events and experiment with our API without the risk of
        accidentally sending real emails to real people.
      </p>
      <button className="my-2 text-left text-[#6b6c6f] hover:text-white transition duration-300 ease-in-out">
        Learn more
      </button>
    </div>
  );
}
