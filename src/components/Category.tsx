import Image from "next/image"
export default function Category(){
    return(
        <div className="w-[1440px] h-[352px] px-[160px] py-[80px] bg-[#FAFAFA] ">
            <div className="w-[1120px] h-[32px] gap-x-[auto] space-y-[32px]">
                <h1 className="w-[239px] h-[32px] text-left font-medium text-[24px] text-black">Browse By Category </h1>
                <p></p>

                {/* category  */}
                <div className="w-[1120px] h-[128px] gap-x-[32px] flex justify-center ">
                    {/* 1st  */}
                    <div className=" bg-[#EDEDED] w-[160px] h-[128px] items-center  gap-y-[8px] px-[52px] py-[24px] rounded-[15px] ">
                    <div className="flex justify-center">
                    <Image src={'/Phones.png'} alt="" width={48} height={48} className="w-[48px] h-[48px]"/></div>
                    <h1 className="font-medium text-[16px] text-center w-[58px] h-[24px] pt-[10px]">Phones</h1>
                    </div>

                    {/* 2nd  */}
                    <div className=" bg-[#EDEDED] w-[160px] h-[128px]  items-center gap-y-[8px] px-[24px] py-[24px] rounded-[15px]">
                    <div className="flex justify-center">
                    <Image src='/Smart Watches.png' alt="" width={48} height={48} className="w-[48px] h-[48px]"/></div>
                    <h1 className="font-medium text-[16px] text-center w-[117px] h-[24px] pt-[10px] ">Smart Watches</h1>
                    </div>

                    {/* 3rd  */}
                    <div className=" bg-[#EDEDED] w-[160px] h-[128px] items-center gap-y-[8px] px-[52px] py-[24px] rounded-[15px]">
                    <div className="flex justify-center">
                    <Image src='/Cameras.png' alt="" width={48} height={48} className="w-[48px] h-[48px]"/></div>
                    <h1 className="font-medium text-[16px] text-center w-[58px] h-[24px] pt-[10px]">Cameras</h1>
                    </div> 

                    {/* 4th  */}
                    <div className=" bg-[#EDEDED] w-[160px] h-[128px] items-center gap-y-[8px] px-[30px] py-[24px] rounded-[15px]">
                    <div className="flex justify-center">
                    <Image src='/Headphones.png' alt="" width={48} height={48} className="w-[48px] h-[48px]"/></div>
                    <h1 className="font-medium text-[16px] text-center w-[98px] h-[24px] pt-[10px] ">Headphones</h1>
                    </div>

                    {/* 5th  */}
                    <div className=" bg-[#EDEDED] w-[160px] h-[128px] items-center gap-y-[8px] px-[39px] py-[24px] rounded-[15px]">
                    <div className="flex justify-center">
                    <Image src='/Computers.png' alt="" width={48} height={48} className="w-[48px] h-[48px]"/></div>
                    <h1 className="font-medium text-[16px] text-center w-[85px] h-[24px] pt-[10px] ">Computers</h1>
                    </div>

                    {/* 6th  */}
                    <div className=" bg-[#EDEDED] w-[160px] h-[128px] items-center gap-y-[8px] px-[52px] py-[24px] rounded-[15px]">
                    <div className="flex justify-center">
                    <Image src='/Gaming.png' alt="" width={48} height={48} className="w-[48px] h-[48px]"/></div>
                    <h1 className=" font-medium text-[16px] text-center w-[59px] h-[24px] pt-[10px]">Gaming</h1>
                    </div>
                    
                </div>
                </div>
        </div>
    )
}