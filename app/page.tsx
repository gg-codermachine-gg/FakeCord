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
    <div className="flex flex-col min-h-screen w-[4.25rem] bg-green"></div>
  );
}

function Screen() {
  return (
    <div className="flex flex-col">
      <Search/>
      <DirectMessges />
    </div>
  );
}

function DirectMessges() {
  return <div className="bg-middle-gray w-[15rem] min-h-[58rem]">1</div>;
}

function Search() {
  return (
    <div className="flex w-[15rem] pt-3 flex-col justify-end items-center gap-0.625rem text-[#72767D] bg-middle-gray">
      <input
        type="text"
        className="w-[13.75rem] h-7 p-3 bg-dark-gray font-medium text-sm tracking-tighter rounded-sm"
        placeholder="Find or start a conversation"
      />
    </div>
  );
}
