import React from "react";
import PropTypes from "prop-types";
import MovieCard from "../Movie/MovieCard";
import Link from "next/link";

const SectionCategory = (props) => {
  return (
    <div className="pb-[3rem]">
      <div className="flex justify-between ">
        <h3 className="text-primary font-bold text-[20px] mb-[1rem] relative after:content-[''] after:h-[3px] after:w-[50%] after:bg-transparent after:top-[100%] after:absolute after:left-0 after:bg-primary">
          {props.title}
        </h3>
        {props.isSearch && (
          <Link href="/">
            <div className="text-base font-medium font-[Be Vietnam Pro] hover:text-primary cursor-pointer flex items-center">
              Xem Thêm
              <i className="bx bx-chevrons-right text-[1.6rem]"></i>
            </div>
          </Link>
        )}
      </div>

      <div
        className={`flex-2 grid grid-cols-4 gap-[30px] ${
          props.className ? props.className : ""
        }`}
      >
        {props.data.map((item, index) => {
          return (
            <MovieCard
              img={item.imageUrl || item.coverVerticalUrl}
              name={item.title || item.name}
              link={
                item.jumpAddress ||
                `tiktik://jump/detail?id=${item.id}&type=${
                  item.domainType === undefined
                    ? item.category
                    : item.domainType
                }`
              }
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

SectionCategory.propTypes = {
  data: PropTypes.array,
  title: PropTypes.string,
  link: PropTypes.string,
  className: PropTypes.string,
  isSearch: PropTypes.bool,
};

export default SectionCategory;
