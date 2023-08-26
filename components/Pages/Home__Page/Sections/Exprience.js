import dynamic from 'next/dynamic'
const TestCheck=dynamic(()=>import("@/components/Pages/Home__Page/Components/TestCheck"), {
  loading: () => <p>Loading...</p>,
})
const TestCheck2=dynamic(()=>import("@/components/Pages/Home__Page/Components/TestCheck2"), {
  loading: () => <p>Loading...</p>,
})
const TestCard=dynamic(()=>import("@/components/Pages/Home__Page/Components/TestCard"), {
  loading: () => <p>Loading...</p>,
})

import { GiAcid } from "react-icons/gi";
import { BsCircleSquare } from "react-icons/bs";
export default function Exprience() {
  return (
    <section className="flex-col-reverse lg:flex-row max-w-7xl items-center my-20 md:p-8">
      <div className="w-full">
        <div className="text-5xl text-center md:text-left  md:text-6xl text-[#EDEDED] my-4 flex flex-col">
          <span>First-class</span> <span>developer experience</span>
        </div>
        <p className="text-[#93989D] w-[80%] md:w-full text-center md:text-left mx-auto md:mx-0">
          We are a team of engineers who love building tools for other engineers
          Our goal is to create the email platform weve always wished we had one
          that just works.
        </p>
      </div>
      <div className="flex mt-6 flex-col lg:flex-row">
        <div className="flex flex-col mx-auto md:mx-0  md:w-full md:mb-4 lg:mb-0">
          <TestCheck />
          <TestCard
            heading="Test Mode"
            content="Simulate events and experiment with our API without the risk of accidentally sending real emails to real people."
            isButton={true}
          >
            <GiAcid className="my-3" />
          </TestCard>
        </div>
        <div className="flex flex-col mx-auto md:mx-0 mt-10 md:mt-0 md:w-full">
          <TestCheck2 />
          <TestCard
            heading="Modular Webhooks"
            content="Receive real-time notifications directly to your server. Every time an email is delivered, opened, bounces, or a link is clicked."
            isButton={true}
          >
            <BsCircleSquare className="my-3" />
          </TestCard>
        </div>
      </div>
    </section>
  );
}
