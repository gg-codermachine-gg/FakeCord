
export function Navigation({}) {
  return <>
      <div className="bg w-full h-8 flex flex-row gap-5 pl-4 items-center pt-4">
        <button className="text-white font-medium tracking-tighter">
          Friends
        </button>
        <button className="text-white font-medium tracking-tighter">
          Online
        </button>
        <button className="text-white font-medium tracking-tighter">All</button>
        <button className="text-white font-medium tracking-tighter">
          Pending
        </button>
        <button className="text-white font-medium tracking-tighter">
          Pending
        </button>
        <button className="text-white font-medium tracking-tighter">
          Pending
        </button>
        <button className="text-white font-medium tracking-tighter">
          Suggestions
        </button>
        <button className="text-white font-medium tracking-tighter">
          Blocked
        </button>
        <button className="bg-green text-white text-center text-sm rounded-sm h-6 px-2 font-medium ">
          Add friend
        </button>
      </div>
      <div className="bg-dark-gray w-full h-[0.12rem] mt-4 opacity-14"></div>
    </>;
}
  