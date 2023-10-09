import Image from "next/image";

export function UserProfile({
  name,
  status,
  profileImageUrl,
  TextColor
}: {
  name: string;
  status: string;
  profileImageUrl: string;
  TextColor: string;
}) {
  return <div className="flex items-center gap-3 ">
      <Image src={profileImageUrl} alt={name} width={32} height={32} className="rounded-full" />
      <div className="flex flex-col gap-[-20px] relative top-[0.5rem]">
        <h1 className={`font-[500] text-[1rem] ${TextColor} absolute bottom-3`}>
          {name}
        </h1>
        <p className="text-textColor font-whitney text-[0.8125rem] font-bold tracking-[-0.02438rem] leading-none">
          {status}
        </p>
      </div>
    </div>;
}
  