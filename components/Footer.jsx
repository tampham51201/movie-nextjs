import React from "react";

const Footer = () => {
  return (
    <div className="h-16 flex justify-between bg-black text-white px-40 items-center border-t-2 border-t-primary relative z-50">
      <div className="">©2022 TamaMovie.com</div>
      <div className=" flex justify-start items-center ">
        Kết nối với chúng tôi tại:{" "}
        <i className="bx bxl-facebook-square cursor-pointer hover:text-primary mx-1 text-lg"></i>
        <i className="bx bxl-youtube  cursor-pointer hover:text-primary mx-1 text-lg"></i>
        <i className="bx bxl-twitter cursor-pointer hover:text-primary mx-1 text-lg"></i>
        <i className="bx bxl-instagram-alt cursor-pointer hover:text-primary  mx-1 text-lg "></i>
      </div>
    </div>
  );
};

export default Footer;
