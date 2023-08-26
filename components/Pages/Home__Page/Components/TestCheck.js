"use client";
import { useState, useEffect } from "react";
import styles from "styles/ui.module.css";
import Dropdown from "./Dropdown";
import { GiWineGlass } from "react-icons/gi";
import { AnimatePresence, motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";
export default function TestCheck() {
  const [item1, setItem1] = useState([uuidv4()]);

  function AddItem() {
    setItem1((old) => [...old, uuidv4()]);
  }
  useEffect(() => {
    let myInterval = setInterval(() => {
      AddItem();
    }, 3000);
    let myInterval2 = setInterval(() => {
      setItem1([uuidv4()]);
    }, 500000);
    return () => {
      clearInterval(myInterval);
      clearInterval(myInterval2);
    };
  }, []);
  return (
    <div className={styles.testCheck}>
      <div className="bg-gradient-to-b flex justify-between md:justify-center items-center from-[#303030e9] to-[#000] py-1  rounded-lg w-full md:w-[75%] mx-auto text-center">
        <Dropdown />
        <button
          className="flex justify-center items-center my-1 mr-10 bg-black px-4 py-2 rounded-2xl text-[.7rem] border border-gray-700"
          onClick={AddItem}
        >
          <GiWineGlass className="mr-2" />
          Send
        </button>
      </div>
      <div className="mt-6 flex flex-col h-[100px] overflow-hidden mx-auto">
        <AnimatePresence>
          {[...item1].reverse().map((item, index) => {
            return (
              <motion.p
                layout
                key={item}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  bounce: 0.3,
                  opacity: { delay: 0.1 },
                }}
                exit={{ height: 0, opacity: 0 }}
                className=" text-[.45rem] md:text-[.6rem] text-center my-3 text-[#7c7c7e] relative"
              >
                {'HTTP 200:"id": "544c5aee-bcc2-4f92-89fa-2892152eace0"'}
              </motion.p>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
