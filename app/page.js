"use client";

import { useState } from "react";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import CustomCarousel from "@/components/CustomCarousel";
import Input from "@/components/Input";

const HomePage = () => {
  const router = useRouter();
  const [roomID, setRoomID] = useState("");
  const handleJoin = () => {
    if (!roomID) return;
    router.push(`/room/${roomID}`);
  };
  return (
    <div>
      <Navbar />

      <div className="flex max-lg:flex-col items-center justify-between w-full p-5 sm:p-20 gap-10 mt-6">
        <div className="w-full ">
          <h1 className="max-sm:text-3xl text-5xl h-30 text-[#1f1f1f] max-sm:text-center font-medium">
            Video calls and meetings <br className="sm:hidden"/> for everyone.

            <br />
            <span className="text-[#444746] text-3xl max-sm:text-xl font-normal "> Connect, collaborate and celebrate from anywhere with Neo Meet
            </span>
          </h1>

          <div className="mt-10 flex gap-5 max-sm:flex-col">
            <div className="flex items-center sm:w-fit border border-blue-600 rounded p-1 px-2 w-full focus-within:ring-2 ring-blue-600 font-mono">
              <Image src="/file.svg" alt="..." width={20} height={20} />
              <Input setRoomID={setRoomID}/>
            </div>

            <button
              onClick={handleJoin}
              className="px-10 py-2.5  mt-0 bg-blue-700 rounded-md hover:bg-blue-900 transition-all duration-200 block outline-none text-white text-lg"
            >
              Join
            </button>
            
          </div>

          <hr className="w-full mt-9 border-gray-600" />
        </div>

        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 w-full">
          <CustomCarousel />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
