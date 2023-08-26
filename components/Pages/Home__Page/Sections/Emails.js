import dynamic from 'next/dynamic'
const GetStartedButton=dynamic(()=>import("@/components/Pages/Home__Page/Components/GetStartedButton"), {
  loading: () => <p>Loading...</p>,
})
const DocSection=dynamic(()=>import("@/components/Pages/Home__Page/Components/DocSection"), {
  loading: () => <p>Loading...</p>,
})

export default function Emails() {
  return (
    <section className="flex-col-reverse lg:flex-row max-w-7xl items-center my-20 p-8">
      <video
        autoPlay
        loop
        muted
        playsInline
        className=" md:w-[130px] md:h-[130px] w-[120px] h-[120px] object-cover mx-auto "
      >
        <source src="/3d-react.mp4" />
      </video>
      <h3 className="text-5xl w-[60%] mx-auto text-[#EDEDED] my-4 text-center">
        Develop emails using React
      </h3>
      <p className="text-center w-[60%] text-sm md:text-base mx-auto text-[#90959A]">
        Create beautiful templates without having to deal with table layouts and
        HTML. Powered by react-email, our open source component library.
      </p>
      <div className="flex flex-col md:flex-row  my-6 justify-center p-6 md:p-0 w-full">
        <GetStartedButton className="h-[46px] px-9  bg-white hover:bg-white/40 ">
          Get Started
        </GetStartedButton>
        <GetStartedButton className="bg-transparent mt-4 md:mt-0 text-center hover:text-white text-slate-600 md:ml-4 h-[46px] px-9 text-lg ">
          Check the Docs
        </GetStartedButton>
      </div>
      <DocSection />
    </section>
  );
}
