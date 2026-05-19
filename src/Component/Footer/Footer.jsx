// import React from 'react';
import fb from "../../assets/Facebook.png";
import tw from "../../assets/Twitter.png";
import ig from "../../assets/Instagram.png";
const Footer = () => {
  return (
    <>
    <div className="bg-[#101727] text-white">
      <div className="px-14 flex justify-between py-11 max-[880px]:grid max-[880px]:grid-cols-2 max-[880px]:gap-y-4 max-[604px]:grid max-[604px]:grid-cols-1 max-[604px]:place-items-center" >
        <div className="max-w-60 border">
          <h1 className="font-bold text-3xl">Digitools</h1>
          <p className="opacity-60 text-sm">
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-1 border max-[350px]:grid-cols-2">
          <p>Product</p>
          <p>Company</p>
          <p>Resources</p>
          <p className="opacity-55">Fetures</p>
          <p className="opacity-55">About</p>
          <p className="opacity-55">Documentation</p>
          <p className="opacity-55"> Pricing</p>
          <p className="opacity-55">Blog</p>
          <p className="opacity-55">HelpCenter</p>
          <p className="opacity-55">Fetures</p>
          <p className="opacity-55">About</p>
          <p className="opacity-55">Documentation</p>
          <p className="opacity-55">Pricing</p>
          <p className="opacity-55">Blog</p>
          <p className="opacity-55">HelpCenter</p>
        </div>
        <div className="max-[880px]:col-span-2 max-[604px]:col-span-1 max-[880px]:mx-auto max-[880px]:flex max-[880px]:flex-col max-[880px]:items-center border">
          <p>Social Links</p>
          <div className="gap-3 mt-3 flex">
            <img src={fb} alt="" />
            <img src={tw} alt="" />
            <img src={ig} alt="" />
          </div>
        </div>
      </div>
      <hr className="max-w-310 mx-5 opacity-65" />
      <div className="flex justify-between container mx-auto opacity-60 py-5 max-[644px]:flex-col max-[644px]:items-center">
        <p>© 2026 Digitools. All rights reserved.</p>
        <div className="flex gap-9">
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
          <p>Cookies</p>
        </div>
      </div>
    </div>  
    </>
  );
};

export default Footer;
