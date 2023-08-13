"use client";
import { useState, useEffect } from "react";
import styles from "styles/ui.module.css";
import { CiWarning } from "react-icons/ci";
import { AiOutlineClockCircle } from "react-icons/ai";
import { PiWarningCircleBold } from "react-icons/pi";
import { TiTick } from "react-icons/ti";
import { AnimatePresence, motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";
export default function TestCheck() {
  const [item1, setItem1] = useState([{ key: uuidv4(), id: 1 }]);

  function AddItem(x) {
    console.log(x);
    setItem1((old) => [...old, { key: uuidv4(), id: Math.trunc(x) }]);
  }
  function getCurrentDateTime() {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const now = new Date();
    const day = now.getDate().toString().padStart(2, "0");
    const month = months[now.getMonth()];
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");

    const formattedDateTime = `${day} ${month} ${hours}:${minutes}:${seconds}`;
    return formattedDateTime;
  }
  useEffect(() => {
    let myInterval = setInterval(() => {
      let x = Math.random() * 3;
      AddItem(x);
    }, 3000);
    let myInterval2 = setInterval(() => {
      setItem1([{ key: uuidv4(), id: 0 }]);
    }, 500000);
    return () => {
      clearInterval(myInterval);
      clearInterval(myInterval2);
    };
  }, []);
  let icons = [
    <CiWarning className="text-red-400 text-lg" key={1} />,
    <TiTick className="text-green-500 text-lg" key={2} />,
    <PiWarningCircleBold className="text-[#be8f38] text-lg" key={3} />,
  ];
  let text = ["Bounced", "Success", "Complained"];
  let bg = [
    "bg-[#481A1D] text-[#F76066]",
    "bg-[#1B3129] text-green-400",
    "bg-[#2B1700] text-[#be8f38]",
  ];

  return (
    <div className={styles.testCheck2}>
      <div className="-mt-8 flex flex-col h-full w-[95%] overflow-hidden mx-auto">
        <AnimatePresence>
          {[...item1].reverse().map((item, index) => {
            return (
              <motion.div
                layout
                key={item.key}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 10 }}
                transition={{
                  type: "spring",
                  bounce: 0.4,
                  opacity: { delay: 0.1 },
                }}
                exit={{ opacity: 0 }}
                className=" flex flex-col items-start ml-10 pl-20 py-4 text-[.7rem] md:text-[.8rem] text-center  text-[#7c7c7e] relative w-full h-auto border-l-[1px] border-gray-500"
              >
                <div className="flex my-3 w-full items-center">
                  <span className={`${bg[item.id]} px-2 py-1 rounded-md mr-2 `}>
                    {text[item.id]}
                  </span>
                  <span className="flex justify-center items-center ml-8">
                    <AiOutlineClockCircle className="mr-1 mt-1" />
                    {getCurrentDateTime()}
                  </span>
                </div>
                <p className="my-3">
                  From{" "}
                  <span className="bg-gradient-to-b from-[#303030e9] to-[#000] py-1 px-2 rounded-lg text-white">
                    noah@yahoo.com
                  </span>{" "}
                  with feedback{" "}
                  <span className="bg-gradient-to-b from-[#303030e9] to-[#000] py-1 px-2 rounded-lg text-white">
                    spam
                  </span>
                </p>
                <p>
                  on agent{" "}
                  <span className="bg-gradient-to-b from-[#303030e9] to-[#000] py-1 px-2 rounded-lg text-white">
                    Gmail
                  </span>{" "}
                  running on{" "}
                  <span className="bg-gradient-to-b from-[#303030e9] to-[#000] py-1 px-2 rounded-lg text-white">
                    Windows
                  </span>
                </p>
                <span className="bg-gradient-to-b from-[#303030e9] to-[#000] p-2 flex justify-center items-center rounded-lg w-[30px] h-[30px] absolute top-6 -left-3">
                  {icons[item.id]}
                </span>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
