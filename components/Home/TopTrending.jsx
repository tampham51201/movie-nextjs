import React from "react";
import PropTypes from "prop-types";
import MovieCardMini from "../Movie/MovieCardMini";

const TopTrending = (props) => {
  return (
    <div className="mb-[7rem]">
      <div
        className="w-full h-[6rem]  rounded-t-2xl pl-[6rem] flex justify-center flex-col relative "
        style={{
          backgroundImage:
            "linear-gradient(to right bottom, #ed1e24, #ff1e56, yellow)",
        }}
      >
        <div className="border-l-[.1rem] border-black border-solid pl-3">
          <h1 className="text-white font-bold text-2xl ">{props.title}</h1>
          {/* <h3 className="text-black font-medium text-lg">{p}</h3> */}
        </div>
        <div className="absolute top-[50%] left-[1.2rem] text-white -rotate-6 font-extrabold text-3xl translate-y-[-50%] leading-[32px]">
          TOP
          <span className="block text-center ">10</span>
        </div>
      </div>
      <div className="h-[35rem] overflow-y-scroll">
        {props.data.map((item, index) => {
          return (
            <MovieCardMini
              img={item.imageUrl || item.coverVerticalUrl}
              name={item.title || item.name}
              link={
                item.jumpAddress ||
                `tiktik://jump/detail?id=${item.id}&type=${item.domainType}`
              }
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

TopTrending.propTypes = {
  data: PropTypes.array,
  title: PropTypes.string,
  desc: PropTypes.string,
  className: PropTypes.string,
};

export default TopTrending;
