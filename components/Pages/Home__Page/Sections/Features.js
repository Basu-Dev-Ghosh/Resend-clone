import dynamic from 'next/dynamic'
const ButtonGroup=dynamic(()=>import("@/components/Pages/Home__Page/Components/ButtonGroup"), {
  loading: () => <p>Loading...</p>,
})
export default function Features() {
  return (
    <section className="flex-col-reverse lg:flex-row max-w-7xl items-center my-24 md:p-8">
      <video
        autoPlay
        loop
        muted
        playsInline
        className=" md:w-[190px] md:h-[190px] w-[120px] h-[120px] object-cover mx-auto "
      >
        <source src="/3d-earth.mp4" />
      </video>
      <h3 className="text-5xl w-[60%] mx-auto text-[#EDEDED] my-6 text-center">
        Everything in your control
      </h3>
      <p className="text-center w-[60%] text-sm md:text-base mx-auto text-[#90959A]">
        All the features you need to manage your email sending, troubleshoot
        with detailed logs, and protect your domain reputation – without the
        friction.
      </p>

      <ButtonGroup />
    </section>
  );
}
