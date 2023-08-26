import dynamic from 'next/dynamic'
const Carousal=dynamic(()=>import("@/components/Pages/Home__Page/Components/Carousal"), {
    loading: () => <p>Loading...</p>,
  })

export default function Feedbacks() {
  return (
    <section className="flex-col-reverse lg:flex-row max-w-7xl items-center overflow-hidden p-8">
      <h3 className="text-5xl text-center w-[60%] mx-auto text-[#EDEDED] my-6">
        Beyond expectations
      </h3>
      <p className="text-center w-[60%] text-sm md:text-base mx-auto text-[#90959A]">
        Resend is driving remarkable developer experiences that enable success
        stories.
      </p>

      <Carousal />
    </section>
  );
}
