"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MdKeyboardArrowDown } from "react-icons/md";

function Option() {
  return (
    <>
      <span className="bg-[#1B3129] text-green-400 px-2 py-1 rounded-md mr-2">
        Delivered
      </span>
      <span>delivered@resend.dev</span>
    </>
  );
}

export default function Dropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="default"
          className="bg-dark hover:bg-dark focus-visible:border-0 outline-none"
        >
          <Option />
          <MdKeyboardArrowDown className="ml-2" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-auto bg-dark text-white border-0">
        <DropdownMenuRadioGroup
          value="top"
          className="text-white rounded-md border border-[#60606089] p-0"
        >
          <DropdownMenuRadioItem value={0} className="hover:bg-[#101010]">
            {" "}
            <Option />
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value={1} className="hover:bg-[#101010]">
            {" "}
            <Option />
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value={2} className="hover:bg-[#101010]">
            {" "}
            <Option />
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
