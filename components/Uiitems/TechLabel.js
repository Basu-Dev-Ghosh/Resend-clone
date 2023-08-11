"use client";

export default function TechLabel({
  item: { icon, name, label },
  setLanguage,
}) {
  return (
    <div className="mt-2 mx-2 md:mt-0">
      <input
        key={name}
        className={`peer/${name} hidden`}
        type="radio"
        id={name}
        value={name}
        name="techs"
        onChange={(e) => setLanguage(e.target.value)}
      />
      <label
        key={name}
        htmlFor={`${name}`}
        className={` text-[#92979C] hover:text-[#ffffff] peer-checked/${name}:text-[#feb460] transition-all duration-300 ease-in-out`}
      >
        <div
          className={`p-6 border rounded-xl  border-[#4b4b4ba6] w-16 flex justify-center items-center `}
        >
          {icon}
        </div>
        <p className="mt-2 text-sm ">{label}</p>
      </label>
    </div>
  );
}
