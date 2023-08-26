"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

function Option({ type }) {
  return (
    <>
      {type === "delivered" && (
        <>
          <span className="bg-[#1B3129] text-green-400 px-2 py-1 rounded-md mr-2 hidden md:inline">
            Delivered
          </span>
          <span>delivered@resend.dev</span>
        </>
      )}
      {type === "bounced" && (
        <>
          <span className="bg-[#481A1D] text-[#F76066] px-2 py-1 rounded-md mr-2 hidden md:inline">
            Bounced
          </span>
          <span>delivered@resend.dev</span>
        </>
      )}
      {type === "complained" && (
        <>
          <span className="bg-[#2B1700] text-[#be8f38] px-2 py-1 rounded-md mr-2 hidden md:inline">
            Complained
          </span>
          <span>delivered@resend.dev</span>
        </>
      )}
    </>
  );
}

export default function Dropdown() {
  let [type, setType] = useState("delivered");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="default"
          className="bg-dark hover:bg-dark focus-visible:border-0 outline-none"
        >
          <Option type={type} />
          <MdKeyboardArrowDown className="ml-2" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-auto bg-black text-white border-0">
        <DropdownMenuRadioGroup
          value="delivered"
          className="text-white rounded-md border border-[#60606089] p-0"
          onValueChange={setType}
        >
          <DropdownMenuRadioItem
            value={"delivered"}
            className="hover:bg-[#101010]"
          >
            {" "}
            <Option type="delivered" />
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value={"bounced"}
            className="hover:bg-[#101010]"
          >
            {" "}
            <Option type="bounced" />
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value={"complained"}
            className="hover:bg-[#101010]"
          >
            {" "}
            <Option type="complained" />
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
