import Image from "next/image";

export function OptionsButtons({}) {
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
  