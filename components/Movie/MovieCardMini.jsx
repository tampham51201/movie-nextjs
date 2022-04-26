import React from "react";
import PropTypes from "prop-types";

import Image from "next/image";
import Link from "next/link";

const MovieCardMini = (props) => {
  console.log();
  let params = new URLSearchParams(new URL(props.link).search);
  let id = params.get("id");
  let category = params.get("type");

  return (
    <Link href={`/xemphim/${category}/${id}`} scroll={true}>
      <div className="group movie_card cursor-pointer flex justify-start mt-4">
        <div className="relative rounded-lg min-w-[100px]">
          <Image
            src={props.img}
            height="165px"
            width="100px"
            objectFit="cover"
            className=" rounded-lg transition-transform group-hover:scale-110 hover:rounded-lg"
          ></Image>
          <i className=" bx bx-play-circle absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-primary text-[3.5rem] hidden group-hover:block"></i>
        </div>
        <h3 className=" font-medium text-white group-hover:text-primary pl-2 pt-2 pr-2">
          {props.name}
        </h3>
      </div>
    </Link>
  );
};

MovieCardMini.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  link: PropTypes.string,
};

export default MovieCardMini;
