import Image from "next/image";

 export default function Header() {
  return (
    <div className="  bg-white w-[1440px] h-[88px] flex items-center  justify-between px-[160px] py-[16px] gap-[auto] border-y-2 ">
      {/* logo */}
      <div className=" font-bold text-2xl text-right ">cyber</div>
      {/* search */}
      <div className="bg-[#F5F5F5] w-[372px] h-[56px] p-[16px] rounded-[8px] items-start flex px-[16px] py-[16px] gap-x-[10px]">
        <div >
          <Image src={'/Search.png'} alt="search" width={24} height={24}/>
        </div>
        <form >
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search"
            className="placeholder-[#656565]  cursor-pointer bg-[#F5F5F5]  text-[16px] font-medium w-[70px] h-[18px]"
          />
        </form>
      </div>
      {/* navbars */}
      <ul className="flex gap-[52px] w-[369px] h-[19px]">
      
       <li className="text-black  font-medium text-[16px] w-[46px] h-[19px]">Home</li>
        <li className="text-gray-400 font-medium  text-[16px] w-[47px] h-[19px]">About</li>
        <li className="text-gray-400 font-medium  text-[16px] w-[86px] h-[19px]">Contact us</li>
        <li className="text-gray-400 font-medium  text-[16px] w-[34px] h-[19px]">Blog</li>
      </ul>

      {/* icons */}
      <div className=" gap-[24px] items-center ">
        <Image src={"/Icons.png"} alt="icons" height={32} width={144} />
      </div>
    </div>
  );
}
