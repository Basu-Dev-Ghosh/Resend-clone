import dynamic from 'next/dynamic'
import { GiAcid } from "react-icons/gi";
const TestCard=dynamic(()=>import("@/components/Pages/Home__Page/Components/TestCard"), {
  loading: () => <p>Loading...</p>,
})
export default function Services() {
  return (
    <section className="flex-col lg:flex-row w-10/12 justify-start items-start my-20 md:p-8 p-3">
      <div className="text-5xl text-left lg:text-6xl text-[#EDEDED] my-4 flex flex-col">
        <span>Reach humans,</span>{" "}
        <span className="text-white/40">not spam folders</span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-1 lg:gap-3 mt-2">
        {new Array(9).fill(0).map((item, index) => {
          return (
            <TestCard
              key={index}
              index={index}
              heading="Test Mode"
              content="Simulate events and experiment with our API without the risk of accidentally sending real emails to real people."
            >
              <GiAcid className="my-3" />
            </TestCard>
          );
        })}
      </div>
    </section>
  );
}
