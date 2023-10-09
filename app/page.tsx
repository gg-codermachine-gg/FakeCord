"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

import DisPic from "../public/assets/images/images.jpg";
import plusIcon from "../public/assets/SVGs/plusIcon.svg";

import { DiscordBTN } from "@/components/home/DiscordBTN";
import { OptionsButtons } from "@/components/home/OptionsButtons";
import { Search } from "@/components/home/Search";
import { UserProfile } from "@/components/home//UserProfile";
import { Navigation } from "@/components/home//Navigation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row  bg-dark-gray">
      <ServersList />
      <Screen />
      <Messages />
    </main>
  );
}

function ServersList() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleMouseWheel = (e: WheelEvent) => {
    const container = containerRef.current;
    if (container) {
      container.scrollTop += e.deltaY;
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      // Add event listener for mouse wheel
      container.addEventListener("wheel", handleMouseWheel);

      return () => {
        // Remove the event listener when the component unmounts
        container.removeEventListener("wheel", handleMouseWheel);
      };
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-col min-h-[20rem] w-[4.25rem] bg-dark-gray items-center mt-1 gap-2 overflow-y-auto"
    >
      <DiscordBTN />

      <div className="relative top-2 flex flex-col gap-3 ">
        <Image
          src={DisPic}
          alt="sever_pfp"
          width={48}
          height={48}
          className="rounded-full"
        />
        <Image
          src={DisPic}
          alt="sever_pfp"
          width={48}
          height={48}
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col gap-2">
        <button className="w-12 h-12 flex justify-center items-center p-4 bg-middle-gray rounded-full mt-3 text-green hover:bg-green hover:rounded-[0.85rem]  hover:text-white transtion duration-[170ms] ease-in">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="hover:text-w"
          >
            <path d="M9 0H7V7H0V9H7V16H9V9H16V7H9V0Z" fill="currentColor" />
          </svg>
        </button>
        <button className="w-12 h-12 flex justify-center items-center p-4 bg-middle-gray rounded-full hover:bg-green hover:rounded-[0.85rem] text-green hover:text-white transtion duration-[170ms] ease-in">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M10 8.9C9.39 8.9 8.9 9.39 8.9 10C8.9 10.61 9.39 11.1 10 11.1C10.61 11.1 11.1 10.61 11.1 10C11.1 9.39 10.61 8.9 10 8.9ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM12.19 12.19L4 16L7.81 7.81L16 4L12.19 12.19Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

function Screen() {
  return (
    <div className="flex flex-col gap-[2px]">
      <Search />
      <DirectMessges />
    </div>
  );
}

function DirectMessges() {
  return (
    <div className="bg-middle-gray w-[15rem] min-h-[54.8rem] flex flex-col items-center ">
      <OptionsButtons />
      <FriendsList />
      <div className="h-[5rem] bg-red-500"></div>
    </div>
  );
}

// FriendsList component
function FriendsList() {
  return (
    <div className="h-[47.3rem] flex flex-col items-center relative top-[1.19rem] gap-4">
      <div className="flex flex-row gap-7 h-6 w-full pl-3">
        <h1 className="text-textColor text-sm font-bold tracking-tight mt-[.3rem] w-[9rem] hover:text-slate-200 transition duration-400ms">
          DIRECT MESSAGES
        </h1>
        <button className="mt-1 mr-3 w-8 ">
          <Image
            src="/assets/SVGs/plusIcon.svg"
            alt="My Icon"
            width={15}
            height={15}
            className="hover:opacity-70 text-textColor"
          />
        </button>
      </div>
      <div className="w-full h-[90%] overflow-y-auto flex flex-col ml-7">
        <UserProfile
          name="Nelly"
          status="Playing GTA V"
          profileImageUrl="/assets/images/images.jpg"
          TextColor="text-textColor"
        />
      </div>
    </div>
  );
}

function Messages({}) {
  return (
    <div className="w-[90%] bg-light-gray flex-col">
      <Navigation />
      <Friends />
    </div>
  );
}

function Friends() {
  return (
    <div className="w-full h-full flex flex-col">
      <FriendsUsers />
    </div>
  );
}
function FriendsUsers() {
  return (
    <div className="relative top-2 p-3 flex flex-col gap-4">
      <div className="w-[90%] h-[0.12rem] bg-[#42454A]"></div>
      <UserProfile
        name="Nelly"
        status="Playing GTA V"
        profileImageUrl="/assets/images/images.jpg"
        TextColor="text-white"
      />
    </div>
  );
}
