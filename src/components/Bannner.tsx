import Image from "next/image";

export default function Banner() {
  return (
    <div className="w-[1440px] h-[640px] flex flex-row">
      {/* 1st  */}
      <div className="w-[360px] h-[640px] px-[32px] pb-[56px] ">
        <div className="flex justify-center">
          <Image src={"/Group 1.png"} alt="group" width={360.06} height={327} />
        </div>
        <div className="items- w-[296px] h-[208px] gap-y-[16px]">
          <h1 className="w-[300px] h-[48px] font-light text-[33px] text-[#000000] mb-[16px]">
            Popular Products
          </h1>
          <p className="text-[#909090] font-medium text-[14px] w-[296px] h-[72px] mb-[16px]">
            iPad combines a magnificent 10.2-inch Retina display, incredible
            performance, multitasking and ease of use.
          </p>
          <button className="w-[191px] h-[56px] rounded-[6px] px-[56px] py-[16px]  text-[16px] font-medium border-[1px] border-gray-700">
            Shop Now
          </button>
        </div>
      </div>
      {/* 2nd  */}
      <div className="w-[360px] h-[640px] px-[32px] pb-[56px] bg-[#f9f9f9] pt-[60px]">
        <div className="flex justify-center ">
          <Image src={"/image 64.png"} alt="group" width={360} height={366} />
        </div>
        <div className="items- w-[296px] h-[208px] gap-y-[16px]">
          <h1 className="w-[300px] h-[48px] font-light text-[33px] text-[#000000] mb-[16px]">
            Ipad Pro
          </h1>
          <p className="text-[#909090] font-medium text-[14px] w-[296px] h-[72px] mb-[16px]">
            iPad combines a magnificent 10.2-inch Retina display, incredible
            performance, multitasking and ease of use.
          </p>
          <button className="w-[191px] h-[56px] rounded-[6px] px-[56px] py-[16px]  text-[16px] font-medium border-[1px] border-gray-700">
            Shop Now
          </button>
        </div>
      </div>
      {/* 3rd  */}
      <div className="w-[360px] h-[640px] px-[32px] pb-[56px] pt-[60px] bg-[#eaeaea]">
        <div className="flex justify-center">
          <Image src={"/image 41.png"} alt="group" width={360} height={360} />
        </div>
        <div className="items- w-[296px] h-[208px] gap-y-[16px]">
          <h1 className="w-[300px] h-[48px] font-light text-[33px] text-[#000000] mb-[16px]">
            Samsung Galaxy
          </h1>
          <p className="text-[#909090] font-medium text-[14px] w-[296px] h-[72px] mb-[16px]">
            iPad combines a magnificent 10.2-inch Retina display, incredible
            performance, multitasking and ease of use.
          </p>
          <button className="w-[191px] h-[56px] rounded-[6px] px-[56px] py-[16px]  text-[16px] font-medium border-[1px] border-gray-700">
            Shop Now
          </button>
        </div>
      </div>

      {/* 4th  */}
      <div className="w-[360px] h-[640px] px-[32px] pb-[56px] pt-[40px] bg-[#2c2c2c]">
        <div className="flex justify-center">
          <Image src={"/Macbook 1.png"} alt="group" width={360} height={376} />
        </div>
        <div className="items- w-[296px] h-[208px] gap-y-[16px]">
          <h1 className="w-[300px] h-[48px] font-light text-[33px] text-[#ffffff] mb-[16px]">
            Macbook Pro
          </h1>
          <p className="text-[#909090] font-medium text-[14px] w-[296px] h-[72px] mb-[16px]">
            iPad combines a magnificent 10.2-inch Retina display, incredible
            performance, multitasking and ease of use.
          </p>
          <button className="w-[191px] h-[56px] rounded-[6px] px-[56px] py-[16px] text-white text-[16px] font-medium border-[1px] border-white">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}
