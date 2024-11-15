import Hero from "@/components/Hero"
import Header from "@/components/Header"
import Blogs from "@/components/Blogs"
import Banner from "@/components/Bannner"

import Second from "@/components/Second"
import Category from "@/components/Category"
import Discount from "@/components/Discount"
import Banner2 from "@/components/Banner2"

export default function Home(){
  return(
    <div>
      <Hero/>
      <Second/>
      <Category/>
      
      <Blogs/>
      <Banner/>
      <Discount/>
      <Banner2/>

    </div>
    
    

  )}