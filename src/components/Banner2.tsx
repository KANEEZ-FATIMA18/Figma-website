
import Image from "next/image"
export default function Banner2(){
    return(
        <div className="w-[1440px] h-[448px]">
            <Image src={'/Banner 2.png'} alt="banner" width={1440} height={448}/>
        </div>
    )
}