import Image from "next/image";
export default function Discount() {
  return (
    <div className="w-[1440px] h-[656px] px-[160px] py-[80px] space-y-[32px] bg-[#FFFFFF]">

        {/* discount  */}
      <h1 className="w-[248px] h-[32px] font-medium text-[24px] items-center">Discounts up to -50%</h1>

      {/* main  */}
      <div className="w-[1120px] h-[432px] gap-x-[16px] gap-y-[16px] grid grid-cols-4 ">
        {/* 1st  */}
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
              src={"/Iphone 14 pro 1 (8).png"}
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

        {/* 2nd  */}
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
              src={"/Iphone 14 pro 1 (3).png"}
              alt="iphone"
              width={160}
              height={160}
              className="w-[160px] h-[160px]"
            />
          </div>
          {/* text */}
          <div className="items-center py-[24px] ">
            <h1 className="text-[16px] font-medium  text-[#000000] ">
            AirPods Max Silver Starlight Aluminium 
            </h1>
            <h2 className="text-[24px] font-semibold text-[#000000] ">$549</h2>
            <button className="w-[188px] h-[48px] px-[64px] py-[12px] font-medium text-[14px] bg-[#000000] text-[#ffffff] rounded-md my-[24px] ">
              Buy Now
            </button>
          </div>
        </div>

        {/* 3rd  */}
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
              src={"/Iphone 14 pro 1 (2).png"}
              alt="iphone"
              width={160}
              height={160}
              className="w-[160px] h-[160px]"
            />
          </div>
          {/* text */}
          <div className="items-center py-[24px] ">
            <h1 className="text-[16px] font-medium  text-[#000000] ">
            Apple Watch Series 9 GPS 41mm Starlight Aluminium 
            </h1>
            <h2 className="text-[24px] font-semibold text-[#000000] ">$399</h2>
            <button className="w-[188px] h-[48px] px-[64px] py-[12px] font-medium text-[14px] bg-[#000000] text-[#ffffff] rounded-md my-[24px] ">
              Buy Now
            </button>
          </div>
        </div>

        {/* 4th  */}
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
              src={"/Iphone 14 pro 1 (9).png"}
              alt="iphone"
              width={160}
              height={160}
              className="w-[160px] h-[160px]"
            />
          </div>
          {/* text */}
          <div className="items-center py-[24px] ">
            <h1 className="text-[16px] font-medium  text-[#000000] ">
            Apple iPhone 14 Pro 1TB Gold (MQ2V3)
            </h1>
            <h2 className="text-[24px] font-semibold text-[#000000] ">$1499</h2>
            <button className="w-[188px] h-[48px] px-[64px] py-[12px] font-medium text-[14px] bg-[#000000] text-[#ffffff] rounded-md my-[24px] ">
              Buy Now
            </button>
          </div>
        </div>




      </div>
    </div>
  );
}
