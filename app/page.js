import dynamic from 'next/dynamic'

const Hero=dynamic(()=>import("@/components/Pages/Home__Page/Sections/Hero"), {
  loading: () => <p>Loading...</p>,
})
const Customers=dynamic(()=>import("@/components/Pages/Home__Page/Sections/Customers"), {
  loading: () => <p>Loading...</p>,
})
const Codes=dynamic(()=>import("@/components/Pages/Home__Page/Sections/Codes"), {
  loading: () => <p>Loading...</p>,
})
const Exprience=dynamic(()=>import("@/components/Pages/Home__Page/Sections/Exprience"), {
  loading: () => <p>Loading...</p>,
})
const Emails=dynamic(()=>import("@/components/Pages/Home__Page/Sections/Emails"), {
  loading: () => <p>Loading...</p>,
})
const Services=dynamic(()=>import("@/components/Pages/Home__Page/Sections/Services"), {
  loading: () => <p>Loading...</p>,
})
const Quote=dynamic(()=>import("@/components/Pages/Home__Page/Sections/Quote"), {
  loading: () => <p>Loading...</p>,
})
const Features=dynamic(()=>import("@/components/Pages/Home__Page/Sections/Features"), {
  loading: () => <p>Loading...</p>,
})
const Feedbacks=dynamic(()=>import("@/components/Pages/Home__Page/Sections/Feedbacks"), {
  loading: () => <p>Loading...</p>,
})
const Get_Started=dynamic(()=>import("@/components/Pages/Home__Page/Sections/Get_Started"), {
  loading: () => <p>Loading...</p>,
})

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Hero />
      <hr className="my-10 md:mt-0" />
      <Customers />
      <Codes />
      <Exprience />
      <Emails />
      <Services />
      <Quote />
      <Features />
      <Feedbacks />
      <Get_Started />
    </main>
  );
}
