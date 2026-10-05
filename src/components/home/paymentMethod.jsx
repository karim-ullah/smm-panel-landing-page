import Image from "next/image";
import React from "react";
import ContentImg from '@/assests/content.png'

const paymentMethod = () => {
  return (
    <section className="py-16">
      <div className="container">
        {/* Headings */}
        <div className="text-center">
          <h4 className="w-fit uppercase border-b-3 border-border pb-1 mx-auto">
            Payment Method
          </h4>
          <h2 className="mt-4 mb-5">
            Multiple Payment <span className="text-primary">Method</span>  
          </h2>
          <p>
            We accept Visa, Mastercard, American Express, Bkash, Nagad, Rocket, and more, so you are never stuck at checkout. Deposits are instant, and you <br /> can start with as little as $1, which means there is no reason to wait before placing your first order.
          </p>
        </div>
        {/* Image bottom */}
        <div className="w-full max-w-9/12 mx-auto mt-12">
            <Image src={ContentImg}  objectFit="cover"/>
        </div>
      </div>
    </section>
  );
};

export default paymentMethod;
