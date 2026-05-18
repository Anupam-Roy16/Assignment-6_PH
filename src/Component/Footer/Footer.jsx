// import React from 'react';
import fb from "../../assets/Facebook.png";
import tw from "../../assets/Twitter.png";
import ig from "../../assets/Instagram.png";
const Footer = () => {
  return (
    <>
    <div className="bg-[#101727] text-white">
      <div className="px-14 flex justify-between py-11 ">
        <div className="max-w-60">
          <h1 className="font-bold text-3xl">Digitools</h1>
          <p className="opacity-60 text-sm">
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-1">
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
        <div>
          <p>Social Links</p>
          <div className="gap-3 mt-3 flex">
            <img src={fb} alt="" />
            <img src={tw} alt="" />
            <img src={ig} alt="" />
          </div>
        </div>
      </div>
      <hr className="container mx-auto opacity-65" />
      <div className="flex justify-between container mx-auto opacity-60 py-5">
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
