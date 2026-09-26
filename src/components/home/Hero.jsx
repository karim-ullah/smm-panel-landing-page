import Image from "next/image";
import React from "react";
import HeroImage from "@/assests/New Hero img.png";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section className="w-full bg-[linear-gradient(45deg,#FF6B0092,#FFF0D3,#F2E4E4,#FFE5C0,#FFF8EC)] pt-32 pb-40">
      <div className="container flex justify-between items-center gap-24">
        {/* Left Side */}
        <div className="w-1/2">
          <h5>Excellent 4.8 out of 5</h5>
          <h1>
            <span className="text-primary">Best SMM Panel</span> in Bangladesh - <span className="text-primary mb-5">Fast ,Safe</span> & Growth in Social Media.
          </h1>
          <p>
            SMM is Bangladesh's most reliable & cheap SMM panel for real social
            media growth. We built this platform for Bangladeshi businesses,
            creators, and agencies. You get fast delivery, safe methods, and
            followers that actually stay. No fake bots. No account risks. Just
            real results. Most panels chase big numbers. We focus on keeping
            those numbers. You get retention guarantees, delivery control, and
            long-term credibility.
          </p>

          <div className='space-x-4 mt-6'>
            <Button variant='outline'>View Services</Button>
            <Button>Create an Account</Button>
            
        </div>
        </div>
        {/* Right Side */}
        <div className="w-1/2">
          <Image src={HeroImage} width={640} alt="Hero Img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
