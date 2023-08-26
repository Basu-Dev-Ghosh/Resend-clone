import dynamic from 'next/dynamic'
const GetStartedButton=dynamic(()=>import("@/components/Pages/Home__Page/Components/GetStartedButton"), {
    loading: () => <p>Loading...</p>,
  })
export default function Get_Started() {
  return (
    <section className="flex-col-reverse lg:flex-row max-w-7xl items-center my-10 md:p-8">
      <h3 className="text-5xl w-[80%] mx-auto text-[#EDEDED] my-4 text-center">
        Email reimagined. Available today.
      </h3>
      <div className="flex flex-col md:flex-row  my-6 justify-center p-6 md:p-0 w-full">
        <GetStartedButton className="h-[46px] px-9  bg-white hover:bg-white/40 ">
          Get Started
        </GetStartedButton>
        <GetStartedButton className="bg-transparent mt-4 md:mt-0 text-center hover:text-white text-slate-600 md:ml-4 h-[46px] px-9 text-lg ">
          Contact Us
        </GetStartedButton>
      </div>
    </section>
  );
}
