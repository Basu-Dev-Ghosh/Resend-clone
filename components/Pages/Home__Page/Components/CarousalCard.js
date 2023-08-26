import { vercel,vercel_owner } from "@/public/images";
import Image from "next/image";
export default function CarousalCard() {
  return (
    <div className="w-[320px] h-[250px] md:w-[370px] flex flex-col items-center bg-[#0B0B0B] rounded-lg border border-gray-800 mx-6 px-6">
      <p className="mt-6 w-[90%] text-sm text-gray-400">&quot;Ive used maligon. Resend is transforming email for developers. Simple interface, easy integrations, handy templates. What else could we ask for.hat else could we ask for&quot;</p>
      <div className="flex items-center justify-center w-[90%] mt-4">
      <div className="flex items-center">
      <Image src={vercel} width={30} height={30} className="rounded-lg" alt="vercel"/>
      <Image src={vercel_owner} width={30} height={30} className="rounded-lg" alt="vercel owner"/>
      </div>
       <div className="flex flex-col ml-8">
       <p>Ty-Sharp</p>
       <p className="text-xs text-gray-400">Co-founder of VBercel</p>
       </div>
      </div>
    </div>
  );
}
