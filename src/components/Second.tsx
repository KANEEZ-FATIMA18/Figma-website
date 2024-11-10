import Image from "next/image";

export default function Second() {
  return (
    <div  className="w-[1440px] h-[600px] flex ">
      {/* Two containers */}
      {/* play station section  */}
      <div>
        {/* left side iamge  */}
        <div className="w-[720px] h-[328px] flex flex-row justify-between items-center">
          <Image
            src={"/PlayStation (1).png"}
            alt="play station"
            width={360}
            height={343}
          />
          {/* right side text  */}
          <div className="w-[338px] h-[128px] space-y-[30px]">
            <h1 className="w-[338px] h-[40px] font-medium text-[49px]">
              Playstation 5
            </h1>
            <p className="w-[338px] h-[72px] font-medium text-[14px] text-[#909090]">
              Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
              will redefine your PlayStation experience.
            </p>
          </div>
        </div>

        {/* Airpod section  */}
        <div className="flex">
          {/* left side  */}
          <div className="w-[360px] h-[272px] flex flex-row justify-between items-center   bg-[#ededed] ">
            {/* image  */}
            <Image src={"/pod.png"} alt="pod" width={104} height={272} />
            <div className="pl-[75px] pr-[48px] space-y-[17px]">
              <h1 className="w-[160px] h-[120px] font-[mixed] text-[29px] pl-[px]  pr-[48px]">
                Apple AirPods <span className="font-semibold">Max</span>
              </h1>
              <p className="w-[160px] h-[48px] text-[14px] font-medium text-[#909090]">
                Computational audio. Listen, it's powerful
              </p>
            </div>
          </div>
          
          {/* Apple vision section  */}
          <div className="w-[360px] h-[272px] flex justify-between items-center flex-row bg-[#353535] ">
            <Image src={'/image 36 (1).png'} alt="apple vision pro" width={136} height={190}/>
            <div className="pl-[30px] pr-[48px] space-y-[10px]">
                <h1 className="w-[140px] h-[80px] text-[29px]  text-white">Apple 
                Vision <span className="font-bold">Pro</span></h1>
                <p className="w-[160px] h-[72px] text-[14px] font-medium text-[#909090]">An immersive way to experience entertainment</p>
            </div>
          </div>
          </div>

        
      </div>
      {/* Macbook section  */}
      <div className="w-[720px] h-[600px] items-center flex justify-between bg-[#ededed]">
        <div className="w-[360px] h-[272px] pl-[56px]  text-left">
            <h1 className="w-[360px] h-[112px]  text-[64px] space-y-0 leading-[54px] ">Macbook <span className="font-semibold">Air</span></h1>
            <p className="w-[330px] h-[72px] text-[14px] text-[#909090] pt-[16px] ">The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</p>
            <button  className="w-[191px] h-[56px] px-[56px] py-[16px] border-[2px] rounded-lg border-gray-500 mt-[25px] font-normal">Shop Now</button>
        </div>
        <Image src={'/MacBook Pro 14 (1).png'} alt="macbook 14 pro" width={292} height={502}/>

      </div>
    </div>
  );
}
