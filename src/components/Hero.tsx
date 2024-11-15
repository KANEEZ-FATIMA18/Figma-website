import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-[#211C24] h-[632px]  w-[1440px] gap-x-[auto]  flex  justify-between px-[160px] ">
      {/* logo */}
      <div className="   w-[714px] h-[256px] gap-y-[24px] mt-40 ">
        <h1 className="h-[32px] font-semibold text-[25px] text-[#909090] ">
          Pro.Beyond.
        </h1>
        <h2 className=" h-[128px] font-thin   text-[96px] text-[#FFFFFF] ">
          {" "}
          IPhone 14 <span className="font-bold ">Pro</span>
        </h2>
        <p className=" h-[24px] font-medium text-[20px] text-[#909090] ">
          Created to change everything for the better. For everyone
        </p>
        <button className="w-[191px] h-[56px] px-[52px] py-[16px] text-white border-2 rounded-md font-medium text-[16px] mt-4">
          Shop Now
        </button>
      </div>
      {/* image */}
      <div className="relative ">
        <Image
          src={"/Iphone Image.png"}
          alt="iphone"
          width={406}
          height={632}
          objectFit="cover"
        />{" "}
      </div>
    </div>
  );
}
