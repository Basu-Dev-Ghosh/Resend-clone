import Image from "next/image";
import {
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
  } from "public/images/index.js";

export default function Customers() {
  return (
    <section className="flex-col-reverse lg:flex-row max-w-7xl items-center my-6 md:p-8">
      <p className="text-[#93989D] text-lg text-wrap mx-auto text-center w-96 mb-16">
        Companies of all sizes trust Resend to deliver their most important
        emails.
      </p>
      <div className="flex flex-wrap  items-center justify-around mx-auto  w-[80%] ">
        <Image
          src={image7}
          className="m-4 lg:m-0"
          width={100}
          height={100}
          alt="image1"
        />
        <Image
          src={image8}
          className="m-4 lg:m-0"
          width={100}
          height={100}
          alt="image1"
        />
        <Image
          src={image9}
          className="m-4 lg:m-0"
          width={100}
          height={100}
          alt="image1"
        />
        <Image
          src={image10}
          className="m-4 lg:m-0"
          width={100}
          height={100}
          alt="image1"
        />
        <Image
          src={image11}
          className="m-4 lg:m-0"
          width={100}
          height={100}
          alt="image1"
        />
        <Image
          src={image12}
          className="m-4 lg:m-0"
          width={100}
          height={100}
          alt="image1"
        />
      </div>
      <div className="flex-wrap items-center justify-around mt-14 mx-auto w-full hidden lg:flex">
        <Image
          src={image1}
          className="mx-8"
          width={100}
          height={100}
          alt="image1"
        />
        <Image
          src={image2}
          className="mx-8"
          width={100}
          height={100}
          alt="image1"
        />
        <Image
          src={image3}
          className="mx-8"
          width={100}
          height={100}
          alt="image1"
        />
        <Image
          src={image4}
          className="mx-8"
          width={100}
          height={100}
          alt="image1"
        />
        <Image
          src={image5}
          className="mx-8"
          width={100}
          height={100}
          alt="image1"
        />
        <Image
          src={image6}
          className="mx-6"
          width={100}
          height={100}
          alt="image1"
        />
      </div>
    </section>
  );
}
