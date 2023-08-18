
export default function TestCard({ heading, icon,content, children,isButton }) {
  return (
    <div className="flex flex-col w-[74%] mt-4 ml-6 md:ml-0">
      {children}
      <p className="my-2">{heading}</p>
      <p className="my-2 text-sm text-[#7c7c7e]">{content}</p>
     {
      isButton ?<button className="my-2 text-left text-[#6b6c6f] hover:text-white transition duration-300 ease-in-out">
      Learn more
    </button> :null
     } 
    </div>
  );
}
