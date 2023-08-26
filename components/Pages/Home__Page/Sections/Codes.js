import dynamic from 'next/dynamic'
import Image from "next/image";
import { inbox } from "public/images/index.js";
const CodeViewer=dynamic(()=>import("@/components/Pages/Home__Page/Components/CodeViewer"), {
  loading: () => <p>Loading...</p>,
})

export default function Codes() {
  return (
    <section className="flex-col-reverse lg:flex-row max-w-7xl items-center lg:my-52 my-10 md:p-8">
      <div className="flex-col mx-auto w-full text-center justify-center items-center">
        <Image
          src={inbox}
          className="mx-auto"
          width={200}
          height={200}
          alt="image1"
        />
        <h3 className="text-5xl md:text-5xl text-[#EDEDED] my-4">
          Integrate <span className="text-[#FD9A2B]">this afternoon</span>
        </h3>
        <p className="text-base md:text-lg w-[90%] md:w-[56%] text-[#90959A] mx-auto text-center">
          A simple, elegant interface so you can start sending emails in
          minutes. It fits right into your code with SDKs for your favorite
          programming languages.
        </p>
      </div>
      <CodeViewer />
    </section>
  );
}
