"use client";
import styles from "styles/ui.module.css";
import { PiChartBarLight } from "react-icons/pi";
import { MdOutlineMail } from "react-icons/md";
import { RiEarthFill } from "react-icons/ri";
import Image from "next/image";
import { pic1, pic2, pic3 } from "public/images";
import { useState } from "react";
export default function ButtonGroup() {
  const [image, setImage] = useState(1);
  return (
    <>
      <div className="my-10 flex flex-col lg:flex-row items-center justify-between w-full p-6 lg:p-0">
        <button
          className={`${styles.animated_button} ${image===1 ? 'before:animate-border after:animate-border' :''} flex justify-start items-center my-4 lg:my-0 w-full lg:w-[300px]`}
          onClick={() => setImage(1)}
        >
          <span className="h-[30px] px-2 mx-2 rounded-lg border border-gray-600 flex justify-center items-center">
            <PiChartBarLight />
          </span>
          Intuitive analytics
        </button>
        <button
          className={`${styles.animated_button} ${image===2 ? 'before:animate-border after:animate-border' :''} flex justify-start items-center my-4 lg:my-0 w-full lg:w-[300px]`}
          onClick={() => setImage(2)}
        >
          <span className="h-[30px] px-2 mx-2 rounded-lg border border-gray-600 flex justify-center items-center">
            <MdOutlineMail />
          </span>
          Full Visibility
        </button>
        <button
          className={`${styles.animated_button} ${image===3 ? 'before:animate-border after:animate-border' :''} flex justify-start items-center mt-4 lg:my-0 mb-0 w-full lg:w-[300px]`}
          onClick={() => setImage(3)}
        >
          <span className="h-[30px] px-2 mx-2 rounded-lg border border-gray-600 flex justify-center items-center">
            <RiEarthFill />
          </span>
          Domain Authentication
        </button>
      </div>
      <div className="w-[100%] relative h-[300px] md:h-[600px] mx-auto flex justify-center items-center p-10 md:p-0">
        {image === 1 ? (
          <Image
            src={pic1}
            fill={true}
            className="object-contain w-full h-full"
            alt="image"
          />
        ) : null}
        {image === 2 ? (
          <Image
            src={pic2}
            fill={true}
            className="object-contain w-full h-full"
            alt="image"
          />
        ) : null}
        {image === 3 ? (
          <Image
            src={pic3}
            fill={true}
            className="object-contain w-full h-full"
            alt="image"
          />
        ) : null}
      </div>
    </>
  );
}
