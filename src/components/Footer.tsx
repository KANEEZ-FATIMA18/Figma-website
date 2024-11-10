import Image from "next/image"
export default function Footer(){
    return(
        <div className="w-[1440px] h-[504px] px-[160px] py-[104px] bg-[#000000] ">

            {/* main  */}
            <div className="w-[1120px] h-[256px] gap-y-[8px] gap-x-[auto] flex justify-between flex-row">
                {/* 1st  */}
                <div className="">
                    <h1 className="w-[65.4px] h-[22.87px] font-bold mb-[24px] text-white">cyber</h1>
                    <p className="w-[384px] h-[48px] font-medium text-[14px] text-left text-[#cfcfcf]">We are a residential interior design firm located in Portland. Our boutique-studio offers more than</p>
                </div>

                {/* 2nd  */}
                <div className="w-[295.5px] h-[256px] text-left">
                    <h1 className="w-[68px] h-[16px] font-semibold text-[18px] text-white">Services</h1>
                    <p className="h-[32px] text-[14px] font-[reguler] text-[#cfcfcf]    mt-[13px]">Bonus program</p>
                    <p className="h-[32px] text-[16px] font-[reguler] text-[#cfcfcf]    mt-[8px]">Gift cards</p>
                    <p className="h-[32px] text-[14px] font-[reguler] text-[#cfcfcf]    mt-[8px]">Credit and payment</p>
                    <p className="h-[32px] text-[14px] font-[reguler] text-[#cfcfcf]    mt-[8px]">Service contracts</p>
                    <p className="h-[32px] text-[14px] font-[reguler] text-[#cfcfcf]    mt-[8px]">Non-cash account</p>
                    <p className="h-[32px] text-[14px] font-[reguler] text-[#cfcfcf]    mt-[8px]">Payment</p>
                </div>
                {/* 3rd  */}
                <div className="w-[295.5px] h-[256px] text-left text-white">
                    <h1 className="w-[200px] h-[16px] font-semibold text-[18px]">Assistance to the buyer</h1>
                    <p className=" h-[32px]text-[14px] font-[reguler] text-[#cfcfcf]    mt-[13px]">Find an order</p>
                    <p className="h-[32px] text-[14px] font-[reguler] text-[#cfcfcf]    mt-[8px]">Terms of delivery </p>
                    <p className="h-[32px] text-[14px] font-[reguler] text-[#cfcfcf]    mt-[8px]">Exchange and return of goods</p>
                    <p className="h-[32px] text-[14px] font-[reguler] text-[#cfcfcf]    mt-[8px]">Guarantee</p>
                    <p className="h-[32px] text-[14px] font-[reguler] text-[#cfcfcf]    mt-[8px]">Frequently asked questions</p>
                    <p className="h-[32px] text-[14px] font-[reguler] text-[#cfcfcf]    mt-[8px]">Terms of use of the site</p>
                </div>
            </div>
            {/* icons  */}
            <div className="w-[173px] h-[16px] gap-x-[40px] flex  mt-[25px]">
                
                <Image src={'/Twitter.png'} alt="twitter" width={16} height={16}/>
                <Image src={'/facebook.png'} alt="facebook" width={16} height={16}/>
                <Image src={'/tiktok.png'} alt="tiktok" width={16} height={16}/>
                <Image src={'/Instagram.png'} alt="Instagram" width={16} height={16}/>
                

            </div>

        </div>
    )
}
