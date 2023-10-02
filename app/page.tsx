"use client"

import Image from "next/image";
import React, { useEffect, useRef } from "react";

import DisPic from "../public/assets/images/images.jpg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row  bg-dark-gray">
      <ServersList />
      <Screen />
    </main>
  );
}

function ServersList() {
  const containerRef = useRef<HTMLDivElement | null> (null);

  const handleMouseWheel = (e: WheelEvent) =>{
    const container = containerRef.current;
    if(container){
      container.scrollTop += e.deltaY;

    }
  }

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
    <div ref={containerRef} className="flex flex-col min-h-[20rem] w-[4.25rem] bg-dark-gray items-center mt-1 gap-2 overflow-y-auto">
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

function Search() {
  return (
    <div className="flex w-[15rem] pt-3 pb-2 flex-col justify-end items-center gap-0.625rem text-[#72767D] bg-middle-gray shadow-bottom">
      <input
        type="text"
        className="w-[13.75rem] h-7 p-3 bg-dark-gray font-medium text-sm tracking-tighter rounded-sm"
        placeholder="Find or start a conversation"
      />
    </div>
  );
}

function OptionsButtons({}) {
  return (
    <div className="flex flex-col w-full h-[5.5rem] items-center p-2">
      <button className="w-[97%]  rounded-[0.31rem] h-[2.625rem] flex flex-row gap-5 text-[1.3rem] font-medium leading-6 tracking-tighter items-center pl-5 text-textColor hover:bg-hoverColor hover:text-white transition ease-out ">
        <span>
          <Image
            src="/assets/SVGs/friendsIcon.svg"
            alt="My Icon"
            width={22}
            height={22}
          />
        </span>
        Friends
      </button>
      <button className="w-[97%]  rounded-sm h-[2.625rem] flex flex-row gap-5 text-[1.3rem] font-medium leading-6 tracking-tighter items-center pl-5 text-textColor hover:bg-hoverColor hover:text-white transition ease-out ">
        <span>
          <Image
            src="/assets/SVGs/nitroIcon.svg"
            alt="My Icon"
            width={22}
            height={22}
          />
        </span>
        Nitro
      </button>
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
        <button className="mt-1 mr-3 w-8">
          <Image
            src="/assets/SVGs/plusIcon.svg"
            alt="My Icon"
            width={15}
            height={15}
            className="hover:opacity-70"
          />
        </button>
      </div>
      <div className="w-full h-[90%] overflow-y-auto flex flex-col ml-7">
        <UserProfile
          name="Nelly"
          status="Playing GTA V"
          profileImageUrl="/assets/images/images.jpg"
        />
      </div>
    </div>
  );
}

function UserProfile({
  name,
  status,
  profileImageUrl,
}: {
  name: string;
  status: string;
  profileImageUrl: string;
}) {
  return (
    <div className="flex items-center gap-3 ">
      <Image
        src={profileImageUrl}
        alt={name}
        width={32}
        height={32}
        className="rounded-full"
      />
      <div className="flex flex-col gap-[-20px] relative top-[0.5rem]">
        <h1 className="font-[500] text-[1rem] text-textColor absolute bottom-3">
          {name}
        </h1>
        <p className="text-textColor font-whitney text-[0.8125rem] font-bold tracking-[-0.02438rem] leading-none">
          {status}
        </p>
      </div>
    </div>
  );
}

function DiscordBtn({}) {
  return (
    <div className="clicked:bg-discordBlue h-12 w-12 clicked:rounded-[0.85rem] flex content-center justify-center text-white bg-light-gray rounded-[1.5rem]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="27"
        height="26"
        viewBox="0 0 16 16"
        fill="none"
        className="relative top-[0.6rem]"
      >
        <path
          d="M13.545 2.90696C12.5075 2.43082 11.4127 2.09099 10.288 1.89596C10.2778 1.89424 10.2673 1.89572 10.258 1.9002C10.2487 1.90468 10.241 1.91193 10.236 1.92096C10.095 2.17096 9.93899 2.49796 9.82999 2.75396C8.61759 2.56997 7.38438 2.56997 6.17199 2.75396C6.0504 2.46878 5.91285 2.19067 5.75999 1.92096C5.75486 1.91203 5.74714 1.90486 5.73786 1.9004C5.72858 1.89594 5.71816 1.89439 5.70799 1.89596C4.58305 2.0902 3.48818 2.43006 2.45099 2.90696C2.44211 2.91034 2.43469 2.91671 2.42999 2.92496C0.355986 6.02396 -0.213014 9.04696 0.0659858 12.032C0.0669858 12.046 0.0759858 12.06 0.0869858 12.069C1.29472 12.9636 2.64558 13.6466 4.08199 14.089C4.09213 14.0922 4.10302 14.092 4.1131 14.0886C4.12317 14.0852 4.13189 14.0787 4.13799 14.07C4.44599 13.65 4.71999 13.207 4.95599 12.741C4.95924 12.7346 4.9611 12.7276 4.96143 12.7205C4.96176 12.7133 4.96056 12.7062 4.95791 12.6996C4.95526 12.693 4.95121 12.687 4.94605 12.682C4.94089 12.6771 4.93473 12.6733 4.92799 12.671C4.49715 12.5054 4.07988 12.3064 3.67999 12.076C3.67268 12.0717 3.66654 12.0658 3.66211 12.0586C3.65768 12.0514 3.6551 12.0432 3.65461 12.0348C3.65411 12.0264 3.65571 12.018 3.65927 12.0103C3.66283 12.0027 3.66823 11.996 3.67499 11.991C3.75899 11.928 3.84299 11.862 3.92299 11.796C3.93005 11.7903 3.93853 11.7866 3.94752 11.7854C3.9565 11.7842 3.96565 11.7854 3.97399 11.789C6.59299 12.985 9.42799 12.985 12.015 11.789C12.0236 11.7851 12.0331 11.7837 12.0425 11.785C12.0518 11.7862 12.0607 11.79 12.068 11.796C12.148 11.862 12.232 11.928 12.316 11.991C12.3228 11.9959 12.3283 12.0025 12.3319 12.0101C12.3355 12.0177 12.3372 12.0261 12.3368 12.0345C12.3364 12.043 12.334 12.0511 12.3296 12.0584C12.3253 12.0656 12.3192 12.0716 12.312 12.076C11.913 12.3085 11.4952 12.5072 11.063 12.67C11.0563 12.6725 11.0502 12.6765 11.0452 12.6816C11.0401 12.6866 11.0362 12.6927 11.0336 12.6994C11.0311 12.7061 11.03 12.7133 11.0304 12.7204C11.0308 12.7276 11.0327 12.7346 11.036 12.741C11.276 13.206 11.551 13.65 11.853 14.07C11.8591 14.0787 11.8678 14.0852 11.8779 14.0886C11.8879 14.092 11.8988 14.0922 11.909 14.089C13.3478 13.648 14.7009 12.9649 15.91 12.069C15.916 12.0647 15.921 12.0592 15.9246 12.0528C15.9282 12.0464 15.9304 12.0393 15.931 12.032C16.265 8.58096 15.372 5.58296 13.565 2.92596C13.5632 2.92157 13.5604 2.91761 13.557 2.91434C13.5536 2.91107 13.5495 2.90855 13.545 2.90696ZM5.34699 10.214C4.55799 10.214 3.90899 9.48996 3.90899 8.60196C3.90899 7.71296 4.54599 6.98896 5.34699 6.98896C6.15399 6.98896 6.79699 7.71896 6.78499 8.60196C6.78499 9.48996 6.14799 10.214 5.34699 10.214ZM10.663 10.214C9.87499 10.214 9.22499 9.48996 9.22499 8.60196C9.22499 7.71296 9.86199 6.98896 10.663 6.98896C11.47 6.98896 12.114 7.71896 12.101 8.60196C12.101 9.48996 11.47 10.214 10.663 10.214Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}

function DiscordBTN({}) {
  return (
    <>
      <div className="clicked:bg-discordBlue h-12 w-12 clicked:rounded-[0.85rem] flex content-center justify-center text-white bg-light-gray rounded-[1.5rem]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="27"
          height="26"
          viewBox="0 0 16 16"
          fill="none"
          className="relative top-[0.6rem]"
        >
          <path
            d="M13.545 2.90696C12.5075 2.43082 11.4127 2.09099 10.288 1.89596C10.2778 1.89424 10.2673 1.89572 10.258 1.9002C10.2487 1.90468 10.241 1.91193 10.236 1.92096C10.095 2.17096 9.93899 2.49796 9.82999 2.75396C8.61759 2.56997 7.38438 2.56997 6.17199 2.75396C6.0504 2.46878 5.91285 2.19067 5.75999 1.92096C5.75486 1.91203 5.74714 1.90486 5.73786 1.9004C5.72858 1.89594 5.71816 1.89439 5.70799 1.89596C4.58305 2.0902 3.48818 2.43006 2.45099 2.90696C2.44211 2.91034 2.43469 2.91671 2.42999 2.92496C0.355986 6.02396 -0.213014 9.04696 0.0659858 12.032C0.0669858 12.046 0.0759858 12.06 0.0869858 12.069C1.29472 12.9636 2.64558 13.6466 4.08199 14.089C4.09213 14.0922 4.10302 14.092 4.1131 14.0886C4.12317 14.0852 4.13189 14.0787 4.13799 14.07C4.44599 13.65 4.71999 13.207 4.95599 12.741C4.95924 12.7346 4.9611 12.7276 4.96143 12.7205C4.96176 12.7133 4.96056 12.7062 4.95791 12.6996C4.95526 12.693 4.95121 12.687 4.94605 12.682C4.94089 12.6771 4.93473 12.6733 4.92799 12.671C4.49715 12.5054 4.07988 12.3064 3.67999 12.076C3.67268 12.0717 3.66654 12.0658 3.66211 12.0586C3.65768 12.0514 3.6551 12.0432 3.65461 12.0348C3.65411 12.0264 3.65571 12.018 3.65927 12.0103C3.66283 12.0027 3.66823 11.996 3.67499 11.991C3.75899 11.928 3.84299 11.862 3.92299 11.796C3.93005 11.7903 3.93853 11.7866 3.94752 11.7854C3.9565 11.7842 3.96565 11.7854 3.97399 11.789C6.59299 12.985 9.42799 12.985 12.015 11.789C12.0236 11.7851 12.0331 11.7837 12.0425 11.785C12.0518 11.7862 12.0607 11.79 12.068 11.796C12.148 11.862 12.232 11.928 12.316 11.991C12.3228 11.9959 12.3283 12.0025 12.3319 12.0101C12.3355 12.0177 12.3372 12.0261 12.3368 12.0345C12.3364 12.043 12.334 12.0511 12.3296 12.0584C12.3253 12.0656 12.3192 12.0716 12.312 12.076C11.913 12.3085 11.4952 12.5072 11.063 12.67C11.0563 12.6725 11.0502 12.6765 11.0452 12.6816C11.0401 12.6866 11.0362 12.6927 11.0336 12.6994C11.0311 12.7061 11.03 12.7133 11.0304 12.7204C11.0308 12.7276 11.0327 12.7346 11.036 12.741C11.276 13.206 11.551 13.65 11.853 14.07C11.8591 14.0787 11.8678 14.0852 11.8779 14.0886C11.8879 14.092 11.8988 14.0922 11.909 14.089C13.3478 13.648 14.7009 12.9649 15.91 12.069C15.916 12.0647 15.921 12.0592 15.9246 12.0528C15.9282 12.0464 15.9304 12.0393 15.931 12.032C16.265 8.58096 15.372 5.58296 13.565 2.92596C13.5632 2.92157 13.5604 2.91761 13.557 2.91434C13.5536 2.91107 13.5495 2.90855 13.545 2.90696ZM5.34699 10.214C4.55799 10.214 3.90899 9.48996 3.90899 8.60196C3.90899 7.71296 4.54599 6.98896 5.34699 6.98896C6.15399 6.98896 6.79699 7.71896 6.78499 8.60196C6.78499 9.48996 6.14799 10.214 5.34699 10.214ZM10.663 10.214C9.87499 10.214 9.22499 9.48996 9.22499 8.60196C9.22499 7.71296 9.86199 6.98896 10.663 6.98896C11.47 6.98896 12.114 7.71896 12.101 8.60196C12.101 9.48996 11.47 10.214 10.663 10.214Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <div className="w-8 h-1 bg-middle-gray rounded-sm mt-2"></div>
    </>
  );
}
