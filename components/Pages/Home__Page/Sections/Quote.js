import Image from "next/image";
import { vercel, vercel_owner } from "public/images/index.js";
export default function Quote() {
  return (
    <section className="py-10 flex-col max-w-7xl w-[90%] md:p-8 justify-center items-center my-20 bg-[rgb(1,0,14)] bg-[linear-gradient(292deg, rgba(1,0,14,1) 0%, rgba(3,13,22,1) 81%, rgba(3,16,24,1) 100%)]">
      <div className="mx-auto w-[60px] h-[60px] rounded-full bg-[rgb(37,37,37)]  bg-[linear-gradient(126deg, rgba(1,0,14,1) 0%, rgba(58,58,58,1) 44%, rgba(0,0,1,1) 100%, rgba(3,16,24,1) 100%)] flex justify-center items-center">
        <Image src={vercel} width={30} height={30} alt="image" />
      </div>
      <p className="text-2xl w-[90%] md:w-[40%] mx-auto text-center text-white mt-6">
        Resend is transforming email for developers. Simple interface, easy
        integrations, handy templates. What else could we ask for.
      </p>
      <div className="mt-6 flex w-[200px] mx-auto justify-center items-center">
        <div className="overflow-hidden mx-auto w-[40px] h-[40px] rounded-full bg-[rgb(37,37,37)]  bg-[linear-gradient(126deg, rgba(1,0,14,1) 0%, rgba(58,58,58,1) 44%, rgba(0,0,1,1) 100%, rgba(3,16,24,1) 100%)] flex justify-center items-center">
          <Image src={vercel_owner} width={40} height={40} alt="Image" />
        </div>
        <div className="flex flex-col ">
          <p>Guillermo Rauch</p>
          <p className="text-sm text-gray-500">CEO at Vercel</p>
        </div>
      </div>
    </section>
  );
}
