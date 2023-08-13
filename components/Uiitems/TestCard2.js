import { BsCircleSquare } from "react-icons/bs";
export default function TestCard() {
  return (
    <div className="flex flex-col w-[54%] mt-4 ml-6 md:ml-0">
      <BsCircleSquare className="my-2" />
      <p className="my-2">Modular Webhooks</p>
      <p className="my-2 text-sm text-[#7c7c7e]">
        Receive real-time notifications directly to your server. Every time an
        email is delivered, opened, bounces, or a link is clicked.
      </p>
      <button className="my-2 text-left text-[#6b6c6f] hover:text-white transition duration-300 ease-in-out">
        Learn more
      </button>
    </div>
  );
}
