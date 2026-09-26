import Image from "next/image";
import React from "react";
import Order from "@/assests/order.png";
import Services from '@/assests/services.png'
import Users from '@/assests/users.png'

const stats = () => {
  return (
    <section className="bg-[#F9F9F9] py-14">
      <div className="container grid grid-cols-4 gap-11">
        <div className="bg-background p-8 border border-border rounded-[16px] text-center space-y-2.5 shadow-xl">
          <Image className="mx-auto" src={Order} width={100} height={100} alt="stats one" />
          <h3>321,879</h3>
          <h4>Order Processed</h4>
        </div>
        <div className="bg-background p-8 border border-border rounded-[16px] text-center space-y-2.5 shadow-xl">
          <Image className="mx-auto" src={Services} width={100} height={100} alt="stats one" />
          <h3>6245</h3>
          <h4>Available Services</h4>
        </div>
        <div className="bg-background p-8 border border-border rounded-[16px] text-center space-y-2.5 shadow-xl">
          <Image className="mx-auto" src={Users} width={100} height={100} alt="stats one" />
          <h3>8552</h3>
          <h4>Registered Users</h4>
        </div>
        <div className="bg-background p-8 border border-border rounded-[16px] text-center space-y-2.5 shadow-xl">
          <Image className="mx-auto" src={Order} width={100} height={100} alt="stats one" />
          <h3>#1</h3>
          <h4>Regional Rank</h4>
        </div>
        
      </div>
    </section>
  );
};

export default stats;
