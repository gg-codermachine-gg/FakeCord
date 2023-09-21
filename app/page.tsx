import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row  bg-dark-gray">
      <ServersList />
      <Screen />
    </main>
  );
}

function ServersList() {
  return (
    <div className="flex flex-col min-h-screen w-[4.25rem] bg-dark-gray"></div>
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
    <div className="bg-middle-gray w-[15rem] min-h-[57.8rem] flex flex-col items-center">
      <OptionsButtons />
      <FriendsList />
      <div className="h-[5rem] bg-red-500"></div>
    </div>
  );
}

function Search() {
  return (
    <div className="flex w-[15rem] pt-3 pb-2  flex-col justify-end items-center gap-0.625rem text-[#72767D] bg-middle-gray shadow-bottom">
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
            src="/assets/friendsIcon.svg"
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
            src="/assets/nitroIcon.svg"
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

function FriendsList({}) {
  return (
    <div className="h-[47.3rem] flex flex-row items-center relative">
      <div className="flex flex-row gap-[4rem] h-2 w-full pl-3 relative bottom-[22rem] ">
        <h1 className="text-gray-600  text-sm font-bold tracking-tight mt-[.3rem] hover:text-slate-200 transition ease-{400ms}">
          DIRECT MESSAGES
        </h1>
        <button className="mt-1 mr-3">
          <Image
            src="/assets/plusIcon.svg"
            alt="My Icon"
            width={15}
            height={15}
          />
        </button>
      </div>
      <div>
        <div>yeah</div>
      </div>
    </div>
  );
}
