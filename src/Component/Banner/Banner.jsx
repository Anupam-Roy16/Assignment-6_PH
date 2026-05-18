// import React from 'react';
import abc from "../../assets/banner.png";
import play from "../../assets/play.png";
const Banner = () => {
  return (
    <div className="manrope min-h-[60vh] flex items-center justify-center gap-16">
      
      {/* banner desc */}
      <div className=" p-9 max-w-svh "> 
        <div className="badge badge-soft bg-blue-100 text-blue-900 mb-2">
          <div className="h-2 w-2 bg-blue-500 rounded-full text-sm"></div>
          New: AI-Powered Tools Available
        </div>
        <h1 className="text-5xl font-bold manrope mb-2 leading-13"> 
          Supercharge Your Digital Workflow
        </h1>
        <p className="text-sm mb-3 max-w-10/12 opacity-80">
          Access premium AI tools, design assets, templates, and productivity
          software—all in one place. Start creating faster today. Explore
          Products</p>
    
        <div className="flex gap-3">
          <button className="btn btn-active btn-primary rounded-3xl">Explore Products</button>
          <button className="btn btn-outline btn-primary rounded-3xl"><img src={play} alt="" />Watch Demo</button>
        </div>

      </div>

      {/* banner image */}
      <div className="max-w-sm">
        <img src={abc} alt="" />
      </div>
    </div>
  );
};
export default Banner;
