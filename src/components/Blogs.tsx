import Image from "next/image";

export default function Blogs() {
  return (
    <div className="  w-[1440px]  h-[1056px] px-[160px] py-[56px] ">
      {/* small text */}
      <div className="w-[343px] lg:w-[1120px] h-[32px]  flex items-start gap-x-[32px] pb-[50px]">
        <h1 className="w-[100px] h-[32px] text-[#000000] font-medium text-[18px] underline underline-offset-8">
          New Arrival
        </h1>
        <h2 className="w-[86px] h-[32px] text-[#8b8b8b] font-medium text-[18px]">
          Bestseller
        </h2>
        <h3 className="w-[159px] h-[32px] text-[#8b8b8b] font-medium text-[18px]">
          FeaturedProducts
        </h3>
      </div>

      {/* main blog */}
      <div className="w-[1120px] h-[880px]  justify-around items-center grid-cols-4 grid  gap-x-[22px] gap-y-[16px]">
        {/* 1st blog */}
        <div className="w-[268px] h-[432px] px-[16px] py-[24px] bg-[#F6F6F6] text-center rounded-[9px] ">
          {/* heart */}
          <div> <Image
          src="/Top Section (1).png"
          className="items-end "
          alt="heart"
          width={236}
          height={32}
         />
         </div>

          {/* image */}
          <div className="flex justify-center ">
            <Image
              src={"/Iphone 14 pro 1.png"}
              alt="iphone"
              width={160}
              height={160}
              className="w-[160px] h-[160px]"
            />
          </div>
          {/* text */}
          <div className="items-center py-[24px] ">
            <h1 className="text-[16px] font-medium  text-[#000000] ">
            Apple iPhone 14 Pro 512GB Gold (MQ233)
            </h1>
            <h2 className="text-[24px] font-semibold text-[#000000] ">$1437</h2>
            <button className="w-[188px] h-[48px] px-[64px] py-[12px] font-medium text-[14px] bg-[#000000] text-[#ffffff] rounded-md my-[24px] ">
              Buy Now
            </button>
          </div>
        </div>
        

        {/* 2nd blog */}
        <div className="w-[268px] h-[432px] px-[16px] py-[24px] bg-[#F6F6F6] text-center rounded-[9px]">
          {/* heart */}
          <div> <Image
          src="/Top Section (1).png"
          className="items-end "
          alt="heart"
          width={236}
          height={32}
         />
         </div>
          {/* image */}
          <div className="flex justify-center">
            <Image
              src={"/Iphone 14 pro 1 (1).png"}
              alt=" camera"
              width={160}
              height={160}
              className="w-[160px] h-[160px]"
            />
          </div>
          {/* text */}
          <div className="items-center py-[24px]">
            <h1 className="text-[16px] font-medium  text-[#000000] ">
              Blackmagic Pocket Cinema Camera 6k
            </h1>
            <h2 className="text-[24px] font-semibold text-[#000000] ">$900</h2>
            <button className="w-[188px] h-[48px] px-[64px] py-[12px] font-medium text-[14px] bg-[#000000] text-[#ffffff] rounded-md my-[24px] ">
              Buy Now
            </button>
          </div>
        </div>
        {/* 3rd blog */}
        <div className="w-[268px] h-[432px] px-[16px] py-[24px] bg-[#F6F6F6] text-center rounded-[9px]">
          {/* heart */}
          <div> <Image
          src="/Top Section (1).png"
          className="items-end "
          alt="heart"
          width={236}
          height={32}
         />
         </div>
          {/* image */}
          <div className="flex justify-center ">
            <Image
              src={"/Iphone 14 pro 1 (2).png"}
              alt="iphone watch"
              width={160}
              height={160}
              className="w-[160px] h-[160px]"
            />
          </div>
          {/* text */}
          <div className="items-center py-[24px]">
            <h1 className="text-[16px] font-medium  text-[#000000] ">
              Apple Watch Series 9 GPS 41mm Starlight Aluminium
            </h1>
            <h2 className="text-[24px] font-semibold text-[#000000] ">$900</h2>
            <button className="w-[188px] h-[48px] px-[64px] py-[12px] font-medium text-[14px] bg-[#000000] text-[#ffffff] rounded-md my-[24px] ">
              Buy Now
            </button>
          </div>
        </div>
        {/* 4th blog */}
        <div className="w-[264px] h-[432px] px-[16px] py-[24px] bg-[#F6F6F6] text-center rounded-[9px]">
          {/* heart */}
          <div> <Image
          src="/Top Section (1).png"
          className="items-end "
          alt="heart"
          width={236}
          height={32}
         />
         </div>
          {/* image */}
          <div className="flex justify-center ">
            <Image
              src={"/Iphone 14 pro 1 (3).png"}
              alt="iphone headphone"
              width={160}
              height={160}
              className="w-[160px] h-[160px]"
            />
          </div>
          {/* text */}
          <div className="items-center py-[24px]">
            <h1 className="text-[16px] font-medium  text-[#000000] ">
              AirPods Max Silver Starlight Aluminium
            </h1>
            <h2 className="text-[24px] font-semibold text-[#000000] ">$900</h2>
            <button className="w-[188px] h-[48px] px-[64px] py-[12px] font-medium text-[14px] bg-[#000000] text-[#ffffff] rounded-md my-[24px] ">
              Buy Now
            </button>
          </div>
        </div>

        {/* 5th blog */}
        <div className="w-[268px] h-[432px] px-[16px] py-[24px] bg-[#F6F6F6] text-center rounded-[9px]">
          {/* heart */}
          <div> <Image
          src="/Top Section (1).png"
          className="items-end "
          alt="heart"
          width={236}
          height={32}
         />
         </div>
          {/* image */}
          <div className="flex justify-center ">
            <Image
              src={"/Iphone 14 pro 1 (4).png"}
              alt="iphone watch"
              width={160}
              height={160}
              className="w-[160px] h-[160px]"
            />
          </div>
          {/* text */}
          <div className="items-center py-[24px]">
            <h1 className="text-[16px] font-medium  text-[#000000] ">
              Samsung Galaxy Watch6 Classic 47mm Black
            </h1>
            <h2 className="text-[24px] font-semibold text-[#000000] ">$900</h2>
            <button className="w-[188px] h-[48px] px-[64px] py-[12px] font-medium text-[14px] bg-[#000000] text-[#ffffff] rounded-md my-[24px] ">
              Buy Now
            </button>
          </div>
        </div>
        {/* 6th blog */}
        <div className="w-[268px] h-[432px] px-[16px] py-[24px] bg-[#F6F6F6] text-center rounded-[9px]">
          {/* heart */}
          <div> <Image
          src="/Top Section.png"
          className="items-end "
          alt="heart"
          width={236}
          height={32}
         />
         </div>
          {/* image */}
          <div className="flex justify-center ">
            <Image
              src={"/Iphone 14 pro 1 (5).png"}
              alt="iphone"
              width={160}
              height={160}
              className="w-[160px] h-[160px]"
            />
          </div>
          {/* text */}
          <div className="items-center py-[24px]">
            <h1 className="text-[16px] font-medium  text-[#000000] ">
              Galaxy Z Fold5 Unlocked | 256GB | Phantom Black
            </h1>
            <h2 className="text-[24px] font-semibold text-[#000000] ">$900</h2>
            <button className="w-[188px] h-[48px] px-[64px] py-[12px] font-medium text-[14px] bg-[#000000] text-[#ffffff] rounded-md my-[24px] ">
              Buy Now
            </button>
          </div>
        </div>
        {/* 7th blog */}
        <div className="w-[268px] h-[432px] px-[16px] py-[24px] bg-[#F6F6F6] text-center rounded-[9px]">
          {/* heart */}
          <div> <Image
          src="/Top Section (1).png"
          className="items-end "
          alt="heart"
          width={236}
          height={32}
         />
         </div>
          {/* image */}
          <div className="flex justify-center ">
            <Image
              src={"/Iphone 14 pro 1 (6).png"}
              alt="iphone"
              width={160}
              height={160}
              className="w-[160px] h-[160px]"
            />
          </div>
          {/* text */}
          <div className=" items-center ">
            <h1 className="text-[16px] font-medium  text-[#000000] py-[24px]">
              Galaxy Buds FE Graphite
            </h1>
            <h2 className="text-[24px] font-semibold text-[#000000] ">$900</h2>
            <button className="w-[188px] h-[48px] px-[64px] py-[12px] font-medium text-[14px] bg-[#000000] text-[#ffffff] rounded-md my-[24px] ">
              Buy Now
            </button>
          </div>
        </div>
        {/* 8th grid  */}
        <div className=" w-[268px] h-[432px] px-[16px] py-[24px] bg-[#F6F6F6] text-center rounded-[9px]">
          {/* heart */}
          <div> <Image
          src="/Top Section (1).png"
          className="items-end "
          alt="heart"
          width={236}
          height={32}
         />
         </div>
          {/* image */}
          <div className="flex justify-center ">
            <Image
              src={"/Iphone 14 pro 1 (7).png"}
              alt="iphone"
              width={160}
              height={160}
              className="w-[160px] h-[160px]"
            />
          </div>
          {/* text */}
          <div className="items-center py-[24px]">
            <h1 className="text-[16px] font-medium  text-[#000000] ">
              Apple iPad 9 10.2 64GB Wi-Fi Silver (MK2L3) 2021
            </h1>
            <h2 className="text-[24px] font-semibold text-[#000000] ">$900</h2>
            <button className="w-[188px] h-[48px] px-[64px] py-[12px] font-medium text-[14px] bg-[#000000] text-[#ffffff] rounded-md my-[24px] ">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
